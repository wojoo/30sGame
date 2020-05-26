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
    //if (CardIsClicked){
    if (word_num == 1) {
        document.getElementById("word1").textContent = "panda";
        CardIsClicked = false;
    }
    if (word_num == 2) {
        document.getElementById("word2").textContent = "penguin";
        CardIsClicked = false;
    }
    if (word_num == 3) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "pikachu";
        });
        CardIsClicked = false;
    }
    if (word_num == 4) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "lion";
        });
        CardIsClicked = false;
    }
    if (word_num == 5) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "giraffe";
        });
        CardIsClicked = false;
    }
    if (word_num == 6) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "pokemon";
        });
        CardIsClicked = false;
    }
    if (word_num == 7) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "octopus";
        });
        CardIsClicked = false;
    }
    if (word_num == 8) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "grasshopper";
        });
        CardIsClicked = false;
    }
    if (word_num == 9) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "spider";
        });
        CardIsClicked = false;
    }
    if (word_num == 10) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "cat";
        });
        CardIsClicked = false;
    }
    if (word_num == 11) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "flamingo";
        });
        CardIsClicked = false;
    }
    if (word_num == 12) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "emu";
        });
        CardIsClicked = false;
    }
    if (word_num == 13) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "koala";
        });
        CardIsClicked = false;
    }
    if (word_num == 14) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "squirral";
        });
        CardIsClicked = false;
    }
    if (word_num == 15) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "dinosaur";
        });
        CardIsClicked = false;
    }
    if (word_num == 16) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "pigeon";
        });
        CardIsClicked = false;
    }
    if (word_num == 17) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "rabbit";
        });
        CardIsClicked = false;
    }
    if (word_num == 18) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "fish";
        });
        CardIsClicked = false;
    }
    if (word_num == 19) {
        sleep(100).then(() => {
            document.getElementById("word1").textContent = "chicken";
        });
        CardIsClicked = false;
    }
    if (word_num == 20) {
        sleep(100).then(() => {
            document.getElementById("word2").textContent = "shark";
        });
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