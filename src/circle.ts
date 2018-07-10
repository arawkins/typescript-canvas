import { iShape } from './interfaces';

export class Circle implements iShape {
   public x: number = 0;
   public y: number = 0;
   public vx: number = 0;
   public vy: number = 0;

   public radius: number = 10;
   public lineWidth: number = 2;
   public color: string = "red";
   constructor(x: number, y: number, radius: number, color: string = "red", line_width: number = 2)
   {
      this.x = x;
      this.y = y;
      this.vx = Math.random() * 15;
      this.vy = Math.random() * 15;

      this.radius = radius;
      this.color = color;
      this.lineWidth = line_width;
   }

   public move = (): void => {
       this.x += this.vx;
       this.y += this.vy;
       if (this.x > 1280 || this.x < 0) {
           this.vx *= -1;
       }
       if (this.y > 720 || this.y < 0) {
           this.vy *= -1;
       }
   }

   public draw = (ctx:CanvasRenderingContext2D): void => {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
   }
}
