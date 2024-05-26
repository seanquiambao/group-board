"use client";
import Canvas from "@/components/room/Canvas";
import Toolbar from "@/components/room/Toolbar";
import Properties from "@/components/room/properties/Properties";
import { useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import Menu from "@/components/room/Menu";
import { distanceBetween, angleBetween } from "@/utils/math";
import { PATTERNS } from "@/data/room/pattern";
import Popup from "@/components/Popup";
import { api } from "@/utils/api";
import toast from "react-hot-toast";

const PROPERTIES = {
  size: 5,
  color: "#000000",
  tool: "pencil",
  pattern: 0,
};

const POPUP = {
  title: "",
  message: "",
  color: "",
  visible: false,
  onClick: () => {},
  button: "",
};

const Room = ({ roomID }) => {
  const [tools, setTools] = useState(PROPERTIES);
  const [popup, setPopup] = useState(POPUP);

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
    const pixelColor = bgColor === "white" ? tools.color : "white";

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

  const { canvasRef, onMouseDown, clear, undo } = useDraw(
    currentTool(tools.tool),
  );

  const save = () => {
    if (!canvasRef.current) {
      toast("error");
      return;
    }
    const img = canvasRef.current.toDataURL("image/png");
    api({
      method: "PUT",
      url: `/api/room?roomID=${roomID}`,
      body: {
        img: img,
      },
    }).then((response) => {
      if (response.message !== "OK") {
        toast("oopsies");
        return;
      }
      toast("yay");
    });
  };

  return (
    <div className="w-screen h-screen bg-black/10 relative">
      {popup.visible && (
        <Popup popup={popup} setPopup={setPopup} onClick={popup.onClick} />
      )}
      <Menu clearFn={clear} saveFn={save} popup={popup} setPopup={setPopup} />
      <Toolbar tools={tools} setTools={setTools} handleUndo={undo} />
      <Canvas canvasRef={canvasRef} onMouseDown={onMouseDown} />
      <Properties tools={tools} setTools={setTools} />
    </div>
  );
};

export default Room;
