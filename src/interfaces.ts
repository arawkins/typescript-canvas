export interface iShape {
   draw(ctx:CanvasRenderingContext2D): void;
   x: number;
   y: number;
   color: string;
   lineWidth: number;
}
