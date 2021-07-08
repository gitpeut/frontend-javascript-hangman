function displayWordSoFar(word, guesses) {
  // WRITE ME
    let output = '';
    for (let i = 0; i < word.length; i++) {
        // if character at position i is guessed display letter + space
        // else display underscore + space
        const letter = `${word.charAt(i)}` ;

        if (  guesses.includes( letter )  ){
            output += letter + ' ';
        }else{
            output +=   '_ ';
        }

    }

    return output;
}

function isGameWon(word, guesses) {
  // WRITE ME
    for (let i = 0; i < word.length; i++) {
        // if a character in word is not in guesses,
        // then retturn false
        const letter = `${word.charAt(i)}` ;

        if ( !guesses.includes( letter )  ){
            return false;
        }

    }
    // if we get here all characters in word have been guessed
    return true;
}

function displayGallow( wrongcount ) {

    switch (wrongcount) {
        case 1:
            console.log("|\n|\n|\n|\n|\n==========");
            break;
        case 2: // top beam
            console.log("__________\n|\n|\n|\n|\n|\n==========");
            break;
        case 3: // support
            console.log("__________\n| /\n|/\n|\n|\n|\n==========");
            break;
        case 4: // rope
            console.log("__________\n| /      |\n|/\n|\n|\n|\n==========");
            break;
        case 5: // head and arms
            console.log("__________\n| /      |\n|/      _O_\n|\n|\n|\n==========");
            break;
        case 6: // body
            console.log("__________\n| /      |\n|/      _O_\n|        O\n|\n|\n==========");
            break;
        case 7: // legs
            console.log("__________\n| /      |\n|/      _O_\n|        O\n|       / \\\n|\n==========");
            break;
        //case 0:
        default: // flower
            console.log("   \\ | /\n   --O--\n   / | \\\n     |\n   0 | 0\n..........");
            break;
    }

}


function isGameLost(word, guesses) {
  // WRITE ME
    let wrongCount= 0;

    for (let i = 0; i < guesses.length; i++) {
        // if a character in guesses is not in word, add 1 to wrongCount
        if ( !word.includes( guesses[i] ) ) {
            wrongCount++;
            //if wrongCount >= 7 game is lost
            if (wrongCount >= 7){
                displayGallow( wrongCount );
                return true;
            }
        }
    }
    displayGallow(  wrongCount );

    // if we get here, game is not lost (yet)
    return false;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
