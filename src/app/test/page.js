"use client";
import Canvas from "@/components/room/Canvas";
import Toolbar from "@/components/room/Toolbar";
import { useState } from "react";

const Page = () => {
  const [tools, setTools] = useState(0);
  return (
    <div className="w-screen h-screen bg-board-blue-100 relative">
      <Toolbar tools={tools} setTools={setTools} />
      <Canvas tools={tools} setTools={setTools} />
    </div>
  );
};

export default Page;
