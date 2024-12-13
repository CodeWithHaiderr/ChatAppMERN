import useConversation from "../../stateManage/useConversation.js";
import {useSocketContext} from "../../context/SocketContext.jsx";


function UserChat() {
    const {selectedConversation} = useConversation();
    const {onlineUsers} = useSocketContext();
    const getOnlineUserStatus = (userId) => {
        return onlineUsers.includes(userId)? "Online" : "Offline";
    }

    return (
        <>
        <div className='pl-3 pt-3 pb-2 h-[12vh] bg-gray-600 hover:bg-gray-900'>
            <div className='flex space-x-4'>
                    {/*<div className={`avatar ${isOnline ? "online" : ""}`}>*/}
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg text-white'>{selectedConversation.name}</h1>
                        <h1 className='text-sm text-white'>{getOnlineUserStatus(selectedConversation._id)}</h1>
                    </div>
                
            </div>
        </div>
        </>
    )
}

export default UserChat