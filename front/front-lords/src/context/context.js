import React, { useState, useEffect } from "react";

import io from "socket.io-client";

const socket = io();

export const context = React.createContext();

export default function ChatProvider(props) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  });

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("newMessage", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("newUser", (user) => {
      setMessages((messages) => [...messages, user]);
    });

    socket.on("newRoom", (room) => {
      setRooms((rooms) => [...rooms, room]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("newMessage");
      socket.off("newUser");
      socket.off("newRoom");
    };
  }, []);

  const joinRoom = (room, name) => {
    socket.emit("join", { room, user: name });
    setRooms((rooms) => {
      if (!rooms.includes(room)) {
        return [...rooms, room];
      }
      return rooms;
    });
    setUser(name);
  };

  const sendMessage = (message, room) => {
    socket.emit("sendMessage", { room, user, message });
    setJoinedRooms((rooms) => {
      if (!rooms.includes(room)) {
        return [...rooms, room];
      }
      return rooms;
    });
  };

  return (
    <context.Provider
      value={{
        isConnected,
        messages,
        joinRoom,
        sendMessage,
        rooms,
        user,
        joinedRooms,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
