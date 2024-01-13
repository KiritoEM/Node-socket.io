import { socketConfig } from "../config/socket-config";

class sendMessageController {
  static async configureSocket(server: any) {
    const { io } = socketConfig(server);

    io.on("connection", (socket) => {
      console.log(`Utilisateur connecté avec l'ID : ${socket.id}`);
    });
  }
}

export default sendMessageController;
