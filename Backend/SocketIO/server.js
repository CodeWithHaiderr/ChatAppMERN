import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://chatappmern-7jft.onrender.com",
        methods: ["GET", "POST"]
    }
});

export const getRecieverSocketId = (recieverId) => {
    return users[recieverId];
}

const users = {}

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
    const userId = socket.handshake.query.userId;

    if(userId){
        users[userId] = socket.id;
        console.log("userzzzzz", users);
        
    }
    io.emit("getonline", Object.keys(users));

    socket.on("disconnect", () => {
        console.log("Client disconnected", socket.id);
        delete users[userId]
        io.emit("getOnline", Object.keys(users));
    })

})

export { app, io, server } 