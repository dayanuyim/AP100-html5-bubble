/**
* Created with html5-bubble.
* User: jollen
* Date: 2014-10-05
* Time: 02:32 AM
* To change this template use Tools | Templates.
*/
var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
	
canvas.width = 480;
canvas.height = 640;

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(100, 100, 100, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
ctx.fill(); 