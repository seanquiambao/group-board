import { COLORS } from "@/data/room/pen";

const Color = ({ tools, setTools }) => {
  return (
    <div className="flex flex-col gap-y-2">
      Color
      <div className="flex flex-row gap-x-2">
        {COLORS.map((color, index) => (
          <button
            onClick={() => setTools({ ...tools, color: color.hex })}
            key={index}
            className={`${color.hex === tools.color ? "outline outline-board-blue-200" : "hover:outline hover:outline-board-blue-100"} ${color.style} w-8 h-8 rounded-xl active:outline-board-blue-200 outline-2`}
          />
        ))}
      </div>
    </div>
  );
};

export default Color;
