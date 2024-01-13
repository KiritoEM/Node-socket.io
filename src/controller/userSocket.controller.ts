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
    userId ? delete this.connectedUsers[userId] : null;
  }

  static getSocketByUserId(userId: string): Socket | undefined {
    const userSocket = userId ? this.connectedUsers[userId] : undefined;
    if (!userSocket) {
      console.log(`Aucun utilisateur trouvé avec l'ID : ${userId}`);
    }
    return userSocket;
  }
}

export default userSocket;
