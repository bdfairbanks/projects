var xhr = new XMLHttpRequest();
xhr.open ("GET", "http://localhost:8080/api");
xhr.onload = function(){
	
	var conditions = JSON.parse(xhr.responseText);
	console.log(conditions["timezone"]);
};
xhr.send(null);