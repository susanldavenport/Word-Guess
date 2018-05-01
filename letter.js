//Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//* A string value to store the underlying character for the letter

//* A boolean value that stores whether that letter has been guessed yet

//* A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//* A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

console.log('inside letter.js');

function Letter (guess){
  console.log('here');
  this.ltrGuess = guess,
  console.log(this.ltrGuess);
  this.isGuessed = false,
  this.retGuess = function(){
    if (this.isGuessed === true) {
      return guess;
    } else {
      return ('_');
      console.log(guess);
    }
  }
  this.checked = function(guess) {
    if (guess === this.ltrGuess) {
      console.log('Checked');
      this.isGuessed === true;
    } else {
      console.log('No Match');
      this.isGuessed === false;
    }
  }
};

// module.exports = Letter;
Letter('y');
