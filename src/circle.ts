export class Circle {
    public x: number = 0;
    public y: number = 0;
    public vx: number = 0;
    public vy: number = 0;
    public width: number = 0;
    public height: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";
    public life: number = 1;

    constructor(x: number = 0, y: number = 0, radius: number = 10, color: string = "red", line_width: number = 2) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius; 
        this.width = this.height = radius;
        this.color = color;
        this.lineWidth = line_width;
    }

    public move = (): void => {
        this.x += this.vx;
        this.y += this.vy;
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