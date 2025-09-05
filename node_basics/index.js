import textFormat from 'chalk';

const blueText = "This is blue text!";
const redText = "And this is red text!"

console.log(textFormat.blue(blueText) + " " + textFormat.red(redText) );  //Concatenation of two different color texts
console.log(textFormat.yellow.bold("This is yellow bold text (first line)\nThis is yellow bold text (second line)"));  //Yellow bold text in two lines