import { Socket } from "socket.io";

class userSocket {
  static connectedUsers: Record<string, Socket> = {};

  static async userConnected(socket: Socket) {
    console.log(`Utilisateur connecté avec l'ID : ${socket.id}`);
    const userId = socket.id;
    userSocket.connectedUsers[userId] = socket;
  }

  static handleDisconnect(socket: Socket) {
    console.log(`Utilisateur déconnecté avec l'ID : ${socket.id}`);
    const userId = socket.id;
    delete userSocket.connectedUsers[userId];
  }

  static getSocketByUserId(userId: string): Socket | undefined {
    return userSocket.connectedUsers[userId];
  }
}

export default userSocket;
