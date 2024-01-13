import { Socket } from "socket.io";
import userSocket from "./userSocket.controller";

class socketMessage {
  static handleMessage(socket: Socket, data: { to: string; message: string }) {
    console.log(
      `Message reçu de ${socket.id} vers ${data.to} : ${data.message}`
    );

    console.log("Valeur de 'to' :", data.to);
    console.log("Valeur de 'message' :", data.message);

    const recipientSocket = userSocket.getSocketByUserId(data.to);
    if (recipientSocket) {
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
