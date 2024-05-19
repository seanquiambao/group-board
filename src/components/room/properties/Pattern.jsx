import Image from "next/image";
import { PATTERNS } from "@/data/room/pen";

const Pattern = ({ tools, setTools }) => {
  return (
    <div className="flex flex-col gap-y-2">
      Patterns
      <div className="flex flex-row gap-x-2">
        {PATTERNS.map((pattern, index) => (
          <Image
            alt={`pattern ${index}`}
            src={pattern.img}
            width={35}
            height={35}
            onClick={() => setTools({ ...tools, pattern: index })}
            key={index}
            className={`${tools.pattern === index ? "outline outline-board-blue-200" : "hover:outline outline-board-blue-100"} rounded-xl active:outline-board-blue-200 outline-2`}
          />
        ))}
      </div>
    </div>
  );
};

export default Pattern;
