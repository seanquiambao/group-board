"use client";
import Canvas from "@/components/room/Canvas";
import Toolbar from "@/components/room/Toolbar";
import Properties from "@/components/room/properties/Properties";
import { useState } from "react";
import Menu from "@/components/room/Menu";

const PROPERTIES = {
  size: 5,
  color: "#000000",
  tool: "pencil",
  pattern: 0,
};

const Page = () => {
  const [tools, setTools] = useState(PROPERTIES);

  return (
    <div className="w-screen h-screen bg-board-blue-100 relative">
      <Menu />
      <Toolbar tools={tools} setTools={setTools} />
      <Canvas tools={tools} setTools={setTools} />
      <Properties tools={tools} setTools={setTools} />
    </div>
  );
};

export default Page;
