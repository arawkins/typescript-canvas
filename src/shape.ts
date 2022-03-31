export class Shape {
    public x: number;
    public y: number;
    public vx: number;
    public vy: number;
    public width: number;
    public height: number;
    public lineWidth: number;
    public color: string;
    public life: number;

    constructor(x: number = 0, y: number = 0, color: string = "red", line_width: number = 2, life: number = 1) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.width = 0;
        this.height = 0;
        this.life = life;
        this.color = color;
        this.lineWidth = line_width;
    }

    public move = (): void => {
        this.x += this.vx;
        this.y += this.vy;
    }

    public draw = (ctx: CanvasRenderingContext2D): void => {
        // Implement in subclass
    }

}