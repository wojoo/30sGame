// // TO FIX
// import * as fs from 'fs'
// // get filesystem module
// function readtxtfile(filename) {
//    // const fs = require("fs");

//     // using the readFileSync() function
//     // and passing the path to the file
//     const buffer = fs.readFileSync(filename);

//     // use the toString() method to convert
//     // Buffer into String and split on lines 
//     const fileContent = buffer.toString();
//     const arr = fileContent.split(/\r?\n/);

//     return arr;
// } 

// const wordstxt = readtxtfile('words.txt')

// set up 
const cards = document.querySelectorAll('.cards');
cards.forEach(card => card.addEventListener('click', flipWord));

let CardIsClicked = false;
function clicked() {
    CardIsClicked = true;
}
cards.forEach(card => card.addEventListener('click', clicked));

// timer in view
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve,time));
}


// randomize the words 
//const wordstxt = ['een ', 'twee', 'drie', 'vier', 'vijf'];  // to debug
// TEMP
const wordstxt = ['rendement', '1ste wet Newton ', '2de wet Newton', 'versnelling', 'F_mpz', 'frequentie', 'golflengte', 'geluidssnelheid', 'knoop', 'buik ', 'frequentie ', 'resonantie ', 'snelheid', 's=v*t', 'F_res', 'Ontbinden ', 'Gravitatie', 'kinetische energie', 'druk', 'arbeid', 'veerenergie', 'harmonische trilling ', 'massa ', 'grondtoon', 'trillingstijd', 'faseverschil', 'uitwijking', 'amplitude', 'constante', 'zwaartekracht', 'weerstand', 'vermogen ', 'E ', 'oscillogram', 'zwaarte energie', 'straal', 'behoud van energie', 'krachtenbalans', 'potentiële energie', 'interferentie', 'natuurkunde', 'Youtube', 'Disney', 'Segbroek College', 'Windmolen', 'scooter', '5V', 'TikTok', 'Mickey Mouse', 'McDonalds ', 'Den Haag', 'Adidas', 'Nike', 'Whatsapp ', 'Nederland '];

function shuffle(wordarray) {
    const random = Math.floor(Math.random() * wordarray.length);
        return wordarray[random]
}

// flip card with new random word on click

function flipWord() {
    document.getElementById("words").classList.toggle('flip');

    randomword = shuffle(wordstxt)
    document.getElementById("word2").textContent = ">";
    document.getElementById("word1").textContent = randomword;
    CardIsClicked = false;

    if (CardIsClicked) {
        flipWord();
    }
}

// timer at 30 seconds and show end page when time's up 
var seconds = 30;
var count = setInterval(function() {
    if (seconds >= 0) {
        if (seconds%60 < 10) {
            var message = "0" + seconds%60;
        } else {
            var message = seconds%60;
        }
        document.getElementById("timer").textContent = (seconds-seconds%60)/60 + ": " + message;
    } else {
        clearInterval(count);
        window.location = "endpage.html";
    }
    seconds--;
}, 1000);