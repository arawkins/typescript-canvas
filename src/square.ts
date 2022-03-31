import { Shape } from "./shape";

export class Square extends Shape {
    constructor(x: number = 0, y: number = 0, width:number = 10, height:number = 10, color: string = "red", line_width: number = 2, life: number = 1) {
        super(x, y, color, line_width, life);
        this.width = width;
        this.height = height;
    }

    public draw = (ctx: CanvasRenderingContext2D): void => {
        if (ctx != null) {
            ctx.save();
            ctx.globalAlpha = 1 * this.life/100;
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.restore();
            ctx.globalAlpha = 1;
        }
    }
}