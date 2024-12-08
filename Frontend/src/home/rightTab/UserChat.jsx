
function UserChat() {
    return (
        <>
        <div className='pl-3 pt-3 pb-2 h-[12vh] bg-gray-600 hover:bg-gray-900'>
            <div className='flex space-x-4'>
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-lg text-white'>Name</h1>
                        <h1 className='text-sm text-white'>Online</h1>
                    </div>
                
            </div>
        </div>
        </>
    )
}

export default UserChat