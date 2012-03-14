// setting up a variable named authorsName with a value of "William Doane"
// setting up a variable named lowest with a value of 1
var authorsName = "William Doane",
// setting up a variable named lowest with a value of 1   
 	lowest = 1,
//setting up a variable named highest witha value of 6
    highest = 6;

// sets up a fuction called rollDie that works by using the random function and multiplying it by max and then adding min to it. In this case min is 1 and max is 6 so the results give us a dice that roll between 1 - 6.
var rollDie = function (min, max) {
  return Math.floor(Math.random() * max) + min;
};
// setting up a variable that returns a prompt: Guess a number from min to max. In this case min is 1 and max is 6.
var getUserGuess = function (min, max) {
  return prompt("Guess a number from " + min + " to " + max);
};
// takes the variable getUserGuess and converts it from a string to a decimal integer using the parseInt command. 
var convertToDecimal = function (str) {
  return parseInt(str, 10);
};
//
var isWinner = function (num, guess) {
  if (num === guess) {
   return true;
  } else {
   return false;
  }
};
//
var main = function () {
  var num, guess;
  
  num = rollDie(lowest, highest);
  guess = getUserGuess(lowest, highest);
  guess = convertToDecimal(guess);
  
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserGuess(lowest, highest);
    guess = convertToDecimal(guess);
  }
//
  alert("You win!");
  
};