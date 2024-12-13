import mongoose from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import {getRecieverSocketId} from "../SocketIO/server.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id; // Current logged-in user
        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, recieverId]}
        });
        if (!conversation) {
            // Create a new conversation if it doesn't exist
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            });
        }

        // Create a new message and associate it with the conversation
        const newMessage = new Message({
            senderId,
            recieverId,
            message
        });

        // Add the new message to the conversation's message array
        conversation.message.push(newMessage._id);

        // Save both the conversation and the message concurrently
        await Promise.all([conversation.save(), newMessage.save()]);
        const recieverSocketId = getRecieverSocketId(recieverId);

        if (recieverSocketId) {
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json({
            message: "Message sent successfully",
            newMessage
        });
    } catch (error) {
        console.error("Error in sending message:", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const getMessage = async (req, res) => {
    try {
        const chatUser = req.params.id;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, chatUser]},
        }).populate("message");
        if (!conversation) {
            return res.status(201).json({message: "Start conversation"});
        }
        const messages = conversation.message;
        res.status(201).json(messages);
    } catch (error) {
        console.error("Error loading message:", error);
        res.status(500).json({message: "Internal server error"});
    }
}