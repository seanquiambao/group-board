import { FaPlus } from "react-icons/fa";

const Create = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center rounded-full h-16 w-16 drop-shadow-md text-2xl text-black bg-white hover:-translate-y-1 hover:bg-board-blue-200 hover:text-white duration-300"
    >
      <FaPlus />
    </button>
  );
};

export default Create;
