import { socketConfig } from "../config/socket-config";
import { Server } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import socketConnexion from "./socketConnexion.controller";

const socket = (server: Server) => {
  const { io }: { io: SocketIOServer } = socketConfig(server);

  io.on("connection", async (socket: Socket) => {
    await socketConnexion.userConnected(socket);

    socket.on("disconnect", () => {
      socketConnexion.handleDisconnect(socket);
    });
  });
};

export default socket;
