import { FaPencilAlt, FaPaintBrush } from "react-icons/fa";
import { BsFillEraserFill } from "react-icons/bs";

const style = "text-lg";

export const TOOLS = [
  {
    name: "pencil",
    icon: <FaPencilAlt className={style} />,
  },
  {
    name: "brush",
    icon: <FaPaintBrush className={style} />,
  },
  {
    name: "eraser",
    icon: <BsFillEraserFill className={style} />,
  },
];
