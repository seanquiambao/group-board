"use client";
import { distanceBetween, angleBetween } from "@/utils/math";
import { PATTERNS } from "@/data/room/pattern";
import { useDraw } from "@/hooks/useDraw";

const Canvas = ({ tools, setTools }) => {
  const generatePattern = (index) => {
    let patternCanvas = document.createElement("canvas");
    const pattern = PATTERNS[index];
    if (!pattern) {
      return null;
    }
    patternCanvas.width = pattern.size;
    patternCanvas.height = pattern.size;
    const patternCtx = patternCanvas.getContext("2d");
    const bgColor = pattern.inverse === 0 ? "white" : tools.color;
    const pixelColor = bgColor === "white" ? tools.color : white;

    patternCtx.fillStyle = bgColor;
    patternCtx.fillRect(0, 0, pattern.size, pattern.size);

    patternCtx.fillStyle = pixelColor;
    for (let [x, y] of pattern.pixels) {
      patternCtx.fillRect(x, y, 1, 1);
    }

    return patternCanvas;
  };

  const erase = ({ prevPoint, currentPoint, ctx }) => {
    ctx.fillStyle = tools.color;
    ctx.globalCompositeOperation = "destination-out";
    drawLine({ prevPoint, currentPoint, ctx });
  };

  const pencil = ({ prevPoint, currentPoint, ctx }) => {
    ctx.globalCompositeOperation = "source-over";
    const patternCanvas = generatePattern(tools.pattern);
    ctx.fillStyle = patternCanvas
      ? ctx.createPattern(patternCanvas, "repeat")
      : tools.color;
    drawLine({ prevPoint, currentPoint, ctx });
  };

  const drawLine = ({ prevPoint, currentPoint, ctx }) => {
    let startPoint = prevPoint ?? currentPoint;
    const halfSize = tools.size / 2;

    const x = startPoint.x - halfSize;
    const y = startPoint.y - halfSize;
    ctx.imageSmoothingEnabled = false;
    ctx.beginPath();
    ctx.fillRect(Math.round(x), Math.round(y), tools.size, tools.size);

    const dist = distanceBetween(startPoint, currentPoint);
    const angle = angleBetween(startPoint, currentPoint);
    for (let i = 0; i < dist; ++i) {
      const x = startPoint.x + Math.sin(angle) * i - halfSize;
      const y = startPoint.y + Math.cos(angle) * i - halfSize;
      ctx.fillRect(Math.round(x), Math.round(y), tools.size, tools.size);
    }
  };

  const currentTool = (tool) => {
    const TOOLS = {
      pencil: pencil,
      eraser: erase,
    };
    return TOOLS[tool];
  };

  const { canvasRef, onMouseDown } = useDraw(currentTool(tools.tool));

  return (
    <div className="flex justify-center items-center h-full">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width="1080"
        height="512"
        className="bg-white"
        style={{ imageRendering: "pixelated", width: 1080, height: 512 }}
      />
    </div>
  );
};

export default Canvas;
