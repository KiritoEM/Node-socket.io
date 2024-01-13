import app from "./app";
import http from "http";
import socket from "../controller/socket.controller";

const server = http.createServer(app);
const io = socket(server);

export { server, io };
