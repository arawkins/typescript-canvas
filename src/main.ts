import { Shape } from './shape';
import { Circle } from './circle';
import { Square } from './square';
import './style.css';

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
let width = window.innerWidth;
let height = window.innerHeight;
let deadCircles: Array < Circle > = [];
let deadSquares: Array < Square > = [];
var circles: Array < Circle > = [];
var squares: Array < Square > = [];
let maxCircles = 250;
let maxSquares = 250;
let spawnX = width/2;
let spawnY = height/2;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    if (circles.length < maxCircles) {
        spawnCircle(spawnX, spawnY);
    }
    
    circles.forEach((c, i) => {
        c.move();
        if (c.x <= -c.width || c.x >= width + c.width) {
            c.vx *= -1;
        }
        if (c.y <= -c.height || c.y > height + c.height) {
            c.vy *= -1;
        }
        c.life -= 1;
        if (c.life <= 0) {
            recycle(c);
            circles.splice(i,1);
        }
        c.draw(ctx);
    });


}



function recycle(c: Circle) {
    deadCircles.push(c);
}

function getCircle(): Circle {
    if (deadCircles.length > 0) {
        return deadCircles.pop();
    } else {
        return new Circle();
    }
}

function spawnCircle(x: number, y:number): void {
    let c: Circle = getCircle();
    let maxVelocity = 15;
    let maxRadius = 100;
    c.x = x;
    c.y = y;
    c.radius = Math.random() * maxRadius;
    c.color = "blue";
    c.vx = Math.random() * maxVelocity - Math.random() * maxVelocity;
    c.vy = Math.random() * maxVelocity - Math.random() * maxVelocity;
    c.life = 100;
    circles.push(c);
}

window.onload = () => {
    let container = document.createElement('div');
    container.id = "container";

    canvas = document.createElement('canvas');
    canvas.id = "game";
    canvas.width = width;
    canvas.height = height;
    canvas.classList.add('red_border');
    container.appendChild(canvas);
    document.body.appendChild(container);
    ctx = canvas.getContext("2d");

    gameLoop();

    canvas.onclick = (e) => {
        spawnCircle(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop );
    }

    canvas.onmousemove = (e) => {
        spawnX = e.clientX - canvas.offsetLeft;
        spawnY = e.clientY - canvas.offsetTop;
    }
}
