import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/AuthContext";

const ProtectedRoutes = () => {

    let {loginData}=useContext(Auth)

    if(!loginData){
        return <Navigate to={'/auth/login'}/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default ProtectedRoutes;
