export interface iShape {
   draw(ctx:CanvasRenderingContext2D): void;
   move(): void;
   x: number;
   y: number;
   color: string;
   lineWidth: number;
}
