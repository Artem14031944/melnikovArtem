"use strict"

function clockCan() {
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();


    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();


    ctx.clearRect(0,0,150,150);
    ctx.translate(75, 75);
    ctx.scale(0.5,0.5);
    ctx.rotate(-Math.PI/2);


    //часы

    ctx.strokeStyle = "gray";
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.save();
    ctx.beginPath();

    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
    }

    ctx.arc(0, 0, 120, 0, getRadians(360));
    ctx.stroke();

    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }

    ctx.stroke();
    ctx.restore();
    ctx.save();


    //стрелка показывающае часы

        ctx.rotate((Math.PI/6)*hr +
            (Math.PI/360)*min +
            (Math.PI/21600)*sec);
        ctx.strokeStyle = "green"; 
        ctx.fillStyle = "green"
        ctx.lineWidth = 14;

        ctx.beginPath();
        ctx.moveTo(-20,0);

        ctx.lineTo(80,0);
        ctx.stroke();
        ctx.restore();

        ctx.save();


          //стрелка показывающае минуты

        ctx.rotate((Math.PI/30*min) +
            (Math.PI/1800)*sec);
        ctx.strokeStyle = "blue";   
        ctx.fillStyle = "blue";   
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(-28,0);
        ctx.lineTo(112,0);
        ctx.stroke();
        ctx.restore();

        ctx.save();


          //стрелка показывающае секунды

        ctx.rotate(sec * Math.PI/30);
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
        ctx.lineWidth = 6;

        ctx.beginPath();
        ctx.moveTo(-30,0);
        ctx.lineTo(83,0);
        ctx.stroke();
        ctx.restore();

        ctx.restore();

}
    {
    setInterval(clockCan, 1000)
    }