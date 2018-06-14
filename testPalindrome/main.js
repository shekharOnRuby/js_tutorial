let Phrase = require("shk-palindrome")

let string = prompt("Please enter a string for palindrome testing: ")

let phrase = new Phrase(string)

if (phrase.palindrome()){
    alert(`"${phrase.content}" is a Palindrome`)
}else {
    alert(`"${phrase.content}" is not a Palindrome`)
}