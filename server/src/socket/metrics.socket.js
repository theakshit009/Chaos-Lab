import { Server } from "socket.io";
import metrics from "../services/metrics.services.js";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  setInterval(() => {
    io.emit("metrics:update", metrics.snapshot());
  }, 2000);
};
