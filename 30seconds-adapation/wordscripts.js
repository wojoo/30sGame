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

// // read words from file
// const {readFileSync, promises: fsPromises} = require('fs');

// function syncReadFile(filename) {
//   const contents = readFileSync(filename, 'utf-8');

//   const arr = contents.split(/\r?\n/);

//  //  console.log(arr); // to debug

//   return arr;
// }
// //const words = syncReadFile('./words.txt');


// randomize the words 
const words = ["January", "February", "March", "April", "May", "June", "July"]; // to debug

function shuffle(words) {
    const random = Math.floor(Math.random() * words.length);
        return words[random]
}

// flip card with new random word on click
var word_num = 0;
function flipWord() {
    document.getElementById("words").classList.toggle('flip');

    if (word_num == 1) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 2) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 3) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "haha";
        CardIsClicked = false;
    }
    if (word_num == 4) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "haha";
        CardIsClicked = false;
    }
    if (word_num == 5) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "stroomsterkte";
        CardIsClicked = false;
    }
    if (word_num == 6) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "vermogen";
        CardIsClicked = false;
    }
    if (word_num == 7) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "elektriciteit";
        CardIsClicked = false;
    }
    if (word_num == 8) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "geleider";
        CardIsClicked = false;
    }
    if (word_num == 9) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "isolator";
        CardIsClicked = false;
    }
    if (word_num == 10) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "serieschakeling";
        CardIsClicked = false;
    }
    if (word_num == 11) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "parallelschakeling";
        CardIsClicked = false;
    }
    if (word_num == 12) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "lamp";
        CardIsClicked = false;
    }
    if (word_num == 13) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "schakelaar";
        CardIsClicked = false;
    }
    if (word_num == 14) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "batterij";
        CardIsClicked = false;
    }
    if (word_num == 15) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "spanningsbron";
        CardIsClicked = false;
    }
    if (word_num == 16) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "energiegebruik";
        CardIsClicked = false;
    }
    if (word_num == 17) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "2M3";
        CardIsClicked = false;
    }
    if (word_num == 18) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "TikTok";
        CardIsClicked = false;
    }
    if (word_num == 19) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = "Mickey Mouse";
        CardIsClicked = false;
    }
    if (word_num == 20) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = "bliksem";
        CardIsClicked = false;
    }
    if (word_num == 21) {
        window.location = "endpage.html"
    }
    word_num++;
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