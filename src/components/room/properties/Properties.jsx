import Color from "@/components/room/properties/Color";
import Pattern from "@/components/room/properties/Pattern";
import Size from "@/components/room/properties/Size";
import { PROPERTIES } from "@/data/room/properties";

const Properties = ({ tools, setTools }) => {
  return (
    <div className="absolute flex flex-col gap-y-5 p-5 bottom-5 left-5 w-fit bg-white rounded-xl text-xs">
      {PROPERTIES[tools.tool][0] === 1 && (
        <Color tools={tools} setTools={setTools} />
      )}
      {PROPERTIES[tools.tool][1] === 1 && (
        <Pattern tools={tools} setTools={setTools} />
      )}
      {PROPERTIES[tools.tool][2] === 1 && (
        <Size tools={tools} setTools={setTools} />
      )}
    </div>
  );
};

export default Properties;
