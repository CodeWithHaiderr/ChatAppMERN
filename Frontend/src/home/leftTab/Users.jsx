
function Users() {
    // Users data array
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 3, name: "Michael Brown", email: "michael.brown@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 4, name: "Emily Davis", email: "emily.davis@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 5, name: "Sarah Wilson", email: "sarah.wilson@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 6, name: "Chris Johnson", email: "chris.johnson@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 7, name: "Laura Martinez", email: "laura.martinez@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 8, name: "Chris Johnson", email: "chris.johnson@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 9, name: "Laura Martinez", email: "laura.martinez@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 10, name: "Chris Johnson", email: "chris.johnson@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
        { id: 11, name: "Laura Martinez", email: "laura.martinez@example.com", avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },

    ];

    return (
        <div style={{maxHeight:"calc(84vh)"}} className="overflow-y-auto bg-gray-800 rounded-md py-4">
            <div className="flex flex-col space-y-2 px-4">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="flex space-x-4 hover:bg-slate-700 cursor-pointer p-2 rounded-md"
                    >
                        <div className="avatar online">
                            <div className="w-14 rounded-full">
                                <img src={user.avatar} alt={`${user.name}'s Avatar`} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-white text-sm font-bold">{user.name}</h1>
                            <span className="text-white text-sm">{user.email}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
