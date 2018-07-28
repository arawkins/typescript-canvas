import { Circle } from './circle';
import { iShape } from './interfaces';
import './style.css';

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var shapes:Array<iShape> = [];

function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    shapes.forEach(c => {
        c.move();
        c.draw(ctx);
    });

}

window.onload = () => {
    let container = document.createElement('div');
    container.id = "container";

    canvas = document.createElement('canvas');
    canvas.id     = "game";
    canvas.width  = 1280;
    canvas.height = 720;
    canvas.classList.add('red_border');
    container.appendChild(canvas);
    document.body.appendChild(container);
    ctx = canvas.getContext("2d");
    
    gameLoop();

    canvas.onclick = (e) => {
        var c:Circle = new Circle(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, Math.random()*25, "blue");
        shapes.push(c);
    }
}
