/* eslint-disable prettier/prettier */
import { join } from "path";
import express from "express";
import logger from "morgan";
import socketIO from "socket.io";
import socketController from "./socketController";
import events from "./event";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) =>
    res.render("home", { events: JSON.stringify(events) })
);

const handleListen = () => console.log(`💜 Server http://localhost:${PORT}`);

const server = app.listen(PORT, handleListen);

const io = socketIO.listen(server);

let sockets = [];

io.on("connection", (socket) => {
    socketController(socket);
});
