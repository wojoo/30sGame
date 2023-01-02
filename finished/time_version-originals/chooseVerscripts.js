const button = document.querySelectorAll('.but');

function time() {
    var element = document.getElementById("intro-words");
    element.classList.toggle("hide");
    var element = document.getElementById("intro-time");
    element.classList.toggle("hide");
    button.forEach(but => but.style.visibility = "hidden");

    var element1 = document.getElementById("go");
        element1.classList.toggle("show");

    var seconds = document.getElementById("go").textContent;
    var count = setInterval(function() {
        seconds--;
        if (seconds > 0) {
            document.getElementById("go").textContent = seconds;
        } else if (seconds == 0) {
            document.getElementById("go").textContent = "Go!";
        } else {
            clearInterval(count);
            document.getElementById("go").textContent = "";
            window.location = "card_time.html";
        }
    }, 1000);
}

function word() {
    var element = document.getElementById("intro-words");
    element.classList.toggle("hide");
    var element = document.getElementById("intro-time");
    element.classList.toggle("hide");
    button.forEach(but => but.style.visibility = "hidden");

    var element1 = document.getElementById("go");
        element1.classList.toggle("show");

    var seconds = document.getElementById("go").textContent;
    var count = setInterval(function() {
        seconds--;
        if (seconds > 0) {
            document.getElementById("go").textContent = seconds;
        } else if (seconds == 0) {
            document.getElementById("go").textContent = "Go!";
        } else {
            clearInterval(count);
            document.getElementById("go").textContent = "";
            window.location = "card_word.html";
        }
    }, 1000);
}
