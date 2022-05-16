
function piratize(input){
    let final = ''
    let translatedWords = []
    let words = input.split(' ')
    for (const word of words){
        if (word === 'pounds'){
                translatedWords.push('doubloons')
        }
        else if (isNaN(word) == false){
                translatedWords.push(word)
        }
        else {
            let letters = word.split('')
            let finalWord = letters.slice(1).join('') + letters[0] + 'arr'
            translatedWords.push(finalWord)
        }
    }
    
return translatedWords.join(' ')
    
} 

