import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { MENU } from "@/data/room/menu";

const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="absolute flex flex-col w-1/12 gap-y-5 items-center top-5 right-0">
      <button
        onClick={() => setShow(!show)}
        className="flex w-12 h-12 bg-white rounded-xl items-center justify-center drop-shadow-md hover:brightness-95"
      >
        <IoMenu />
      </button>
      {show && (
        <div className="flex flex-col rounded-lg text-sm p-1.5 w-36 bg-white drop-shadow-md gap-y-2">
          {MENU.map((menu, index) => (
            <div
              key={index}
              className={`${menu.style} flex cursor-pointer items-center brightness-100 py-1.5 px-1.5 bg-white rounded-lg hover:brightness-95`}
            >
              {menu.icon}
              <div
                className={`pl-2 ${menu.name === "Clear Canvas" && "text-board-red"}`}
              >
                {menu.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
