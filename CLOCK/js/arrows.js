"use strict"

let timerArrows;

const blockClock = document.querySelector('.block_clock');

let point = document.createElement('div');
point.classList.add('point');
blockClock.append(point);

let arrowOne = document.createElement('div');
arrowOne.classList.add('arrowOne');
blockClock.append(arrowOne);

let arrowTwo = document.createElement('div');
arrowTwo.classList.add('arrowTwo');
blockClock.append(arrowTwo);

let arrowThree = document.createElement('div');
arrowThree.classList.add('arrowThree');
blockClock.append(arrowThree);




function posArrows() {

    let deg = 6;
    let data = new Date();
    let hour = data.getHours() * 30;
    let min = data.getMinutes() * deg;
    let sec = data.getSeconds() * deg;


    arrowOne.style.transform = `rotateZ(${hour + min/12}deg)`;
    arrowTwo.style.transform = `rotateZ(${min}deg)`;
    arrowThree.style.transform = `rotateZ(${sec}deg)`;
}



function clockStarts() { 
    timerArrows = setInterval(posArrows, 1000);
    posArrows(); 
}

function clockStops() {
    clearInterval(timerArrows);
    timerArrows = null;
}

clockStarts();