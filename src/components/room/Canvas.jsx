"use client";
import { useDraw } from "@/hooks/useDraw";

import { TOOLS } from "@/utils/room/tools";

const Canvas = ({ tools, setTools }) => {
  const { canvasRef, onMouseDown } = useDraw(TOOLS[tools]);

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
