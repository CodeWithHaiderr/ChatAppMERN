import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js";
import { useState } from "react";

function TypeTextBar() {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent empty messages from being sent
    await sendMessages(message);
    setMessage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center h-[12vh]">
          <div className="w-[80%] mx-8">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <button type="submit" className="text-5xl p-2">
            <IoIosSend />
          </button>
        </div>
      </form>
    </>
  );
}

export default TypeTextBar;
