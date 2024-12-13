import { CgLogOut } from "react-icons/cg";
import axios from "axios";
import {useState} from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout Successful")
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <div className="w-[3%] flex flex-col justify-end">
          
            <button>
            <CgLogOut className="text-5xl p-2 hover:bg-gray-400 cursor-pointer rounded-lg" onClick={handleLogout}/>
            </button>
            
      </div>
    )
  }
  
  export default Logout