import { socketConfig } from "../config/socket-config";
import { Server } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import userSocket from "./userSocket.controller";
import socketMessage from "./message.controller";
import socketRoom from "./room.controller";

const socket = (server: Server) => {
  const { io }: { io: SocketIOServer } = socketConfig(server);

  io.on("connection", async (socket: Socket) => {
    await userSocket.userConnected(socket);

    socket.on("message", (data) => {
      socketMessage.handleMessage(socket, data);
    });

    socket.on("createRoom", (roomName) => {
      socketRoom.createRoom(socket, roomName);
    });

    socket.on("messageRoom", (data) => {
      socketRoom.handleMessage(socket, data);
    });

    socket.on("joinRoom", (roomName) => {
      socketRoom.joinRoom(socket, roomName);
    });

    socket.on("leaveRoom", (roomName) => {
      socketRoom.leaveRoom(socket, roomName);
    });

    socket.on("disconnect", () => {
      userSocket.handleDisconnect(socket);
    });
  });
};

export default socket;
