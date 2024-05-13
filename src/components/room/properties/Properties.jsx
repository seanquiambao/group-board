import { COLORS } from "@/data/room/pen";

const Properties = ({ tools, setTools }) => {
  return (
    <div className="absolute flex flex-col gap-y-5 p-5 bottom-5 left-5 w-56 bg-white rounded-xl text-xs">
      <div className="flex flex-col gap-y-2">
        Color
        <div className="flex flex-row gap-x-2">
          {COLORS.map((color, index) => (
            <button
              onClick={() => setTools({ ...tools, color: color.hex })}
              key={index}
              className={`${color.hex === tools.color ? "outline outline-board-blue-200" : "hover:outline hover:outline-board-blue-100"} ${color.style} w-8 h-8 rounded-xl active:outline-board-blue-200`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        Size
        <div className="flex flex-row gap-x-2 items-center text-sm">
          <input
            onChange={(e) => setTools({ ...tools, size: e.target.value })}
            type="range"
            min="1"
            max="25"
            defaultValue={tools.size}
          />
          {tools.size}
        </div>
      </div>
    </div>
  );
};

export default Properties;
