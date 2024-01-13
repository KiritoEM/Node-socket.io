import { Socket } from "socket.io";
import userSocket from "./userSocket.controller";

class socketMessage {
  static async handleMessage(
    socket: Socket,
    data: { to: string; message: string }
  ) {
    console.log(
      `Message reçu de ${socket.id} vers ${data.to} : ${data.message}`
    );

    const recipientSocket = userSocket.getSocketByUserId(data.to);
    if (recipientSocket !== undefined) {
      recipientSocket.emit("message", {
        from: socket.id,
        message: data.message,
      });
    } else {
      console.log(`Utilisateur ${data.to} introuvable.`);
    }
  }
}

export default socketMessage;
