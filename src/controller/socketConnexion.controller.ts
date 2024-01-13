import { Socket } from "socket.io";

class socketConnexion {
  static async userConnected(socket: Socket) {
    console.log(`Utilisateur connecté avec l'ID : ${socket.id}`);
  }

  static handleDisconnect(socket: Socket) {
    console.log(`Utilisateur déconnecté avec l'ID : ${socket.id}`);
  }
}

export default socketConnexion;
