"use client";
import Message from "./Message";
import { MESSAGES } from "@/data/room/chat/messages_fixtures";
import { useState, useEffect } from "react";
const Messages = () => {
  const [list, setList] = useState(MESSAGES);

  useEffect(() => {
    setList(
      list.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c - d;
      }),
    );
  }, [list]);
  return (
    <div className="gap-y-2 flex flex-col py-2 overflow-y-scroll">
      {list.map((message, index) => (
        <Message
          key={index}
          img={message.img}
          author={message.author}
          message={message.message}
          date={message.date}
        />
      ))}
    </div>
  );
};

export default Messages;
