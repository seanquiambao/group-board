"use client";
import { useEffect, useState } from "react";
import { api } from "@/utils/api";
import Fault from "@/utils/fault";
import Room from "@/components/room/Room";

const Page = ({ params }) => {
  const [room, setRoom] = useState(false);
  const [error, setError] = useState(false);

  const { roomID } = params;
  useEffect(() => {
    api({
      method: "GET",
      url: `/api/room?roomid=${roomID}`,
    }).then((response) => {
      console.log(response);
      if (response.message !== "OK") {
        setError(true);
        throw new Fault(404, "Invalid Room ID", "Please join a valid room.");
      }
      setRoom(true);
    });
  }, [roomID]);
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {room && <Room roomID={roomID} />}
      {error && (
        <div className="text-2xl text-board-red font-bold">Invalid Room ID</div>
      )}
    </div>
  );
};

export default Page;
