import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import getRandomLiveChatMessage from "../helper/randomChat";
import getRandomName from "../helper/randomName";
import formatTime from "../helper/formatTime";

const ChatBox = ({messages,setMessages}) => {
  const [myChat, setMyChat] = useState("");

  useEffect(() => {
    // API polling (fetching chats after a certain interval)

    const interval = setInterval(() => {
      // Create demo chat
      const chat = {
        name: getRandomName(),
        message: getRandomLiveChatMessage(),
        timestamp: new Date(),
        mine: false,
      };

      // Update state using the functional form to avoid stale state
      setMessages((prevMessages) => {
        const newMessage = [chat, ...prevMessages];
        return newMessage.slice(0, 14);
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (myChat == "") {
      alert("Please enter something");
      return;
    } else {
      setMessages((prevMessages) => {
        const Message = {
          name: "You",
          message: myChat,
          timestamp: new Date(),
          mine: true,
        };
        const newMessage = [Message, ...prevMessages];
        return newMessage.slice(0, 14);
      });
      setMyChat("");
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setMyChat(e.target.value);
  };

  return (
    <div>
      <div className="w-full h-[60vh] shadow-xl border-l border-l-slate-300 p-2 flex flex-col-reverse gap-3 overflow-y-auto rounded">
        {messages.length > 0 &&
          messages.map((c, i) => (
            <Chat
              key={i}
              name={c.name}
              message={c.message}
              timestamp={formatTime(c.timestamp)} // Format timestamp here
              mine={c.mine}
            />
          ))}
      </div>
      <div className="mt-3">
        {/* Add chat input form */}
        {/* Implement sending messages */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={myChat}
            placeholder="Chat here"
            className="w-[80%] rounded outline-none bg-slate-200 border border-slate-400 pl-1"
          />
          <input
            className="border  ml-2 px-1 w-[15%] rounded inline-block bg-green-400"
            type="submit"
            value="send"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
