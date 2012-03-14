// setting up a variable named authorsName with a value of "William Doane"
var authorsName = "William Doane";

// sets up a fuction called rollDie that works by using the random function and rolls between 0-5 and then adds +1 so the range becomes 1-6, the floor function then turns it to a regular integer instead of a float.
var rollDie = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// this sets up a function called main that creates an alert box that displays: You rolled a + the rollDie value

var main = function () {
  alert( 'You rolled a ' + rollDie() );
};