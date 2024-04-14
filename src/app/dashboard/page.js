import Image from "next/image";
import Card from "@/components/dashboard/Card";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage className="flex-1">
      <div className="flex flex-col items-start justify-center ml-[10%] w-full h-2/3 gap-y-6">
        <div className="flex flex-row items-center  w-1/2 gap-x-12">
          <Image
            src="/temp.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="border-4 rounded-full border-board-blue-200"
          />
          <div className="text-6xl text-black font-semibold">
            Hello, toastmeal!
          </div>
        </div>
        <div className="text-black text-4xl font-semibold">Your Rooms</div>
        <div className="flex flex-row gap-x-2 w-full">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </ProtectedPage>
  );
};

export default Page;
