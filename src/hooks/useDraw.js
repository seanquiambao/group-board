"use client;";
import { useEffect, useRef } from "react";

export const useDraw = (onDraw) => {
  const canvasRef = useRef(null);
  const prevPoint = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      const currentPoint = computePointInCanvas(e);
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx || !currentPoint) {
        return;
      }

      console.log("on point!");
      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current });
      prevPoint.current = currentPoint;
    };

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

    canvasRef.current?.addEventListener("mousemove", handler);

    return () => canvasRef.current?.addEventListener("mousemove", handler);
  });

  return { canvasRef };
};
