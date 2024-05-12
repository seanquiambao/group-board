import { FaPencilAlt, FaPaintBrush } from "react-icons/fa";
import { BsFillEraserFill } from "react-icons/bs";

const style = "text-lg";

export const TOOLS = [
  {
    name: "Pencil",
    icon: <FaPencilAlt className={style} />,
  },
  {
    name: "Brush",
    icon: <FaPaintBrush className={style} />,
  },
  {
    name: "Eraser",
    icon: <BsFillEraserFill className={style} />,
  },
];
