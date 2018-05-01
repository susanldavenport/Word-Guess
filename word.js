//Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//* An array of `new` Letter objects representing the letters of the underlying word

//* A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//* A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

//requires letter.js

const Letter = require('./letter.js');

function Word(word) {
  this.wordArr = word.split('');
  this.letterCount = this.wordArr.length;
  this.wordArr.forEach(letter => {
    let test = new Letter(letter);
    console.log(test);
    console.log(test.isGuessed);
  })
};

module.exports = Word;