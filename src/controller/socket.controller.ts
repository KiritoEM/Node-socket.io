import { socketConfig } from "../config/socket-config";
import { Server } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import userSocket from "./userSocket.controller";

const socket = (server: Server) => {
  const { io }: { io: SocketIOServer } = socketConfig(server);

  io.on("connection", async (socket: Socket) => {
    await userSocket.userConnected(socket);

    socket.on("disconnect", () => {
      userSocket.handleDisconnect(socket);
    });
  });
};

export default socket;
