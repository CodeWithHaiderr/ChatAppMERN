import Message from "./Message.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import { useRef } from "react";
import { useEffect } from "react";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

function Messages() {
  const { messages, loading } = useGetMessage();
  useGetSocketMessage();
  console.log("Messages:", messages);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({
          behavior : "smooth"
        });
      }
    }, 100);
  }, [messages])

  return (
    <div style={{ minHeight: "calc(92vh - 16vh)" }}>
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message  message={message} />
            </div>

        ))
      ) : (
        <div>
          <p className="text-center font-bold mt-[20%] text-gray-700">
            Start Conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
