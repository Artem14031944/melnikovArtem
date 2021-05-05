"use strict"

// Звук при касание поля или игрока
let clickAudio = new Audio;
    if ( clickAudio.canPlayType("audio/mpeg") == "probably" )
        clickAudio.src = "http://fe.it-academy.by/Examples/Sounds/button-16.mp3";
    else
        clickAudio.src = "http://fe.it-academy.by/Examples/Sounds/button-16.ogg";


// Звук гол!!!
let golAudio = new Audio;
    golAudio.src = '../audio/dive-warning-horn_zkd2ya4_.mp3';


let state = {
    paddleHeight: 150,
    paddleWidth: 30,
    ballRadius: 25,
    halfPaddleHeight: 75,
    speddOfPaddle1: 0,
    speddOfPaddle2: 0,
    positionOfPaddle1: 220,
    positionOfPaddle2: 220,
    topPositionOfBall: 300,
    leftPositionOfBall: 590,
    topSpeedOfBall: 10,
    leftSpeedOfBall: 0,
    score1: 0,
    score2: 0,
}


//Старт игры

function startBall() {
    state.topPositionOfBall = 300;
    state.leftPositionOfBall = 590;

    if(Math.random() < 0.5) {
        var side = 1; 
    } else {
        var side = -1;
    }
    state.leftSpeedOfBall = side * (Math.random() * 6 + 5); 
    state.topSpeedOfBall = Math.random() * 6 + 5;
}


let startGame = document.querySelector('.btnStart').addEventListener('click', startBall);


//Управление  Игроков

document.addEventListener('keydown', (e)=> {

// 1 Игрок

    //W
    if(e.keyCode == 87 || e.which == 87) {
        state.speddOfPaddle1 = -10;
    }

    //S
    if(e.keyCode == 83 || e.which == 83) {
        state.speddOfPaddle1 = 10;
    }

// 2 Игрок

    //Up
    if(e.keyCode == 38 || e.which == 38) {
        state.speddOfPaddle2 = -10;
    }

    //Down
    if(e.keyCode == 40 || e.which == 40) {
        state.speddOfPaddle2 = 10;
    }
})


document.addEventListener('keyup', (e)=> {

// 1 Игрок

    // W
    if(e.keyCode == 87 || e.which == 87) {
        state.speddOfPaddle1 = 0;
    }

    // S
    if(e.keyCode == 83 || e.which == 83) {
        state.speddOfPaddle1 = 0;
    }

// 2 Игрок

    // Up
    if(e.keyCode == 38 || e.which == 38) {
        state.speddOfPaddle2 = 0;
    }

    // Down
    if(e.keyCode == 40 || e.which == 40) {
        state.speddOfPaddle2 = 0;
    }
})





window.setInterval(function show() {

    state.positionOfPaddle1 += state.speddOfPaddle1;
    state.positionOfPaddle2 += state.speddOfPaddle2;

    state.topPositionOfBall += state.topSpeedOfBall;
    state.leftPositionOfBall += state.leftSpeedOfBall


    // Не сломать вверх

    if(state.positionOfPaddle1 <= 1) {
        state.positionOfPaddle1 = 1;
        // clickSound();
    }

    if(state.positionOfPaddle2 <= 1) {
        state.positionOfPaddle2 = 1;
        // clickSound();
    }

  // Не сломать низ

    if(state.positionOfPaddle1 >= window.innerHeight - state.paddleHeight) {
        state.positionOfPaddle1 = window.innerHeight - state.paddleHeight;
        clickSound();
    }

    if(state.positionOfPaddle2 >= window.innerHeight - state.paddleHeight) {
        state.positionOfPaddle2 = window.innerHeight - state.paddleHeight;
        clickSound();
    }

    if(state.topPositionOfBall <= 10 || state.topPositionOfBall >= window.innerHeight - state.ballRadius) {
        state.topSpeedOfBall = -state.topSpeedOfBall;
        clickSound();
    }

    if(state.leftPositionOfBall <= state.paddleWidth) {
        if(state.topPositionOfBall > state.positionOfPaddle1 && state.topPositionOfBall < state.positionOfPaddle1 + state.paddleHeight) {
            state.leftSpeedOfBall = -state.leftSpeedOfBall
            clickSound();
        } else {
            state.score2++
            startBall();
            golSound();
        }
    }

    if(state.leftPositionOfBall >= window.innerWidth - state.ballRadius - state.paddleWidth) {
        if(state.topPositionOfBall > state.positionOfPaddle2 && state.topPositionOfBall < state.positionOfPaddle2 + state.paddleHeight) {
            state.leftSpeedOfBall = -state.leftSpeedOfBall;
            clickSound();
        } else {
            state.score1++
            startBall();
            golSound();
        }
    }
    
    // Игроки

    document.querySelector('.player1').style.top = state.positionOfPaddle1 + 'px';
    document.querySelector('.player2').style.top = state.positionOfPaddle2 + 'px';


    // Мяч

    document.querySelector('.ball').style.top = state.topPositionOfBall + 'px';
    document.querySelector('.ball').style.left = state.leftPositionOfBall + 'px';


    // Очки

    document.querySelector('.score1').innerHTML = state.score1.toString()
    document.querySelector('.score2').innerHTML = state.score2.toString()

}, 1000/60)

function clickSound() {
    clickAudio.currentTime = 0; 
    clickAudio.play();
}
function golSound() {
    golAudio.currentTime = 0; 
    golAudio.play();
}