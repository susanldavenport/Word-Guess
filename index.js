//* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//* Randomly selects a word and uses the `Word` constructor to store it

//* Prompts the user for each guess and keeps track of the user's remaining guesses

//6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)

const Word = require('./word.js');
const inquirer = require('inquirer');

let guessLeft = 5;
let userGuess;


function userInput () {
  
};