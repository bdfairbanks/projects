window.addEventListener("load", repliesFunctionality);

function repliesFunctionality(){
	function attention(){
		that = this.parentElement
		theOther = that.nextElementSibling 
		if (theOther.style.display == "none"){
			theOther.style.display = "block"
			var gratify = document.getElementsByClassName("reply");
			for (var i=0; i<gratify.length; i++)
			gratify[i].addEventListener("click", attention)
		}
		else if (theOther.style.display == "block"){
			theOther.style.display = "none"

			var gratify = document.getElementsByClassName("reply");
			for (var i=0; i<gratify.length; i++)
			gratify[i].addEventListener("click", attention)
		}
	}
	

	var gratify = document.getElementsByClassName("reply");
	for (var i=0; i<gratify.length; i++)
	gratify[i].addEventListener("click", attention)

}

window.addEventListener("load", likes);
	function likes(){
		function test(){

		likeField =this.nextElementSibling.nextElementSibling.innerHTML;
		numString= likeField[0];
		likeField =likeField.substring(1)
		numString =Number(numString);
			numString = numString+1;
			finished = numString.toString().concat(likeField);
			this.nextElementSibling.nextElementSibling.innerHTML = finished

		var pray = document.getElementsByClassName("prayer");
		for (var i=0; i<pray.length; i++)
		pray[i].addEventListener("click", test)
	}
	var pray = document.getElementsByClassName("prayer");
	for (var i=0; i<pray.length; i++)
		pray[i].addEventListener("click", test)
}