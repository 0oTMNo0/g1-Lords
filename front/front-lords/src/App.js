import { Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

import ChatProvider from "./context/context";

function App() {
  return (
    <div className="w-96 bg-slate-500 flex flex-col rounded mx-auto">
      <div className="text-white w-full border-b-2 p-4 text-center">
        <p>Lords messager</p>
      </div>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:room" element={<Chat />} />
        </Routes>
      </ChatProvider>
    </div>
  );
}

export default App;
