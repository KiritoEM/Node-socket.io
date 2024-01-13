import { Socket } from "socket.io";

class socketMessage {
  static handleMessage(socket: Socket, data: { to: string; message: string }) {
    console.log(
      `Message reçu de ${socket.id} vers ${data.to} : ${data.message}`
    );
    // const recipientSocket = UserController.getSocketByUserId(data.to);
    // if (recipientSocket) {
    //   recipientSocket.emit("message", {
    //     from: socket.id,
    //     message: data.message,
    //   });
    // } else {
    //   console.log(`Utilisateur ${data.to} introuvable.`);
    // }
  }
}

export default socketMessage;
