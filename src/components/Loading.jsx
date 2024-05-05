import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-4xl font-bold  gap-y-5">
      <AiOutlineLoading3Quarters className="animate-spin text-board-blue-200 animate-ease-in-out" />
      <div className="text-black">Loading...</div>
    </div>
  );
};

export default Loading;
