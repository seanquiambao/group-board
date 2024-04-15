"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-8">
      <div className="text-7xl text-black font-semibold">GroupBoard</div>
      <div className="text-4xl text-black">
        whiteboard together all in one web app
      </div>
      <Link href="/dashboard">dashboard</Link>
      <button
        className="bg-board-blue-200 text-white text-2xl font-semibold py-3 px-7 rounded-2xl hover:-translate-y-1 duration-300"
        onClick={() => signIn("google")}
      >
        sign into google
      </button>
    </div>
  );
};

export default Home;
