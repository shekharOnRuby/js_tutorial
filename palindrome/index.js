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