import Messages from "./Messages"
import TypeTextBar from "./TypeTextBar"
import UserChat from "./UserChat"


function RigthTab() {
  return (
    <>
    <div className="w-[70%]">
        <UserChat></UserChat>
        <div className="overflow-y-auto" style={{ maxHeight: "calc(92vh - 16vh)" }}>
        <Messages></Messages>
        </div>
        <TypeTextBar></TypeTextBar>
    </div>
    </>
  )
}

export default RigthTab