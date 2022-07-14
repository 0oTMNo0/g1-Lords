const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("join", (data) => {
    console.log(data);
    socket.join(data.room);
    socket.broadcast.to(data.room).emit("newUser", data);
  });
  socket.on("sendMessage", (data) => {
    console.log(data);
    socket.broadcast.to(data.room).emit("newMessage", data);
  });
});

server.listen(5000, () => {
  console.log("Server listening at port 5000");
});
