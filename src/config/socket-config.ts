import { Server } from "http";
import { Server as SocketIOServer } from "socket.io";

export const socketConfig = (server: Server): { io: SocketIOServer } => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  return { io };
};
