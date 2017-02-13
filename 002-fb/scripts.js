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
		if (this.innerHTML =="Like"){
			this.innerHTML = "Disdain"
			numString = numString+1;
			finished = numString.toString().concat(likeField);
			this.nextElementSibling.nextElementSibling.innerHTML = finished;
		}
		else{
			this.innerHTML = "Like";
			numString = numString-1;
			finished =numString.toString().concat(likeField);
			this.nextElementSibling.nextElementSibling.innerHTML = finished;

		}
	}
	var pray = document.getElementsByClassName("prayer");
	for (var i=0; i<pray.length; i++)
		pray[i].addEventListener("click", test)
}

window.addEventListener("load", mainLikes);
	function mainLikes(){
		function inbueWorth(){

		likeField =document.getElementsByClassName('mainLikes')[0].innerHTML;
		numString= likeField.slice(0, 2);
		likeField =likeField.slice(2);
		numString =Number(numString);
		if (this.innerHTML =="Like"){
			this.innerHTML = "Disdain"
			numString = numString+1;
			finished = numString.toString().concat(likeField);
			document.getElementsByClassName('mainLikes')[0].innerHTML = finished;
		}
		else{
			this.innerHTML = "Like";
			numString = numString-1;
			finished =numString.toString().concat(likeField);
			document.getElementsByClassName('mainLikes')[0].innerHTML = finished;

		}
	}
	var mainPray = document.getElementsByClassName("action--like")[0];
		mainPray.addEventListener("click", inbueWorth)
}

window.addEventListener("load", cursormove)
	function cursormove(){
		function slide(){
		that = document.getElementsByClassName("lastBox")[0].focus();
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
				var modal = document.getElementsByClassName("modal")[0]
				modal.style.display = "block"
				document.getElementsByClassName("modal__title")[0].innerHTML = "FB COP"
				var text= document.getElementsByClassName("post__body")[0].innerHTML
				document.getElementsByClassName("modal__body")[0].innerHTML = "Honnered sir, my village in Nigeria...."
				event.preventDefault()
			}
			else {
				if (this.previousElementSibling.className == "lastBox") {
					postComments =this.parentElement.parentElement.parentElement.previousElementSibling
					post = document.createElement("div");
					post.className ="comment media";
					imageHolder = document.createElement("img");
					imageHolder.src = "images/user.png";
					imageHolder.className ="profilePhoto";
					post.appendChild(imageHolder);

					inPostDivOne = document.createElement("div");
					inPostDivOne.className="media__info"

					personBox =document.createElement("a");
					personBox.href ="#";
					myName = document.createTextNode("Ben ");
					personBox.appendChild(myName);
					personBox.className ="person";

					text = document.createTextNode(eMouthWords);

					commentInfo = document.createElement("div");
					commentInfo.className= "comment__info";
					
					prayerBox =document.createElement("a");
					prayerBox.href ="#";
					prayer1 = document.createTextNode("Like");
					prayerBox.appendChild(prayer1);
					prayerBox.className ="prayer";

					replyBox =document.createElement("a");
					replyBox.href ="#";
					reply1 = document.createTextNode("Reply");
					replyBox.appendChild(reply1);
					replyBox.className ="reply";

					time =document.createTextNode("Yesterday at 10:00am");

					inPostDivOne.appendChild(personBox);
					inPostDivOne.appendChild(text);
					
					commentInfo.appendChild(prayerBox);
					commentInfo.appendChild(replyBox);
					commentInfo.appendChild(time);

					inPostDivOne.appendChild(commentInfo)

					post.appendChild(inPostDivOne);
					postComments.appendChild(post);
					comments = this.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML
					numString=comments[0];
					comments=comments.substring(1);
					numString =Number(numString);
					numString = numString+1;
					finished = numString.toString().concat(comments);
					this.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML = finished	
					this.previousElementSibling.value = ""
					event.preventDefault()
				}
				else {
					postComments =this.parentElement.parentElement.parentElement.parentElement
					post = document.createElement("div");
					post.className ="comment media";
					imageHolder = document.createElement("img");
					imageHolder.src = "images/user.png";
					imageHolder.className ="profilePhoto";
					post.appendChild(imageHolder);
					inPostDivOne = document.createElement("div");
					inPostDivOne.className="media__info"

					personBox =document.createElement("a");
					personBox.href ="#";
					myName = document.createTextNode("Ben ");
					personBox.appendChild(myName);
					personBox.className ="person";

					text = document.createTextNode(eMouthWords);

					commentInfo = document.createElement("div");
					commentInfo.className= "comment__info";
					
					prayerBox =document.createElement("a");
					prayerBox.href ="#";
					prayer1 = document.createTextNode("Like");
					prayerBox.appendChild(prayer1);
					prayerBox.className ="prayer";

					replyBox =document.createElement("a");
					replyBox.href ="#";
					reply1 = document.createTextNode("Reply");
					replyBox.appendChild(reply1);
					replyBox.className ="reply";

					time =document.createTextNode("Yesterday at 10:00am");

					inPostDivOne.appendChild(personBox);
					inPostDivOne.appendChild(text);
					
					commentInfo.appendChild(prayerBox);
					commentInfo.appendChild(replyBox);
					commentInfo.appendChild(time);

					inPostDivOne.appendChild(commentInfo)

					post.appendChild(inPostDivOne);
					

					comments = this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML;
					if (comments == "Reply"){
						this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = "1 Reply";
						this.previousElementSibling.value =""
						event.preventDefault()
						postComments.insertBefore(post, postComments.childNodes[0]);
					}
					else if (comments == "1 Reply"){
						this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = "2 Replies";
						this.previousElementSibling.value =""
						event.preventDefault()
						postComments.insertBefore(post, postComments.childNodes[1]);
					}
					else{
						debugger
						numString=comments[0];
						comments=comments.substring(1);
						numString =Number(numString);

						insertAt = numString *2;
						numString = numString+1;
						postComments.insertBefore(post, postComments.childNodes[insertAt]);
						debugger
						finished = numString.toString().concat(comments);
						this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = finished;
						this.previousElementSibling.value =""
						event.preventDefault()
					}
				}			
			}
		}

		var interject = document.getElementsByClassName("submit");
		for (var i=0; i<interject.length; i++)
			interject[i].addEventListener("click", say)
		var profile = document.getElementsByClassName("person");
		for (var i=0; i<profile.length; i++)
			profile[i].addEventListener("click", name)

}

