//The fact that this does anything but take an input and run it through a
//loop three times is directly attributable to evin. I thought some of her
// code could have been combined, and did it.  I liked my engine better
//(only because i wrote it, i think, haha) so i kept it.  Also it produces
//an infinite loop at the end. which is not good.

//required starting materials
var prompt = require('prompt')
var counter1= 0;
var counter2 = 0;


prompt.start();
//starts the game
startGame();

//every time the game is started the score is czeched. Then the
//next phase of the game is started.

function startGame(){
  czechwinner(counter1, counter2)
  console.log(counter1)
  p1ayerInput()
}

// a combination input gatherer, input screener and input standerdizer
//the screening does not seem to work...
function p1ayerInput(){
  prompt.get(['p1_input'], function (err, result) {
    var p1_input = result.p1_input.toLowerCase();
    if (p1_input == "rock"||"scissors"||"paper"){
     p2ayerInput(p1_input)
    }

    else{
      p1ayerInput()
    }
  });
}
// see above, with the addition of bringing through the result of P1ayerInput
function p2ayerInput(p1_input){
  prompt.get(['p2_input'], function (err, result) {
    var p2_input = result.p2_input.toLowerCase();
    if (p2_input == "rock" | "scissors"||"paper"){
    game(p1_input, p2_input)
    }

    else{
    p2ayerInput(p1_input)
    }
  });
}
//A modified version of my original design.  At first it would bring in 
//the choices and then simply run through the loop three times.  Now it
//brings in the choices, but crashes when given a non-specified choice.
function game(p1_input, p2_input){
  while (counter1<3&&counter2<3){ 

    if (p1_input == "rock" && p2_input == "paper") {
        
      counter2 = counter2 +1;

      startGame()

        return czechwinner(counter1, counter2);
    }
    else if (p1_input == "rock" && p2_input == "scissors") {
        
      counter1 = counter1 +1;

      startGame();

        return czechwinner(counter1, counter2);
    }
    else if (p1_input == "scissors" && p2_input == "paper") {
      counter1 = counter1 +1;

      startGame();

        return czechwinner(counter1, counter2);
    }
    else if (p1_input == "scissors" && p2_input == "rock") {
        
        counter1 = counter1 +1;

        startGame();
        
          return czechwinner(counter1, counter2);
    }
    else if (p1_input == "paper" && p2_input == "rock") {
     
       counter1 = counter1 + 1;
     
       startGame();
     
        return czechwinner(counter1, counter2);
    }
    else if (p1_input == "paper" && p2_input == "scissors") {
     
      counter2 = counter2 + 1;
     
      startGame();
     
        return czechwinner(counter1, counter2);
    }
    else if (p1_input == p2_input);

        return startGame();
     
  }

}
// The place where the scores are calculated, best of 5
 function czechwinner(counter1, counter2){
if (counter2 == 3){
  console.log("Player 2 Wins!")
}
if (counter1 == 3){
console.log("Player 1 is teh winnerar")

}
}

/*
tests
//doesn't seem to be working, so important test.
function sorted(){
  if (farce == "rock" | "scissors"||"paper"){
    console.log("sorted correctly")
    }

  else{ 
    console.log("failure! Shame!!! SHAME!!!!")
    }
  }
function sorted()

//this is a base template for checking all the loops in the game
//function.
function bothequal(){
  if ("paper" == "paper" &&  "scissors"== "scissors") {
     
    console.log("equal")

  else   
     console.log("hopefully this was intentional")

}
// Counter 1 or 2 can be swapped out to test both variables.
 function countercheck(){
counter1= 0
counter2= 0
for (i=0, i<3, i++){
  counter2 = counter2 + 1;
}
if (counter2 == 3){
  console.log("Player 2 Wins!")
}
if (counter1 == 3){
console.log("Player 1 is teh winnerar")

}
}