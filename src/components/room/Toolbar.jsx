import { TOOLS } from "@/data/tools";

const Toolbar = ({ tools, setTools }) => {
  return (
    <div className="absolute flex flex-col bg-white drop-shadow-lg rounded-2xl gap-y-1 px-1.5 py-1.5 left-5 bottom-[50%]">
      {TOOLS.map((tool, index) => (
        <button
          onClick={() => setTools(index)}
          key={index}
          className={`${tools === index && "bg-board-blue-200 text-white hover:bg-board-blue-200"} ${tools !== index && "hover:bg-board-blue-100"} p-3.5 text-black rounded-2xl duration-100 relative`}
        >
          {tool.icon}
          <div className="absolute bottom-1.5 right-2 text-xs">{index}</div>
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
