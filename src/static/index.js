// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("Hello", () => console.log("Somebody joined"));

function sendMessage(message) {
    socket.emit("newMessage", { message });
    console.log(`You: ${message}`);
}

function setNickname(nickname) {
    socket.emit("setNickname", { nickname });
}

function handleMessageNotif(data) {
    const { message, nickname } = data;
    console.log(`${nickname}: ${message}`);
}

socket.on("messageNotif", handleMessageNotif);
