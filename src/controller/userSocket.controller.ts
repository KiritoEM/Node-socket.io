import { Socket } from "socket.io";

class userSocket {
  //de clé string et de valeur socket
  static connectedUsers: Record<string, Socket> = {};

  static async userConnected(socket: Socket) {
    console.log(`Utilisateur connecté avec l'ID : ${socket.id}`);
    const userId = socket.id;
    this.connectedUsers[userId] = socket;
  }

  static handleDisconnect(socket: Socket) {
    console.log(`Utilisateur déconnecté avec l'ID : ${socket.id}`);
    const userId = socket.id;
    delete this.connectedUsers[userId];
  }

  static getSocketByUserId(userId: string): Socket | undefined {
    return this.connectedUsers[userId];
  }
}

export default userSocket;
