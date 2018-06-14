(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Phrase

String.prototype.reverse = function(){
 return Array.from(this).reverse().join("")
}

String.prototype.blankString = function(){
    return this.match(/^\s$/)
}
function Phrase(content){
    this.content = content

    this.processor = function(string){
        return string.toLowerCase()
    }

    this.letters = function letters(){
        return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("")
    }
    
    this.processedContent = function processedContent() {
        return this.processor(this.content)
    }

    this.palindrome = function palindrome(){
        return this.processedContent() === this.processedContent().reverse()
    }

    this.louder = function louder(){
        return this.content.toUpperCase()
    }

    this.blank = function blank(){
        return this.blankString()
    }
}

function TranslatedPhrase(content, translation){
    this.content = content;
    this.translation = translation

    this.processedContent = function processedContent(){
        return this.processor(this.translation)
    }
}

TranslatedPhrase.prototype = new Phrase()
},{}],2:[function(require,module,exports){
let Phrase = require("shk-palindrome")

function palindromeTester(){
    let string = prompt("Please enter a string for palindrome testing: ")

    let phrase = new Phrase(string)

    if (phrase.palindrome()){
        alert(`"${phrase.content}" is a Palindrome`)
    }else {
        alert(`"${phrase.content}" is not a Palindrome`)
    }

  
}
document.addEventListener("DOMContentLoaded",function(){
    let button = document.querySelector("#palindromeTester")
    button.addEventListener("click",function(){
        palindromeTester()
    })
})
},{"shk-palindrome":1}]},{},[2]);
