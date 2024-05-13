"use client";
import { useDraw } from "@/hooks/useDraw";

const Canvas = ({ brush, tools, setTools }) => {
  const { canvasRef, onMouseDown } = useDraw(brush.currentTool());

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
