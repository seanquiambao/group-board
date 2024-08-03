import { FaArrowUp } from "react-icons/fa6";

const Input = ({ show, setShow }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <textarea className="resize-none w-11/12 bg-white h-10 rounded-lg py-2 px-4 focus:outline-none text-wrap shadow-md" />
      <button className="rounded-full w-10 h-10 bg-board-blue-200 hover:brightness-95 flex items-center justify-center">
        <FaArrowUp className="text-white text-xl" />
      </button>
    </div>
  );
};

export default Input;
