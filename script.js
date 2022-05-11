let d = new Date();
let data = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
if (data < 10) data = `0` + data;
if (month < 10) month = `0` + month;
if (year < 10) year = `0` + year;

document.querySelector('.data').innerHTML = `${data}.${month}.${year}`;



setInterval(() => {
    let d = new Date();
    let hh = d.getHours();
    let min = d.getMinutes();
    let ss = d.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (min < 10) min = '0' + min;
    if (ss < 10) ss = '0' + ss;
    document.querySelector('.clock').innerHTML = `${hh} : ${min} : ${ss}`;
})


const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const loopButton = document.querySelector('.loop');

startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval);
})
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    hour = 00;
    minute = 00;
    second = 00;
    millisecnd = 00;
    hourElement.textContent = '00';
    minuteElement.textContent = '00';
    secondElement.textContent = '00';
    millisecondElement.textContent = '00';
})
loopButton.addEventListener('click', () => {
    clearInterval(interval);
    const results = document.querySelector('.results');
    const block = document.createElement('div');
    block.textContent = `Result: ${hour} : ${minute} : ${second} : ${millisecnd}`;
    results.append(block);
})
let hour = 00,
    minute = 00,
    second = 00,
    millisecnd = 00,
    interval;

function startTimer() {
    millisecnd++;
    if (millisecnd <= 9) {
        millisecondElement.textContent = '0' + millisecnd;
    }
    if (millisecnd > 9) {
        millisecondElement.textContent = millisecnd;
    }
    if (millisecnd > 99) {
        second++;
        if (second <= 9) {
            secondElement.textContent = '0' + second;
        }
        if (second > 9) {
            secondElement.textContent = second;
        }
        if (second >= 60) {
            minute++;
            millisecnd = 0;
            second = 0;
            secondElement.textContent = '0' + second;
            if (minute <= 9) {
                minuteElement.textContent = '0' + minute;
            }
            if (minute > 9) {
                minuteElement.textContent = minute;
            }
            if (minute >= 60) {
                hour++;
                minute = 0;
                minuteElement.textContent = '0' + minute;
                if (hour <= 9) {
                    hourElement.textContent = '0' + hour;
                }
                if (hour > 9) {
                    hourElement.textContent = hour;
                }
                if (hour <= 24) {

                }
            }
        }
        millisecnd = 0;
        millisecondElement.textContent = '0' + millisecnd;
    }
}

const addTimer = document.querySelector('.addTimer');
const removeTimer = document.querySelector('.removeTimer');

let value = 25;

addTimer.addEventListener('click', () => {
    value++;
    if (value <= 60) document.querySelector('.time-timer').textContent = value;
    if (value < 10) document.querySelector('.time-timer').textContent = '0' + value;
})
removeTimer.addEventListener('click', () => {
    value--;
    if (value > 0) document.querySelector('.time-timer').textContent = value;
    if (value < 10) document.querySelector('.time-timer').textContent = '0' + value;
})



const startButtonTimer = document.querySelector('.button-start');
const stopButtonTimer = document.querySelector('.button-stop');
const resetButtonTimer = document.querySelector('.button-reset');
let startTimerSecond = 60,
    intervalTimer;

function startTimer1() {
    if (value > 0) {
        document.querySelector('.minute-timer').textContent = value - 1;
        document.querySelector('.second-timer').textContent = startTimerSecond;
        startTimerSecond--;
        document.querySelector('.second-timer').textContent = startTimerSecond;
        if (startTimerSecond <= 9) document.querySelector('.second-timer').textContent = '0' + startTimerSecond;
        if (startTimerSecond <= 0) {
            startTimerSecond = 59;
            document.querySelector('.second-timer').textContent = startTimerSecond;
            value--;
            if (value > 0) {
                document.querySelector('.minute-timer').textContent = value;
            }
        }
    } else {
        document.querySelector('.minute-timer').textContent = '00';
        document.querySelector('.second-timer').textContent = '00';
    }
}

startButtonTimer.addEventListener('click', () => {
    clearInterval(intervalTimer);
    intervalTimer = setInterval(startTimer1, 1000);
})
stopButtonTimer.addEventListener('click', () => {
    clearInterval(intervalTimer);
})
resetButtonTimer.addEventListener('click', () => {
    clearInterval(intervalTimer);
    document.querySelector('.minute-timer').textContent = '00';
    document.querySelector('.second-timer').textContent = '00';
    startTimerSecond = 0;
})
