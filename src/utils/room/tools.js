import { distanceBetween, angleBetween } from "@/utils/math";

export default class Brush {
  constructor() {
    this.color = "#000000";
    this.size = 5;
    this.tool = 0;
    this.drawLine = this.drawLine.bind(this);
    this.erase = this.erase.bind(this);
    this.pencil = this.pencil.bind(this);
  }

  updateBrush(properties) {
    this.color = properties.color;
    this.size = properties.size;
    this.tool = properties.tool;
  }

  drawLine({ prevPoint, currentPoint, ctx }) {
    const color = this.color;
    const size = this.size;

    let startPoint = prevPoint ?? currentPoint;
    const halfSize = size / 2;
    ctx.fillStyle = color;
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

  erase({ prevPoint, currentPoint, ctx }) {
    ctx.globalCompositeOperation = "destination-out";
    this.drawLine({ prevPoint, currentPoint, ctx });
  }

  pencil({ prevPoint, currentPoint, ctx }) {
    ctx.globalCompositeOperation = "source-over";
    this.drawLine({ prevPoint, currentPoint, ctx });
  }

  currentTool() {
    const TOOLS = [this.pencil, this.pencil, this.erase];
    return TOOLS[this.tool];
  }
}
