import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const iconStyle = "text-lg";

const Menu = ({ clearFn, popup, setPopup }) => {
  const [show, setShow] = useState(false);

  const confirmClear = () => {
    setPopup({
      title: "Clear Canvas",
      message: "This action is irreversible. You may lose unsaved progress.",
      color: "bg-board-red text-white",
      visible: true,
      onClick: clearFn,
      button: "clear",
    });
  };
  const MENU = [
    {
      name: "Leave Room",
      icon: <HiOutlinePlusCircle className={iconStyle} />,
      style: "",
      fn: confirmClear,
    },
    {
      name: "Clear Canvas",
      icon: <IoMdTrash className={iconStyle} />,
      style: "text-board-red",
      fn: confirmClear,
    },
  ];

  return (
    <div className="absolute flex flex-col gap-y-5 top-5 left-5">
      <button
        onClick={() => setShow(!show)}
        className="flex w-12 h-12 bg-white rounded-xl items-center justify-center drop-shadow-md hover:brightness-95"
      >
        <IoMenu />
      </button>
      {show && (
        <div className="flex flex-col rounded-lg text-sm p-1.5 w-36 bg-white drop-shadow-md gap-y-2">
          {MENU.map((menu, index) => (
            <button
              key={index}
              className={`${menu.style} flex cursor-pointer items-center brightness-100 py-1.5 px-1.5 bg-white rounded-lg hover:brightness-95`}
              onClick={menu.fn}
            >
              {menu.icon}
              <div className="pl-2">{menu.name}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
