const {question} = require("readline-sync");
const {displayWordSoFar, isGameWon, isGameLost} = require("./gamelogic");

function game(word, guesses) {

    //convert word to lowercase
    word = word.toLowerCase();

    let letter = '';
    // ask for a letter, if empty, ask again.
    do {
        console.log('\n' + displayWordSoFar(word, guesses));
        letter = question("Raad een letter: ");
    } while (!letter.length);

    // make sure all letters are lowercase and
    // only the first letter is used.

    letter = letter.charAt(0).toLowerCase();

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter);

    if (isGameWon(word, guesses)) {
        console.log("          GAME OVER");
        console.log("          YOU WON!");
        return;
    }
    if (isGameLost(word, guesses)) {
        console.log("          GAME OVER");
        console.log("           YOU LOST");
        return;
    }

    // volgende ronde! we roepen game nog een keer aan
    game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);


const words = [ "javascript","bloemkool", "fietsband","politicus","pannenset","contrabas","nachtmerrie","winterweer","cementmmixer"]

const whatIndex = Math.floor( Math.random() * (words.length - 1) );
const whatWord  = words[ whatIndex ];


game( whatWord, [] );
