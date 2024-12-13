import React from "react";

function Message({ message }) {
    const authUser = JSON.parse(localStorage.getItem("messenger"));
    // console.log("auth userrrrrrrr",authUser.user._id);
    // console.log("Message.senderId issssss",message.senderId); 
    const itsme = message.senderId === authUser.user._id;
    const chatName = itsme ? "chat-end" : "chat-start";
    const chatColor = itsme ? "bg-blue-400" : "";
    const createdAt = new Date(message.createdAt)
    const formattedTime = createdAt.toLocaleDateString([], {
        hour: "2-digit",
        minute: "2-digit",
    })

    
  return (
    <>
      <div className="p-2">
        <div className={`chat ${chatName} `}>
          <div className={`chat-bubble text-white ${chatColor}`}> 
          {message.message}
          </div>
            <div>{formattedTime}</div>
        </div>
      </div>
    </>
  );
}

export default Message;
