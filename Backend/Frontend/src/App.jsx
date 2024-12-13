import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./home/leftTab/Logout";
import LeftSide from "./home/leftTab/LeftTab";
import RigthTab from "./home/rightTab/RigthTab";
import { useAuth } from "./context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const [authUser, setAuthUser] = useAuth(); // Correctly destructuring the object
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout></Logout>
                <LeftSide></LeftSide>
                <RigthTab></RigthTab>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
        <Toaster/>
    </>
  );
}

export default App;
