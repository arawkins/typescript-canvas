import { Shape } from "./shape";

export class Circle extends Shape {
    public radius: number = 10;

    constructor(x: number = 0, y: number = 0, radius: number = 10, color: string = "red", line_width: number = 2, life:number = 1) {
        super(x, y, color, line_width, life)
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius; 
        this.width = this.height = radius;
        this.color = color;
        this.lineWidth = line_width;
    }


    public draw = (ctx: CanvasRenderingContext2D): void => {
        if (ctx != null) {
            ctx.save();
            ctx.globalAlpha = 1 * this.life/100;
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
            ctx.globalAlpha = 1;
        }
    }
}