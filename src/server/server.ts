import app from "./app";
import http from "http";
import sendMessageController from "../controller/sendMessage.controller";

const server = http.createServer(app);
const io = sendMessageController.configureSocket(server);

export { server, io };
