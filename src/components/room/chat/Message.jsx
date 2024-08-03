import Image from "next/image";
const Message = ({
  img = "/temp.png",
  author = "Unknown Author",
  date = "Unknown Date",
  message = "Message Unavailable",
}) => {
  return (
    <div className="bg-white w-full rounded-lg p-2 gap-2 flex flex-col">
      <div className="flex flex-row items-center">
        <Image
          src={img}
          width={50}
          height={50}
          className="rounded-full border-board-blue-200 border-2"
          alt={`${author}'s profile picture`}
        />
        <div className="ml-2 justify-start">
          <div className="text-xl">{author}</div>
          <div className="text-black/50 text-sm flex flex-row gap-2">
            <div>{date.toDateString()}</div>
            <div>{date.toLocaleTimeString()}</div>
          </div>
        </div>
      </div>
      {message}
    </div>
  );
};

export default Message;
