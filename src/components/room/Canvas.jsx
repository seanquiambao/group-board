"use client";
import { useDraw } from "@/hooks/useDraw";
import { distanceBetween, angleBetween } from "@/helpers/math";

const Canvas = () => {
  const { canvasRef, onMouseDown } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = "#000";
    const size = 25;

    let startPoint = prevPoint ?? currentPoint;
    const halfSize = size / 2;
    ctx.strokeStyle = lineColor;
    const x = startPoint.x - halfSize;
    const y = startPoint.y - halfSize;
    ctx.fillRect(Math.round(x), Math.round(y), size, size);

    const dist = distanceBetween(startPoint, currentPoint);
    const angle = angleBetween(startPoint, currentPoint);
    for (let i = 0; i < dist; ++i) {
      const x = startPoint.x + Math.sin(angle) * i - halfSize;
      const y = startPoint.y + Math.cos(angle) * i - halfSize;
      ctx.fillRect(Math.round(x), Math.round(y), size, size);
    }
  }
  return (
    <div className="flex justify-center items-center h-full">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width="512"
        height="512"
        className="bg-white"
        style={{ imageRendering: "pixelated", width: 512, height: 512 }}
      />
    </div>
  );
};

export default Canvas;
