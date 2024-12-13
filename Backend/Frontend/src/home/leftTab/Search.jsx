import { FaSearch } from "react-icons/fa";
import {useState} from "react";
import userGetAllUsers from "../../context/userGetAllUsers.jsx";
import useConversation from "../../stateManage/useConversation.js";
import toast from "react-hot-toast";


function Search() {
    const [search, setSearch] = useState("");
    const [allUsers] = userGetAllUsers();
    const { setSelectedConversation } = useConversation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search.trim()) return;

        const conversation = allUsers.find((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            toast.error("User not found");
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch />
                </label>
            </form>
        </div>
    );
}
export  default Search;