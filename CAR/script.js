"use strict"

const car =  document.querySelector('.img_car');
const carImg =  document.querySelector('.img_car_1');
const track = document.querySelector('.track');


let tW = track.offsetWidth;
let tH = track.offsetHeight;
let cW = car.offsetWidth;
let cH = car.offsetHeight;
let x = 0;
let y = 0;
let start = 32;
let up = 38;
let down = 40;
let left = 37;
let right = 39;
let play = false;
let timer = null;
let speed = 1000 / 60;


document.addEventListener('keyup', function(e) {
    let btn = e.keyCode;
    if (btn === start) {
        if (timer) {
            x = 0;
            y = 0;
            car.style.left = x;
            car.style.top = y;
            carImg.style.color = '';
            clearInterval(timer);
        }
        timer = setInterval(() => moveCar(btn), speed);
        play = true;
    }
    if (btn === down && play) {
        clearInterval(timer);
        timer = setInterval(() => moveCar(btn), speed);
    } else if (btn === right && play) {
        clearInterval(timer);
        timer = setInterval(() => moveCar(btn), speed);
    } else if (btn === up && play) {
        clearInterval(timer);
        timer = setInterval(() => moveCar(btn), speed);
    } else if (btn === left && play) {
        clearInterval(timer);
        timer = setInterval(() => moveCar(btn), speed);
    }
});


function moveCar(id) {
    switch (id) {
        case start:
            car.style.left = `${x++}px`;
            if (x >= tW - cW) {
                play = false;
                clearInterval(timer);
            }
            break;
        case up:
            car.style.top = `${y--}px`;
            if (y <= 0) {
                play = false;
                clearInterval(timer);
            }
            break;
        case down:
            car.style.top = `${y++}px`;
            if (y >= tH - cH) {
                play = false;
                clearInterval(timer);
            }
            break;
        case right:
            car.style.left = `${x++}px`;
            if (x >= tW - cW) {
                play = false;
                clearInterval(timer);
            }
            break;
        case left:
            car.style.left = `${x--}px`;
            if (x <= 0) {
                play = false;
                clearTimeout(timer);
            }
            break;
    } 
    if (!play) {
        carImg.style.color = "red";
    }
}


