import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-5">
      <div className="text-7xl text-board-black font-semibold">GroupBoard</div>
      <div className="text-4xl text-board-black">
        whiteboard together all in one web app
      </div>
      <Link
        className="bg-board-blue-200 text-white text-2xl font-semibold py-2 px-7 rounded-2xl hover:brightness-110 duration-300"
        href="/dashboard"
      >
        sign into google
      </Link>
    </div>
  );
};

export default Home;
