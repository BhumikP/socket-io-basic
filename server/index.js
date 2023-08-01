const { Server } = require("socket.io");

const io = new Server(3001, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome", "Welcome event triggered here from server channel");

  socket.on("msg", (data) => {
    console.log("msg from client::", data);
  });
});
