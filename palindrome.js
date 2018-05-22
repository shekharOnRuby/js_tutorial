function reverse(str){
 return Array.from(str).reverse().join("")
}

function Phrase(content){
    this.content = content

    this.processedContent = function processedContent() {
        return this.content.toLowerCase()
    }

    this.palindrome = function palindrome(){
        
        return this.processedContent() === reverse(this.processedContent())
    }

    this.louder = function louder(){
        return this.content.toUpperCase()
    }
}

function TranslatedPhrase(content, translation){
    this.content = content;
    this.translation = translation

    this.processedContent = function processedContent(){
        return this.translation.toLowerCase()
    }
}

TranslatedPhrase.prototype = new Phrase()