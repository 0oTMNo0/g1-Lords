import React from "react";
import './App.css';
import {Routes, Route} from "react-router"
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="w-96 mx-auto bg-slate-600">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
