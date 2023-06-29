const stopwatch = document.getElementById('stopwatch')
const timer = document.getElementById('timer')
const _stopwatchBtn = document.getElementById('_stopwatch')
const _timerBtn = document.getElementById('_timer')


_stopwatchBtn.addEventListener('click', () => {
    stopwatch.classList.remove('hidden')
    timer.classList.add('hidden')
    console.log(stopwatch);
})
_timerBtn.addEventListener('click', () => {
    timer.classList.remove('hidden')
    stopwatch.classList.add('hidden')
})

window.onload = function () {
    var seconds = 0; 
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
    buttonStart.onclick = function() {  
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       buttonStart.classList.add('hidden')
       buttonStop.classList.remove('hidden')
    }
      buttonStop.onclick = function() {
         clearInterval(Interval);
         buttonStop.classList.add('hidden')
         buttonStart.classList.remove('hidden')
    }
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
     
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }     
      if (tens > 9){
        appendTens.innerHTML = tens;
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
}

// timer

const timer_minutes = document.getElementById('timer-minutes')
const timer_seconds = document.getElementById('timer-seconds')

const timer_start = document.getElementById('timer-button-start')
const timer_stop = document.getElementById('timer-button-stop')
const timer_reset = document.getElementById('timer-button-reset')

let timerInterval

timer_start.addEventListener('click', () => {
    let minutes = parseInt(timer_minutes.value)
    let seconds = parseInt(timer_seconds.value)

    if (minutes < 0 || seconds < 0) {
        alert('Please enter a valid number')
        return
    }
    if (minutes === 0 && seconds === 0) {
        alert('Please enter a valid number')
        return
    }
    if (isNaN(minutes) || isNaN(seconds)) {
        alert('Please enter a valid number')
        return
    }
    if (seconds > 59) {
        alert('Please enter a valid number')
        return
    }
    timerInterval = setInterval(() => {
        if (seconds === 0) {
            minutes--
            seconds = 59
        } else {
            seconds--
        }

        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval)
        }

        timer_minutes.value = minutes
        timer_seconds.value = seconds
    }
    , 1000)

    timer_stop.classList.remove('hidden')
    timer_start.classList.add('hidden')
})

timer_stop.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer_stop.classList.add('hidden')
    timer_start.classList.remove('hidden')
}
)

timer_reset.addEventListener('click', () => {
    clearInterval(timerInterval)
    timer_minutes.value = 0
    timer_seconds.value = 0
}
)

