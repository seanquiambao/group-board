import { distanceBetween, angleBetween } from "@/utils/math";
import PatternMaker from "./pattern";

export default class Brush {
  constructor() {
    this.color = "#000000";
    this.size = 5;
    this.tool = "pencil";
    this.drawLine = this.drawLine.bind(this);
    this.erase = this.erase.bind(this);
    this.draw = this.draw.bind(this);
    this.patternMaker = new PatternMaker();
    this.pattern = 0;
  }

  updateBrush(properties) {
    this.color = properties.color;
    this.patternMaker.updateColor(properties.color);
    this.size = parseInt(properties.size);
    this.tool = properties.tool;
    this.pattern = parseInt(properties.pattern);
  }

  drawLine({ prevPoint, currentPoint, ctx }) {
    const color = this.color;
    const size = this.size;

    let startPoint = prevPoint ?? currentPoint;
    const halfSize = size / 2;

    if (this.tool === "eraser" || !this.patternMaker.getPattern(this.pattern)) {
      ctx.fillStyle = color;
    } else {
      const patternCanvas = this.patternMaker.getPattern(this.pattern);
      ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
    }

    const x = startPoint.x - halfSize;
    const y = startPoint.y - halfSize;
    ctx.imageSmoothingEnabled = false;
    ctx.beginPath();
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

  draw({ prevPoint, currentPoint, ctx }) {
    ctx.globalCompositeOperation = "source-over";
    this.drawLine({ prevPoint, currentPoint, ctx });
  }

  currentTool() {
    const TOOLS = {
      pencil: this.draw,
      eraser: this.erase,
    };
    return TOOLS[this.tool];
  }
}
