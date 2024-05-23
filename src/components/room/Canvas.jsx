const Canvas = ({ canvasRef, onMouseDown }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <canvas
        onMouseDown={onMouseDown}
        ref={canvasRef}
        width="1080"
        height="512"
        className="bg-white"
        style={{ imageRendering: "pixelated", width: 1080, height: 512 }}
      />
    </div>
  );
};

export default Canvas;
