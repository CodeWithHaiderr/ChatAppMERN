import Search from "./Search"
import Users from "./Users"

function LeftTab() {
  return (
    <div className="w-[30%] bg-gray-800">
      <div className="px-1">
      <Search></Search>
      <hr></hr>
      <Users></Users>
      </div>
      
    </div>
  )
}

export default LeftTab