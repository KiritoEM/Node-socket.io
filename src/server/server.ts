import app from "./app";
import http from "http";

const server = http.createServer(app);

export { server };
