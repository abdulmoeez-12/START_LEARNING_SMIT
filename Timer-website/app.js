var Hours = document.getElementById("Hours");
var Minutes = document.getElementById("Minutes");
var Seconds = document.getElementById("Seconds");

var hrs = 0;
var min = 0;
var sec = 0;
var interval = null;
var totalTargetSeconds = 0;

function timer() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
    if (min >= 60) {
        min = 0;
        hrs++;
    }

    Hours.value = hrs;
    Minutes.value = min;
    Seconds.value = sec;

    var currentTotal = (hrs * 3600) + (min * 60) + sec;

    if (currentTotal >= totalTargetSeconds) {
        stopTimer();
        alert("Time completed!");
    }
}

function startTimer() {
   
    var inputHrs = parseInt(Hours.value, 10) || 0;
    var inputMin = parseInt(Minutes.value, 10) || 0;
    var inputSec = parseInt(Seconds.value, 10) || 0;

    totalTargetSeconds = (inputHrs * 3600) + (inputMin * 60) + inputSec;

    if (totalTargetSeconds <= 0) {
        alert("Please enter time greater than 0!");
        return;
    }

 
    hrs = 0;
    min = 0;
    sec = 0;
    Hours.value = 0;
    Minutes.value = 0;
    Seconds.value = 0;

    if (!interval) {
        interval = setInterval(timer, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    stopTimer();
    hrs = 0;
    min = 0;
    sec = 0;
    Hours.value = 0;
    Minutes.value = 0;
    Seconds.value = 0;
}