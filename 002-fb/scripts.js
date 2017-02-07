window.addEventListener("load", allStuff);

function allStuff(){
	function attention(){
	 debugger
		 sublime= this.firstChild
		sublime.style.display = "block";
		
		}
	

	var gratify = document.getElementsByClassName("reply");
	for (var i=0; i<gratify.length; i++)
	gratify[i].addEventListener("click", attention)

}

window.addEventListener("load", likes);
	function likes(){
		console.log(this.lastChild)


	var pray = document.getElementsByClassName("action--like");
	for (var i=0; i<pray.length; i++)
		pray[i].addEventListener("click", likes)
}