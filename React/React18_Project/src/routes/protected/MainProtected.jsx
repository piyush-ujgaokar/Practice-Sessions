import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const MainProtected = () => {

    const {user}=useSelector((store)=>store.auth)

    if(!user){
        return <Navigate to={'/auth/login'}/>
    }


  return <Outlet/>
}

export default MainProtected;
