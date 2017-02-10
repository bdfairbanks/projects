window.addEventListener("load", questions);
	function questions(){
		function spicer() {
			var holder = document.getElementsByName("answer")
			for (var i=0; i<holder.length; i++)
				if (holder[i].value != "") {
					if (i == 0) {
						if (holder[i].value == "2.5"){
							document.getElementsByClassName("chastisement")[0].innerText ="I'm worried that you know that...";
							var right = document.getElementsByClassName("right")[0].innerText;
							document.getElementsByClassName("right")[0].innerText = parseInt(right) +1;
						}
						else {
							document.getElementsByClassName("chastisement")[0].innerText = "Whew, thank god.";
							var wrong = document.getElementsByClassName("wrong")[0].innerText;
							document.getElementsByClassName("wrong")[0].innerText = parseInt(wrong) +1;
						}

						one = document.getElementsByClassName("question1")[0];
						two = document.getElementsByClassName("question2")[0];
						one.style.display = "none";
						two.style.display = "block";
						holder[i].value = "";
						event.preventDefault()
					}
					else if  (i == 1) {
						if (holder[i].value == "901"|| holder[i].value == "901 F"){
							document.getElementsByClassName("chastisement")[0].innerText = "Cheater";
							var right = document.getElementsByClassName("right")[0].innerText;
							document.getElementsByClassName("right")[0].innerText = parseInt(right) +1;
						}
						else {
							document.getElementsByClassName("chastisement")[0].innerText = "The question was about Venus...";
							var wrong = document.getElementsByClassName("wrong")[0].innerText;
							document.getElementsByClassName("wrong")[0].innerText = parseInt(wrong) +1;
						}
						two = document.getElementsByClassName("question2")[0];
						three = document.getElementsByClassName("question3")[0];
						two.style.display = "none"
						three.style.display = "block"
						holder[i].value = ""
						event.preventDefault()
					}
					if (i == 2) {
						if (holder[i].value == "24"|| holder[i].value == "24 m.p.h." || holder[i].value == "24 mph"){
							document.getElementsByClassName("chastisement")[0].innerText = "NERD!!!!!";
							var right = document.getElementsByClassName("right")[0].innerText;
							document.getElementsByClassName("right")[0].innerText = parseInt(right) +1;
						}
						else {
							document.getElementsByClassName("chastisement")[0].innerText = "You answered for a europen swallow, right?";
							var wrong = document.getElementsByClassName("wrong")[0].innerText;
							document.getElementsByClassName("wrong")[0].innerText = parseInt(wrong) +1;
						}
	
						holder[i].value = ""
						event.preventDefault()
					}
				}
		}

	var clicker = document.getElementsByClassName("submit")
	for (var i = 0; i<clicker.length; i++)
		clicker[i].addEventListener("click", spicer)

}