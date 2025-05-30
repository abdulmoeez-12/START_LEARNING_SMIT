var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")

var min = 0 
var sec = 0 
var msec = 0 



function timer() {
    msec++
    // console.log(msec);
    msecHeading.innerHTML = msec

    if (msec === 100){
        msec = 0
        sec++
        secHeading.innerHTML = sec
        
    }

    if(sec > 59){
        sec = 0
        min++
        minHeading.innerHTML = min
    }
    
}

var interval 

function startwatch(){
    interval = setInterval(timer , 10)
    startBtn.disabled = true
}

function stopwatch(){
  clearInterval(interval)
  startBtn.disabled = false
}


function resetTimer(){
    clearInterval(interval)
    min = 0 
    sec = 0 
    msec = 0
    msecHeading.innerHTML = 0
    secHeading.innerHTML = 0
    minHeading.innerHTML = 0

    
    startBtn.disabled = false
    
}