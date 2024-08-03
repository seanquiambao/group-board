import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="w-1/4 absolute bottom-5 right-5 ">
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
