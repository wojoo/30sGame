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
const wordstxt = ['spanning', 'stroomsterkte ', 'vermogen', 'energiegebruik', 'Watt', 'Volt', 'Ampère', 'V', 'A', 'P ', 'U ', 'I ', 'E ', 't ', 'kWh', 'W ', 'KiloWattUur', 'geleider', 'isolator', 'elektriciteit', 'elektrische energie ', 'materiaal dat geleidt ', 'materiaal dat isoleert ', 'serieschakeling ', 'parallelschakeling', 'lamp', 'schakelaar', 'batterij', 'spanningsbron', 'bliksem', 'dynamo', 'kring ', 'open ', 'energiebron', 'zonnecel', 'kernenergie', 'windenergie', 'oplaadpaal', 'stopcontact', 'eenheid', 'natuurkunde', 'Youtube', 'Disney', 'Segbroek College', 'Tesla auto', 'scooter', '2M3', 'TikTok', 'Mickey Mouse', 'McDonalds ', 'Den Haag', 'Adidas', 'Nike', 'Whatsapp ', 'Nederland '];

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