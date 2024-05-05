"use client";
import Image from "next/image";
import Card from "@/components/dashboard/Card";
import Create from "@/components/dashboard/Create";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Fault from "@/utils/fault";

const handleCreate = () => {
  api({
    url: "/api/dashboard",
    method: "POST",
  })
    .then(() => toast("✅ Successfully created a room!"))
    .catch(() => toast("❌ Internal Server Error"));
};

const Dashboard = () => {
  const [rooms, setRooms] = useState(null);
  const { data: session } = useSession();
  const load = () => {
    api({
      method: "GET",
      url: "/api/dashboard",
    }).then((response) => {
      if (response.message !== "OK") {
        throw new Fault(500, "Internal Server Error", "Contact Developers");
      }
      setRooms(response.items.rooms);
    });
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center ml-[10%] h-2/3 gap-y-6">
      <div className="flex flex-row items-center w-1/2 gap-x-12">
        <Image
          src={session.user.image}
          alt={`${session.user.name}'s profile picture`}
          width={200}
          height={200}
          className="border-4 rounded-full border-board-blue-200"
        />
        <div className="text-6xl text-black font-semibold">
          Hello, {session.user.name}!
        </div>
      </div>
      <div className="text-black text-4xl font-semibold">Your Rooms</div>
      <div className="flex flex-row gap-x-4 w-full items-center">
        {rooms?.map((room, index) => (
          <Card key={index} id={room} />
        ))}
        <Create handleClick={handleCreate} />
      </div>
    </div>
  );
};

export default Dashboard;
