import React from "react";

import io from "socket.io-client";

const socket = io();

const context = React.createContext();

export default function ChatProvider(props) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("newMessage", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("newUser", (user) => {
      setMessages([...messages, user]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("newMessage");
      socket.off("newUser");
    };
  }, []);

  const joinRoom = (room, name) => {
    socket.emit("join", { room, name });
    setRoom(room);
    setUser(name);
  };

  const sendMessage = (message) => {
    socket.emit("sendMessage", { room, user, message });
  };

  return (
    <context.Provider
      value={{ isConnected, messages, joinRoom, sendMessage, room, user }}
    >
      {props.children}
    </context.Provider>
  );
}