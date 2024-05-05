const NotFoundError = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="text-6xl text-board-red font-bold">404</div>
      <div className="text-2xl text-black font-bold">Page Not Found</div>
      <div className="text-lg text-black">Go to home page</div>
    </div>
  );
};

export default NotFoundError;
