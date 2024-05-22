"use client;";
import { useEffect, useRef, useState } from "react";

export const useDraw = (onDraw) => {
  const [mouseDown, setMouseDown] = useState(false);
  const canvasRef = useRef(null);
  const prevPoint = useRef(null);
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(0);

  const onMouseDown = () => setMouseDown(true);
  const canvasCheck = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    return { canvas, ctx };
  };

  const addUndo = () => {
    const { canvas, ctx } = canvasCheck();
    if (step > 5) {
      setHistory((prev) => prev.slice(1));
      setStep((prev) => prev - 1);
    }
    const newHistory = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev, newHistory]);
    setStep((prev) => prev + 1);
  };

  const undo = () => {
    const { canvas, ctx } = canvasCheck();
    if (step <= 0) return;
    setHistory((prev) => prev.slice(0, -1));
    setStep((prev) => prev - 1);
  };

  const clear = () => {
    const { canvas, ctx } = canvasCheck();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
    setStep(0);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!mouseDown) {
        return;
      }
      const currentPoint = computePointInCanvas(e);
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx || !currentPoint) {
        return;
      }

      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current });
      prevPoint.current = currentPoint;
    };

    if (step >= 0 && history[history.length - 1]) {
      const ctx = canvasRef.current?.getContext("2d");
      const imgData = history[history.length - 1];
      ctx.putImageData(imgData, 0, 0);
    }

    console.log("STEP:", step);
    console.log("HISTORY:", history);

    const computePointInCanvas = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      return { x, y };
    };

    const mouseUpHandler = () => {
      setMouseDown(false);
      addUndo();
      prevPoint.current = null;
    };

    canvasRef.current?.addEventListener("mousemove", handler);
    canvasRef.current?.addEventListener("mouseup", mouseUpHandler);

    return () => {
      canvasRef.current?.removeEventListener("mousemove", handler);
      canvasRef.current?.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [onDraw, mouseDown, step, history]);

  return { canvasRef, onMouseDown, clear, undo };
};
