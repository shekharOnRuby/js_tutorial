function reverse(str){
 return Array.from(str).reverse().join("")
}




function Phrase(content){
    this.content = content
    this.palindrome = function palindrome(){
        let processedContent = this.content.toLowerCase()
        return processedContent === reverse(processedContent)
    }

    this.louder = function louder(){
        return this.content.toUpperCase()
    }
}