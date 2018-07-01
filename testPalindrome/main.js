let Phrase = require("shk-palindrome")

function palindromeTester(event){
    event.preventDefault()
    // let string = prompt("Please enter a string for palindrome testing: ")
    let phrase = new Phrase(event.target.phrase.value)
    let palindromeResult = document.querySelector("#palindromeResult")

    if (phrase.palindrome()){
        palindromeResult.innerHTML=(`<strong>"${phrase.content}" </strong>is a Palindrome`)
    }else {
        palindromeResult.innerHTML=(`<strong>"${phrase.content}" </strong>is not a Palindrome`)
    }
}
document.addEventListener("DOMContentLoaded",function(){
    let tester = document.querySelector("#palindromeTester")
    tester.addEventListener("submit",function(){
        palindromeTester(event)
    })
})