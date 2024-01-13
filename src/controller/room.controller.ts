import { Socket } from "socket.io";
import userSocket from "./userSocket.controller";

class socketRoom {
  static createRoom(socket: Socket, roomName: string) {
    if (!socket.rooms.has(roomName)) {
      socket.join(roomName);
      console.log(`Utilisateur ${socket.id} a rejoint la room ${roomName}`);
    } else {
      console.log(
        `L'utilisateur ${socket.id} est déjà dans la room ${roomName}`
      );
    }
  }

  static handleMessage(
    socket: Socket,
    data: { roomName: string; message: string }
  ) {
    const { roomName, message } = data;

    socket.to(roomName).emit("message", {
      from: socket.id,
      message,
    });
    console.log(
      `message du room : ${roomName} , envoyé par l' user : ${socket.id} : ${message}`
    );
  }
  static joinRoom(socket: Socket, roomName: string) {
    socket.join(roomName);
    console.log(`Utilisateur ${socket.id} rejoint le room : ${roomName}`);
  }

  static leaveRoom(socket: Socket, roomName: string) {
    socket.leave(roomName);
    console.log(`Utilisateur ${socket.id} a quitté le room : ${roomName}`);
  }
}

export default socketRoom;
