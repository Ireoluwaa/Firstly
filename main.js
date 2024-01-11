const dynamicValue = document.getElementById("dynamic-text");

const word = ["a Software Engineer...", "an Anatomist...","Human Being..."]
const wordIndex = 0;
let letterIndex = 0;

function printLetters(word) {
    //for(let index = 0; index < word.length; index++){
       // console.log (word.charAt(index));
    //}
    if(letterIndex == word.length){
        clearLetters()
    }
    else if (letterIndex < word.length){
        dynamicValue.textContent += word.charAt(letterIndex);
        letterIndex += 1;
          setTimeout(function() {
            printLetters(word)
          }, 300);
    }   
} 
function clearLetters() {
     if(letterIndex > -1) {
        let updatedWord = "";
        for(let index = 0; index < letterIndex; index++) {
          updatedWord += word[wordIndex].charAt(index)
        }
        dynamicValue.textContent = updatedWord;
        letterIndex += 1;
        setTimeout(clearLetters, 100)
     }
}

printLetters(word[wordIndex])

