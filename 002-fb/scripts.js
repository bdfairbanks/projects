function addclickers(input, functionname){
holder = document.getElementsByClassName("input");
			for (var i=0; i<holder.length; i++)
			holder[i].addEventListener("click", functionname);
		return holder
}


window.addEventListener("load", repliesFunctionality);

function repliesFunctionality(){
	function attention(){
		that = this.parentElement
		theOther = that.nextElementSibling 
		if (theOther.style.display == "none"){
			theOther.style.display = "block"
		}
		else if (theOther.style.display == "block"){
			theOther.style.display = "none"
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



window.addEventListener("load", cursormove)
	function cursormove(){
		function slide(){
		that = document.getElementById("lastBox").focus();
			var move = document.getElementsByClassName("action--comment")[0]
			move.addEventListener("click", slide)
		}
		var move = document.getElementsByClassName("action--comment")[0]
			move.addEventListener("click", slide)

	}

window.addEventListener("load", comment)
	function comment(){
		function say(){
			eMouthWords = this.previousElementSibling.value
			if (eMouthWords == ""){
				console.log("thisneedsmodal")
			}
			else {
				postComments =this.parentElement.parentElement.parentElement.previousElementSibling
				post = document.createElement("div");
				post.className ="comment media"
				text = document.createTextNode(eMouthWords);
				post.appendChild(text);
				postComments.appendChild(post);
				comments = this.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML
				numString=comments[0]
				comments=comments.substring(1)
				debugger
				numString =Number(numString);
				numString = numString+1;
				finished = numString.toString().concat(comments);
				this.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML = finished
				debugger
			}
		}

		var interject = document.getElementsByClassName("submit");
		for (var i=0; i<interject.length; i++)
			interject[i].addEventListener("click", say)
}