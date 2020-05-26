
var word_num = 1;
function flipWord() {
    clearInterval(count);
    document.getElementById("words").classList.toggle('flip');
    var seconds = 30;
    var count = setInterval(function() {
        if (seconds >= 0) {
            document.getElementById("timer").textContent = seconds;
        } else if (seconds < 0 || CardIsClicked) {
            clearInterval(count);
            seconds=0;
            //document.getElementById("timer").textContent = seconds;
            if (word_num == 1) {
                document.getElementById("word1").textContent = "panda";
            }
            if (word_num == 2) {
                document.getElementById("word2").textContent = "penguin";
            }
            if (word_num == 3) {
                document.getElementById("word1").textContent = "pikachu";
            }
            if (word_num == 4) {
                document.getElementById("word2").textContent = "lion";
            }
            if (word_num == 5) {
                document.getElementById("word1").textContent = "giraffe";
            }
            if (word_num == 6) {
                document.getElementById("word2").textContent = "pokemon";
            }
            if (word_num == 7) {
                document.getElementById("word1").textContent = "octopus";
            }
            if (word_num == 8) {
                document.getElementById("word2").textContent = "grasshopper";
            }
            if (word_num == 9) {
                document.getElementById("word1").textContent = "spider";
            }
            if (word_num == 10) {
                document.getElementById("word2").textContent = "cat";
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
        //document.getElementById("timer").textContent = "";
        flipWord();
    }
    seconds--;
}, 1000);