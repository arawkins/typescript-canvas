import { Circle } from './circle';

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var circle1: Circle = new Circle(200, 300, 50);
var circle2: Circle = new Circle(400, 550, 150, "blue", 5);
var circle3:Circle = new Circle(50,50,10,"red");
var circles:Array<Circle> = [];

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    
    circles.forEach(c => {
        c.move();
        c.draw(ctx);
    });
    
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('game');
    ctx = canvas.getContext("2d");
    for(var i=0; i<120; i++) {
        var c:Circle = new Circle(Math.random()*1280, Math.random()*720, Math.random()*150, "blue", 3);
        circles.push(c);
    }
    gameLoop();
}
