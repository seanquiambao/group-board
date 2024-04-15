import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <Link
      className="flex flex-col w-1/5 bg-white rounded-2xl drop-shadow-md p-3 gap-2 hover:-translate-y-1 duration-300 border"
      href="/room/help"
    >
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
      <div className="text-black text-3xl font-semibold">
        Room: ABCD-EFGH-IJKL
      </div>
    </Link>
  );
};

export default Card;