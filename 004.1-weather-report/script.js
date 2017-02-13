Access-Control-Allow-Origin: *
var xhr = new XMLHttpRequest();
console.log(xhr.open ("GET", "http://localhost:8080/api"));
xhr.send(null);
