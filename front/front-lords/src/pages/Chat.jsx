import React from "react";
import { useState } from "react";

import { useContext } from "react";
import { context } from "../context/context";

function Message({ message, user, isMe, date }) {
  const className = isMe
    ? "flex flex-col w-2/3 shadow-lg rounded bg-slate-600 text-white text-xs self-start"
    : "flex flex-col w-2/3 shadow-lg rounded bg-slate-400 text-white text-xs self-end";

  return (
    <div className={className}>
      <div className="border-b-2 p-3">
        <p>{user}</p>
        <p>{date}</p>
      </div>
      <div className="p-3">
        <p>{message}</p>
      </div>
    </div>
  );
}

function Chat() {
  const [message, setMessage] = useState("");

  const { sendMessage, messages, user } = useContext(context);

  console.log("messages", messages);

  return (
    <div className="flex flex-col">
      <div className="overflow-y-scroll h-96 flex flex-col p-4 gap-3 no-scrollbar">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message.message}
            user={message.user}
            isMe={message.user === user}
            date={message.date}
          />
        ))}
      </div>
      <form
        className="p-3 border-t-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        <textarea
          className="w-full bg-transparent"
          placeholder="enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
