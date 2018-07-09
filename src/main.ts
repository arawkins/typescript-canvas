import { Circle } from './circle';

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var circle1: Circle = new Circle(200, 300, 50);
var circle2: Circle = new Circle(400, 550, 150, "blue", 5);
var circle3:Circle = new Circle(50,50,10,"red");

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();
    circle1.x += 2;

    circle1.draw(ctx);
    circle2.draw(ctx);
    circle3.draw(ctx);
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('game');
    ctx = canvas.getContext("2d");

    gameLoop();
}
