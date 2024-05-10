import Image from "next/image";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";
const Card = ({ id, handleDelete }) => {
  return (
    <div className="flex flex-col w-1/5 bg-white rounded-2xl drop-shadow-md p-3 gap-2 group hover:-translate-y-1 duration-300 border">
      <TiDelete
        onClick={handleDelete}
        className="absolute -top-2 -right-2 hover:text-board-red text-2xl group-hover:block hidden"
      />
      <Link href={`/room/${id}`}>
        <Image
          src="/temp.png"
          alt="Thumbnail"
          width={100}
          height={100}
          className="rounded-2xl border-2 self-center"
        />
        <div className="text-black/50 text-lg font-semibold">
          Expires: 4/14/2024
        </div>
        <div className="text-black text-2xl font-semibold">Room: {id}</div>
      </Link>
    </div>
  );
};

export default Card;
