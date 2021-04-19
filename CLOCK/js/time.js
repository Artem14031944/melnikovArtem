"use strict"

let timerId;

function update() {
    let clock = document.querySelector('.time');
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    let itemClock =  `${hours}:${minutes}:${seconds}`;
    clock.innerHTML = itemClock
}



function clockStart() { 
    timerId = setInterval(update, 1000);
    update(); 
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}

clockStart();