import { distanceBetween, angleBetween } from "@/utils/math";
export function erase({ prevPoint, currentPoint, ctx }) {
  ctx.globalCompositeOperation = "destination-out";
  drawLine({ prevPoint, currentPoint, ctx });
}

export function pencil({ prevPoint, currentPoint, ctx }) {
  ctx.globalCompositeOperation = "source-over";
  drawLine({ prevPoint, currentPoint, ctx });
}

function drawLine({ prevPoint, currentPoint, ctx }) {
  const lineColor = "#000";
  const size = 5;

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

export const TOOLS = [pencil, pencil, erase];