window.addEventListener("load", name)
	function name(){
		function nomDePleur(){
			if (this.innerHTML == "Ben "){
				var modal = document.getElementsByClassName("modal")[0];
				modal.style.display = "block";
				document.getElementsByClassName("modal__title")[0].innerHTML = this.innerHTML;
				var text= "99999999999999999999999999999999999999999999999999999999?";
				document.getElementsByClassName("modal__body")[0].innerHTML = text;
			}
			else {
				var modal = document.getElementsByClassName("modal")[0]
				modal.style.display = "block"
				document.getElementsByClassName("modal__title")[0].innerHTML = this.innerHTML
				var text= "friends: 0. Who needs em?"
				document.getElementsByClassName("modal__body")[0].innerHTML = text
			}
		}
		var profile = document.getElementsByClassName("person");
		for (var i=0; i<profile.length; i++)
			profile[i].addEventListener("click", nomDePleur)
	}

window.addEventListener("load", box)
	function box(){
		function close(){
			var modal = document.getElementsByClassName("modal")[0]
			modal.style.display = "none"
			

		}
		var profile = document.getElementsByClassName("modal__close")[0];
			profile.addEventListener("click", close)
	}

window.addEventListener("load", share)
	function share(){
		function diseminate(){
			var modal = document.getElementsByClassName("modal")[0]
			modal.style.display = "block"
			var spread = "Share "
			var spread2 = "'s post! (just ask yourself if it's worth it....)"
			var spread3= document.getElementsByClassName("person")[0].innerHTML
			document.getElementsByClassName("modal__title")[0].innerHTML = spread + spread3 +spread2
			var text= document.getElementsByClassName("post__body")[0].innerHTML
			document.getElementsByClassName("modal__body")[0].innerHTML = text
			


		}
		var spout = document.getElementsByClassName("action--share")[0];
			spout.addEventListener("click", diseminate)
}

window.onclick  = function(event) {
	var modal = document.getElementsByClassName("modal")[0]
	if (event.target == modal){
		modal.style.display = "none";

	}
}