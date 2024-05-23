import { TOOLS } from "@/data/room/tools";
import { IoArrowUndo } from "react-icons/io5";

const Toolbar = ({ tools, setTools, handleUndo }) => {
  return (
    <div className="absolute flex flex-col bg-white drop-shadow-lg rounded-xl gap-y-2 px-1.5 py-1.5 left-5 bottom-[50%]">
      {TOOLS.map((tool, index) => (
        <button
          onClick={() => setTools({ ...tools, tool: tool.name })}
          key={index}
          className={`${tools.tool === tool.name && "bg-board-blue-200 text-white hover:bg-board-blue-200"} ${tools !== index && "hover:bg-board-blue-100 active:outline active:outline-2 active:outline-board-blue-200"} p-3.5 text-black rounded-xl relative`}
        >
          {tool.icon}
          <div className="absolute bottom-1.5 right-2 text-xs">{index}</div>
        </button>
      ))}
      <div className="border-t">
        <button
          onClick={handleUndo}
          className="p-3.5 text-black hover:text-black/50"
        >
          <IoArrowUndo />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
