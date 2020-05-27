const cards = document.querySelectorAll('.cards');
cards.forEach(card => card.addEventListener('click', flipWord));

let CardIsClicked = false;
function clicked() {
    CardIsClicked = true;
}
cards.forEach(card => card.addEventListener('click', clicked));

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve,time));
}

var word_num = 0;
function flipWord() {
    document.getElementById("words").classList.toggle('flip');
    if (word_num == 1) {
        document.getElementById("word1").textContent = "panda";
        CardIsClicked = false;
    }
    if (word_num == 2) {
        document.getElementById("word2").textContent = "penguin";
        CardIsClicked = false;
    }
    if (word_num == 3) {
        document.getElementById("word1").textContent = "pikachu";
        CardIsClicked = false;
    }
    if (word_num == 4) {
        document.getElementById("word2").textContent = "camel";
        CardIsClicked = false;
    }
    if (word_num == 5) {
        document.getElementById("word1").textContent = "peppa pig";
        CardIsClicked = false;
    }
    if (word_num == 6) {
        document.getElementById("word2").textContent = "dolphin";
        CardIsClicked = false;
    }
    if (word_num == 7) {
        document.getElementById("word1").textContent = "octopus";
        CardIsClicked = false;
    }
    if (word_num == 8) {
        document.getElementById("word2").textContent = "Mickey Mouse";
        CardIsClicked = false;
    }
    if (word_num == 9) {
        document.getElementById("word1").textContent = "spider";
        CardIsClicked = false;
    }
    if (word_num == 10) {
        document.getElementById("word2").textContent = "the angry bird";
        CardIsClicked = false;
    }
    if (word_num == 11) {
        document.getElementById("word1").textContent = "flamingo";
        CardIsClicked = false;
    }
    if (word_num == 12) {
        document.getElementById("word2").textContent = "emu";
        CardIsClicked = false;
    }
    if (word_num == 13) {
        document.getElementById("word1").textContent = "koala";
        CardIsClicked = false;
    }
    if (word_num == 14) {
        document.getElementById("word2").textContent = "Animal crossing";
        CardIsClicked = false;
    }
    if (word_num == 15) {
        document.getElementById("word1").textContent = "dinosaur";
        CardIsClicked = false;
    }
    if (word_num == 16) {
        document.getElementById("word2").textContent = "Tom and Jerry";
        CardIsClicked = false;
    }
    if (word_num == 17) {
        document.getElementById("word1").textContent = "rabbit";
        CardIsClicked = false;
    }
    if (word_num == 18) {
        document.getElementById("word2").textContent = "We bare bears";
        CardIsClicked = false;
    }
    if (word_num == 19) {
        document.getElementById("word1").textContent = "Icebear";
        CardIsClicked = false;
    }
    if (word_num == 20) {
        document.getElementById("word2").textContent = "shark";
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

var timeup = setTimeout(function() {
    window.location = "endpage.html";
}, 300000)

var seconds = 300;
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
    }
    seconds--;
}, 1000);