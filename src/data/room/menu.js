import { IoMdTrash } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const iconStyle = "text-lg";
export const MENU = [
  {
    name: "Save Art",
    icon: <MdSaveAlt className={iconStyle} />,
    style: "",
  },
  {
    name: "Post your Art",
    icon: <HiOutlinePlusCircle className={iconStyle} />,
    style: "",
  },
  {
    name: "Clear Canvas",
    icon: <IoMdTrash className={iconStyle} />,
    style: "text-board-red",
  },
];
