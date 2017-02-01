var events = require('events'),
    async = require('async'),
    colors = require('colors'),
    winston = require('winston'),
    stdio = process.binding('stdio');
    function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var prompt = module.exports = Object.create(events.EventEmitter.prototype);

var logger = prompt.logger = new winston.Logger({
  transports: [
    new (winston.transports.Console)()
    ]
    });

prompt.started    = false;
prompt.paused     = false;
prompt.allowEmpty = false; 

var stdin, stdout;

prompt.properties = {};



logger.cli();


prompt.start = function (options) {
  if (prompt.started) {
    return;
  }


  options = options        || {};
  stdin   = options.stdin  || process.openStdin();
  stdout  = options.stdout || process.stdout;
  
  prompt.allowEmpty = options.allowEmpty || false;
  
  process.on('SIGINT', function () {
    stdout.write('\n');
    process.exit(1);
  })
  
  prompt.emit('start');
  prompt.started = true;
  return prompt;
};
prompt.pause = function () {
  if (!prompt.started || prompt.paused) {
    return;
  }
  
  stdin.pause();
  prompt.emit('pause');
  prompt.paused = true;
  return prompt;
};
prompt.resume = function () {
  if (!prompt.started || !prompt.paused) {
    return;
  }
  
  stdin.resume();
  prompt.emit('resume');
  prompt.paused = false;
  return prompt;
};
prompt.get = function (msg, callback) {
  var vars = !Array.isArray(msg) ? [msg] : msg,
      result = {};
  
  vars = vars.map(function (v) {
    if (typeof v === 'string') {
      v = v.toLowerCase();
    }
    
    return prompt.properties[v] || v;
  });
  
  function get(target, next) {
    prompt.getInput(target, function (err, line) {
      if (err) {
        return next(err);
      }
      
      var name = target.name || target;
      result[name] = line;
      next();
    });
  }
  
  async.forEachSeries(vars, get, function (err) {
    return err ? callback(err) : callback(null, result);
  });
  
  return prompt;
};

prompt.getInput = function (prop, callback) {
  var name   = prop.message || prop.name || prop,
      raw    = ['prompt', ': ' + name.grey, ': '.grey],
      read   = prop.hidden ? prompt.readLineHidden : prompt.readLine,
      length, msg;
  
  if (prop.default) {
    raw.splice(2, -1, ' (' + prop.default + ')');
  }
  length = raw.join('').length;
  raw[0] = raw[0];
  msg = raw.join('');
  
  if (prop.help) {
    prop.help.forEach(function (line) {
      logger.help(line);
    });
  }
  
  stdout.write(msg); 
  prompt.emit('prompt', prop);
  
  read.call(null, function (err, line) {
    if (err) {
      return callback(err);
    }
  
    if (!line || line === '') {
      line = prop.default || line;
    }
    
    if (prop.validator || prop.empty === false) {
      var valid;
      
      if (prop.validator) {
        valid = prop.validator.test 
         ? prop.validator.test(line)
         : prop.validator(line);
      }
      
      if (prop.empty === false && valid) {
        valid = line.length > 0;
        prop.warning = prop.warning || 'You must supply a value.';
      }
      
      if (!valid) {
        logger.error('Invalid input for ' + name.grey);
        if (prop.warning) {
          logger.error(prop.warning);
        }
        
        prompt.emit('invalid', prop, line);
        return prompt.getInput(prop, callback);
      }
    }
        
    logger.input(line.yellow);
    callback(null, line);
  });
    return prompt;
};
prompt.addProperties = function (obj, properties, callback) {
  properties = properties.filter(function (prop) {
    return typeof obj[prop] === 'undefined';
  });
  
  if (properties.length === 0) {
    return callback(obj);
  }
  
  prompt.get(properties, function (err, results) {
    if (err) {
      return callback(err);
    }
    else if (!results) {
      return callback(null, obj);
    }
    
    function putNested (obj, path, value) {
      var last = obj, key; 
      
      while (path.length > 1) {
        key = path.shift();
        if (!last[key]) {
          last[key] = {};
        }
        
        last = last[key];
      }
      
      last[path.shift()] = value;
    }
    
    Object.keys(results).forEach(function (key) {
      putNested(obj, key.split('.'), results[key]);
    });
    
    callback(null, obj);
  });
  
  return prompt;
  };
prompt.readLine = function (callback) {
  var value = '', buffer = '';
  prompt.resume();
  stdin.setEncoding('utf8');
  stdin.on('error', callback);
  stdin.on('data', function data (chunk) {
    value += buffer + chunk;
    buffer = '';
    value = value.replace(/\r/g, '');
    if (value.indexOf('\n') !== -1) {
      if (value !== '\n') {
        value = value.replace(/^\n+/, '');
      }
      
      buffer = value.substr(value.indexOf('\n'));
      val = value.substr(0, value.indexOf('\n'));
      prompt.pause();
      stdin.removeListener('data', data);
      stdin.removeListener('error', callback);
      value = value.trim();
      callback(null, value);
    }
  });
  
  return prompt;
};
prompt.readLineHidden = function (callback) {
  var value = '', buffer = '';
  stdio.setRawMode(true);
  prompt.resume();
  stdin.on('error', callback);
  stdin.on('data', function data (c) {
    c = '' + c;
    switch (c) {
      case '\n': case '\r': case '\r\n': case '\u0004':
        stdio.setRawMode(false);
        stdin.removeListener('data', data);
        stdin.removeListener('error', callback);
        value = value.trim();
        stdout.write('\n');
        stdout.flush();
        prompt.pause();
        return callback(null, value)
      case '\u0003': case '\0':
        stdout.write('\n');
        process.exit(1);
        break;
      default:
        value += buffer + c
        buffer = '';
        break;
    }
  });
  
  return prompt;
};