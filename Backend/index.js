import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {app, server, io} from "./SocketIO/server.js";
import path from "path";


app.use(express.json());
app.use(cors());
app.use(cookieParser());

dotenv.config();

const PORT = process.env.PORT || 3000
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("MongoDB Connected!");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// DEPLOYMENT CODE

if (process.env.NODE_ENV === 'production') {
  const dirPath = path.resolve();
  app.use(express.static("./Frontend/dist"));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(dirPath, './Frontend/dist', 'index.html'));
  });
}


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})