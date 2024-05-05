"use client";

const Error = ({ error: { code, name, message } }) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="text-6xl text-board-red font-bold">{code}</div>
      <div className="text-2xl text-black font-bold">{name}</div>
      <div className="text-lg text-black">{message}</div>
    </div>
  );
};

export default Error;
