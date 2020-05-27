var word_num = 1;
function flipWord() {
    clearInterval(count);
    document.getElementById("words").classList.toggle('flip');
    var seconds = 30;
    var count = setInterval(function() {
        if (seconds >= 0) {
            document.getElementById("timer").textContent = seconds;
        } else {
            clearInterval(count);
            if (word_num == 1) {
                document.getElementById("word1").textContent = "the Olympic Game";
            }
            if (word_num == 2) {
                document.getElementById("word2").textContent = "global warming";
            }
            if (word_num == 3) {
                document.getElementById("word1").textContent = "gratitude";
            }
            if (word_num == 4) {
                document.getElementById("word2").textContent = "oil";
            }
            if (word_num == 5) {
                document.getElementById("word1").textContent = "elevator";
            }
            if (word_num == 6) {
                document.getElementById("word2").textContent = "shoe store";
            }
            if (word_num == 7) {
                document.getElementById("word1").textContent = "advertise";
            }
            if (word_num == 8) {
                document.getElementById("word2").textContent = "cruise";
            }
            if (word_num == 9) {
                document.getElementById("word1").textContent = "souvenir";
            }
            if (word_num == 10) {
                document.getElementById("word2").textContent = "movie";
            }
            if (word_num == 11) {
                window.location = "endpage.html"
            }
            word_num++;
            flipWord();
        }
        seconds--;
    }, 1000);
}

// first time flip (showing word 1)
var seconds = 30;
var count = setInterval(function() {
    if (seconds >= 0) {
        document.getElementById("timer").textContent = seconds;
    } else {
        clearInterval(count);
        flipWord();
    }
    seconds--;
}, 1000);