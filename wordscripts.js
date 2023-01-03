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

// // get filesystem module
// function readtxtfile(filename) {
//     const fs = require("fs");

//     // using the readFileSync() function
//     // and passing the path to the file
//     const buffer = fs.readFileSync(filename);

//     // use the toString() method to convert
//     // Buffer into String and split on lines 
//     const fileContent = buffer.toString();
//     const arr = fileContent.split(/\r?\n/)

//     console.log(fileContent);
//     console.log(arr);

//     return arr;
// } 

// const words = readtxtfile('words.txt')


// randomize the words 
//const words = ['een ', 'twee', 'drie', 'vier', 'vijf'];  // to debug

const words = ['spanning', 'stroomsterkte ', 'vermogen', 'energiegebruik', 'Watt', 'Volt', 'Ampère', 'V', 'A', 'P ', 'U ', 'I ', 'E ', 't ', 'kWh', 'W ', 'KiloWattUur', 'geleider', 'isolator', 'elektriciteit', 'elektrische energie ', 'materiaal dat geleidt ', 'materiaal dat isoleert ', 'serieschakeling ', 'parallelschakeling', 'lamp', 'schakelaar', 'batterij', 'spanningsbron', 'bliksem', 'dynamo', 'kring ', 'open ', 'energiebron', 'zonnecel', 'kernenergie', 'windenergie', 'oplaadpaal', 'stopcontact', 'eenheid', 'natuurkunde', 'Youtube', 'Disney', 'Segbroek College', 'Tesla auto', 'scooter', '2M3', 'TikTok', 'Mickey Mouse', 'McDonalds ', 'Den Haag', 'Adidas', 'Nike', 'Whatsapp ', 'Nederland '];

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
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 4) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 5) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 6) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 7) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 8) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 9) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 10) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 11) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 12) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 13) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 14) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 15) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 16) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 17) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 18) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 19) {
        document.getElementById("word2").textContent = " ";
        document.getElementById("word1").textContent = shuffle(words);
        CardIsClicked = false;
    }
    if (word_num == 20) {
        document.getElementById("word1").textContent = " ";
        document.getElementById("word2").textContent = shuffle(words);
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