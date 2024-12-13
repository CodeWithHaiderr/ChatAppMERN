import userGetAllUsers from "../../context/userGetAllUsers";
import useConversation from "../../stateManage/useConversation";
import User from "./User";

function Users() {
    const [allUsers, loading] = userGetAllUsers();

    // Check if `allUsers.filteredUsers` exists and is an array
    const users = allUsers?.filteredUsers || []; 

    console.log("All users in Users.jsx ", users);

    return (
        <div
            style={{ maxHeight: "calc(84vh)" }}
            className="overflow-y-auto bg-gray-800 rounded-md py-4"
        >
            {users.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </div>
    );
}

export default Users;
