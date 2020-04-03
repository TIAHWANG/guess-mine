import { handleMessageNotif } from "./chat";

const socket = io("/");

socket.on("Hello", () => console.log("Somebody joined"));

function sendMessage(message) {
    socket.emit("newMessage", { message });
    console.log(`You: ${message}`);
}

function setNickname(nickname) {
    socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
