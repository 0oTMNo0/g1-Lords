import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { context } from "../context/context";

function Home() {
  const [userNameInput, setUserNameInput] = useState("");
  const [roomInput, setRoomInput] = useState("");

  const { joinRoom } = useContext(context);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <form
          className="p-4"
          onSubmit={(e) => {
            e.preventDefault();
            joinRoom(roomInput, userNameInput);
            navigate("./chat");
          }}
        >
          <div className="mb-6 mt-28">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Username
            </label>
            <input
              type="text"
              onChange={(e) => {
                setUserNameInput(e.target.value);
              }}
              value={userNameInput}
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-28">
            <label
              htmlFor="rooms"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Rooms
            </label>
            <input
              onChange={(e) => {
                setRoomInput(e.target.value);
              }}
              value={roomInput}
              type="text"
              id="rooms"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your room name"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Start Chat
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
