"use client";
import Image from "next/image";
import Card from "@/components/dashboard/Card";
import Create from "@/components/dashboard/Create";
import { useSession } from "next-auth/react";
import { api } from "@/utils/api";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Fault from "@/utils/fault";
import useSWR from "swr";
import Popup from "@/components/Popup";

const handleCreate = () => {
  api({
    url: "/api/dashboard",
    method: "POST",
  })
    .then(() => toast("✅ Successfully created a room!"))
    .catch(() => toast("❌ Internal Server Error"));
};

const handleDelete = (value) => {
  api({
    url: `/api/dashboard?remove=${value}`,
    method: "DELETE",
  })
    .then(() => toast("✅ Successfully deleted a room!"))
    .catch(() => toast("❌ Internal Server Error"));
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const POPUP = {
  title: "",
  message: "",
  color: "",
  visible: false,
  onClick: () => {},
  button: "",
};

const Dashboard = () => {
  const { data, error } = useSWR("/api/dashboard", fetcher);
  const { data: session } = useSession();
  const [rooms, setRooms] = useState([]);
  const [popup, setPopup] = useState(POPUP);
  if (error) {
    throw new Fault(500, "Internal Server Error", "Contact Developers");
  }

  const confirmDelete = (value) => {
    setPopup({
      title: "Delete Room",
      message: "This action is irreversible",
      color: "bg-board-red text-white",
      visible: true,
      onClick: () => handleDelete(value),
      button: "clear",
    });
  };

  return (
    <>
      {popup.visible && (
        <Popup popup={popup} setPopup={setPopup} onClick={popup.onClick} />
      )}
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
        {error && <div>Something went wrong</div>}
        {!data && <div>Loading</div>}
        {data && (
          <div className="flex flex-row gap-x-4 w-full items-center">
            {data.items.rooms?.map((room, index) => (
              <Card
                key={index}
                id={room}
                handleDelete={() => confirmDelete(room)}
              />
            ))}
            {data.items.rooms.length < 3 && (
              <Create handleClick={handleCreate} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
