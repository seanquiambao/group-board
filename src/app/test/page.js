"use client";
import Canvas from "@/components/room/Canvas";
import Toolbar from "@/components/room/Toolbar";
import Properties from "@/components/room/Properties";
import { useState } from "react";

const Page = () => {
  const [tools, setTools] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(10);
  return (
    <div className="w-screen h-screen bg-board-blue-100 relative">
      <Toolbar tools={tools} setTools={setTools} />
      <Canvas tools={tools} setTools={setTools} />
      <Properties
        color={color}
        setColor={setColor}
        size={size}
        setSize={setSize}
      />
    </div>
  );
};

export default Page;
