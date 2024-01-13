import { socketConfig } from "../config/socket-config";
import { Server } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import socketConnexion from "./socketConnexion.controller";

const socket = (server: Server) => {
  const { io }: { io: SocketIOServer } = socketConfig(server);

  io.on("connection", async (socket: any) => {
    await socketConnexion.userConnected(socket);
  });
};

export default socket;
