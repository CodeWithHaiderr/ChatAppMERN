import LeftSide from "./home/leftTab/LeftTab";
import Logout from "./home/leftTab/Logout";
import RigthTab from "./home/rightTab/RigthTab";


function App() {
  return (
    <>
    <div className="flex h-screen">

      <Logout></Logout>

    <LeftSide></LeftSide>

    <RigthTab></RigthTab>
    </div>
    </>
  )

}

export default App