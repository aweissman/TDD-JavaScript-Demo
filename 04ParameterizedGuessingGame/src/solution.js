// setting up a variable named authorsName with a value of "William Doane"
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
// creates a function called isWinner that checks to see if num and guess are equal to each other. if they are then it returns true else it returns false.
var isWinner = function (num, guess) {
  if (num === guess) {
   return true;
  } else {
   return false;
  }
};
// creates a function called main
var main = function () {
// creates two variables one called num and one called guess
  var num, guess;
// num is equal to rollDie function
  num = rollDie(lowest, highest);
// guess is set equal to getUserGuess function
  guess = getUserGuess(lowest, highest);
// guess is then set equal to convertToDecimal a.k.a. the users guess
  guess = convertToDecimal(guess);
// sets up a while loop that if num and guess are not equal to each other will display an alert message "Try agian" and reset the value of guess
  while ( !isWinner(num, guess) ) {
    alert("Try again.");
    guess = getUserGuess(lowest, highest);
    guess = convertToDecimal(guess);
  }
// else (in this case) if guess and num are equal to each other it will display an alert message "You Win!"
  alert("You win!");
  
};