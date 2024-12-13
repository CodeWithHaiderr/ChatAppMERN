import { useEffect } from "react";
import useConversation from "../../stateManage/useConversation.js";
import Messages from "./Messages.jsx";
import TypeTextBar from "./TypeTextBar.jsx";
import UserChat from "./UserChat.jsx";
import {useAuth} from "../../context/AuthProvider.jsx";

function RigthTab() {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-full bg-slate-950 text-white">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          <UserChat />
          <div
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(92vh - 16vh)" }}
          >
            <Messages />
          </div>
          <TypeTextBar />
        </>
      )}
    </div>
  );
}

export default RigthTab;

const NoChat = () => {
  const [authUser] = useAuth();
  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-white"> Welcome <span>{authUser.user.name}</span>
        <br></br>Select a conversation to start a chat</p>
    </div>
  );
};
