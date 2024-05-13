import { COLORS } from "@/data/room/pen";

const Properties = ({ color, setColor, size, setSize }) => {
  return (
    <div className="absolute flex flex-col gap-y-5 p-5 bottom-5 left-5 w-56 bg-white rounded-xl text-xs">
      <div className="flex flex-col gap-y-2">
        Color
        <div className="flex flex-row gap-x-2">
          {COLORS.map((colors, index) => (
            <button
              onClick={() => setColor(index)}
              key={index}
              className={`${index === color ? "outline outline-board-blue-200" : "hover:outline hover:outline-board-blue-100"} ${colors} w-8 h-8 rounded-xl active:outline-board-blue-200`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        Size
        <div className="flex flex-row gap-x-2 items-center text-sm">
          <input
            onChange={(e) => setSize(e.target.value)}
            type="range"
            min="1"
            max="25"
            defaultValue={size}
          />
          {size}
        </div>
      </div>
    </div>
  );
};

export default Properties;
