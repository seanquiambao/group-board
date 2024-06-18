"use client";
import Canvas from "@/components/room/canvas/Canvas";
import { useState } from "react";
import Popup from "@/components/Popup";

const POPUP = {
  title: "",
  message: "",
  color: "",
  visible: false,
  onClick: () => {},
  button: "",
};

const Room = () => {
  const [popup, setPopup] = useState(POPUP);

  return (
    <div className="w-screen h-screen bg-black/10 relative">
      {popup.visible && (
        <Popup popup={popup} setPopup={setPopup} onClick={popup.onClick} />
      )}
      <Canvas popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default Room;
