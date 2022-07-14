const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = require("socket.io")(server);

let id = 0;
function idGenerator() {
  return id++;
}

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("join", (data) => {
    console.log(data);
    socket.join(data.room);
    socket.broadcast.to(data.room).emit("newUser", {
      ...data,
      type: "newUser",
      date: new Date().toLocaleString(),
      id: idGenerator(),
    });
  });
  socket.on("sendMessage", (data) => {
    console.log(data);
    io.to(data.room).emit("newMessage", {
      ...data,
      type: "newMessage",
      date: new Date().toLocaleString(),
      id: idGenerator(),
    });
  });
});

server.listen(5050, () => {
  console.log("Server listening at port 5050");
});
