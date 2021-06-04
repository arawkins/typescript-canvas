export interface iShape {
   draw(ctx:CanvasRenderingContext2D): void;
   move(): void;
   x: number;
   y: number;
   vx: number;
   vy: number;
   width: number;
   height:number;
   color: string;
   life: number;
   lineWidth: number;
}
