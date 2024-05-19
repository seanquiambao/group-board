import { distanceBetween, angleBetween } from "@/utils/math";

const HexPattern = /^#?[0-9A-Fa-f]{1,2}[0-9A-Fa-f]{1,2}[0-9A-Fa-f]{1,2}$/;

export default class Brush {
  constructor() {
    this.color = "#000000";
    this.size = 5;
    this.tool = "brush";
    this.stamps = {};
    this.drawLine = this.drawLine.bind(this);
    this.erase = this.erase.bind(this);
    this.draw = this.draw.bind(this);
    this.stamp = this.stamp.bind(this);
  }

  updateBrush(properties) {
    this.color = properties.color;
    this.size = parseInt(properties.size);
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
    ctx.imageSmoothingEnabled = false;
    ctx.beginPath();
    this.stamp({ ctx, x, y, size });

    const dist = distanceBetween(startPoint, currentPoint);
    const angle = angleBetween(startPoint, currentPoint);
    for (let i = 0; i < dist; ++i) {
      const x = startPoint.x + Math.sin(angle) * i - halfSize;
      const y = startPoint.y + Math.cos(angle) * i - halfSize;
      this.stamp({ ctx, x, y, size });
    }
  }

  stamp({ ctx, x, y, size }) {
    if (this.tool === "brush") {
      if (size < 8) {
        ctx.fillRect(Math.round(x), Math.round(y), size, size);
        return;
      }
      const img = new Image();
      if (size < 10) {
        img.src = "/brush/brush.png";
      } else {
        img.src = "/brush/brush2.png";
      }

      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      ctx.drawImage(img, Math.round(x), Math.round(y), size, size);
    } else {
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
      brush: this.draw,
      eraser: this.erase,
    };
    return TOOLS[this.tool];
  }
}
