import { socketConfig } from "../config/socket-config";
import { Server } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import userSocket from "./userSocket.controller";
import socketMessage from "./socketMessage.controller";

const socket = (server: Server) => {
  const { io }: { io: SocketIOServer } = socketConfig(server);

  io.on("connection", async (socket: Socket) => {
    await userSocket.userConnected(socket);

    socket.on("message", (data) => {
      socketMessage.handleMessage(socket, data);
    });

    socket.on("disconnect", () => {
      userSocket.handleDisconnect(socket);
    });
  });
};

export default socket;
