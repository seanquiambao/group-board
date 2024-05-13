"use client";
import Canvas from "@/components/room/Canvas";
import Toolbar from "@/components/room/Toolbar";
import Properties from "@/components/room/properties/Properties";
import Brush from "@/utils/room/tools";
import { useEffect, useState } from "react";

const PROPERTIES = {
  size: 5,
  color: "#000000",
  tool: 0,
};

const Page = () => {
  const [tools, setTools] = useState(PROPERTIES);
  const brush = new Brush();

  useEffect(() => {
    brush.updateBrush(tools);
  });
  return (
    <div className="w-screen h-screen bg-board-blue-100 relative">
      <Toolbar tools={tools} setTools={setTools} />
      <Canvas brush={brush} tools={tools} setTools={setTools} />
      <Properties tools={tools} setTools={setTools} />
    </div>
  );
};

export default Page;
