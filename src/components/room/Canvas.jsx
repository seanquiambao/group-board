const Canvas = ({ canvasRef, onMouseDown }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width="320"
        height="240"
        className="bg-white"
        style={{ imageRendering: "pixelated", width: 320, height: 240 }}
      />
    </div>
  );
};

export default Canvas;
