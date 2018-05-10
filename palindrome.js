function reverse(str){
 return Array.from(str).reverse().join("")
}

function palindrome(str){
    let processedContent = str.toLowerCase()
    return processedContent === reverse(processedContent)
}