/**
* Created with html5-bubble.
* User: jollen
* Date: 2014-10-05
* Time: 02:32 AM
* To change this template use Tools | Templates.
*/
function start() {
    var canvas = document.getElementById("draw");

    var ctx = canvas.getContext("2d");

    var background = Sizzle('#game')[0],
        rect = background.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.width;

    maxWidth = rect.width;
    maxHeight = rect.height;
    maxR = (rect.height > rect.width) ? rect.width / 2 : rect.height / 2;

    ballX = Math.floor(Math.random() * maxWidth);
    ballY = Math.floor(Math.random() * maxHeight);
    ballR = Math.floor(Math.random() * maxR) + 30;

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
    ctx.fill();

    document.getElementById("cover")
            .addEventListener("click", touchEvent, false);

    console.log('Start Game');
}


setInterval(function () { start() }, 1000);