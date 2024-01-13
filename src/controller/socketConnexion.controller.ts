class socketConnexion {
  static async userConnected(socket: any) {
    console.log(`Utilisateur connecté avec l'ID : ${socket.id}`);
  }
}

export default socketConnexion;
