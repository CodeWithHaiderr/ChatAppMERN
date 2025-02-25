import React from "react";
import useConversation from "../../stateManage/useConversation.js";
import {useSocketContext} from "../../context/SocketContext.jsx";

function User({user}) {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket, onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);


    return (
        <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
             onClick={() => setSelectedConversation(user)}>
            <div className="flex space-x-4 px-4 py-3 hover:bg-slate-600 duration-=200">
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                    </div>
                </div>
                <div>
                    <h1 className="text-white text-sm mt-1">{user.name}</h1>
                    <span className="text-white text-xs">{user.email}</span>
                </div>
            </div>
        </div>
    );
}

export default User;
