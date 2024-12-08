import { CgLogOut } from "react-icons/cg";


function Logout() {
    return (
      <div className="w-[3%] flex flex-col justify-end">
          
            <button>
            <CgLogOut className="text-5xl p-2 hover:bg-gray-400 cursor-pointer rounded-lg"/>
            </button>
            
      </div>
    )
  }
  
  export default Logout