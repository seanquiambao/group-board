import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

const Navigation = () => {
  return (
    <div className="h-16 flex items-center justify-between w-full bg-white drop-shadow-md">
      <Link href="/" className="text-2xl ml-6 hover:opacity-75 duration-300">
        GroupBoard
      </Link>
      <div className="flex flex-row items-center w-fit gap-x-5 mr-3">
        <Link
          href="/join"
          className="bg-board-blue-200 text-white drop-shadow-md px-6 py-2 rounded-xl text-lg font-bold  hover:-translate-y-0.5 duration-300"
        >
          Join
        </Link>
        <Link
          href="/"
          className="drop-shadow-md p-3 rounded-xl bg-white h-fit w-fit text-xl hover:bg-board-red hover:text-white hover:-translate-y-0.5 duration-300"
        >
          <FiLogOut />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
