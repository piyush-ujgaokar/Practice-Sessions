import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

const MainProtected = () => {

 const {isAuthenticated,user,isLoading}=useSelector((store)=>store.auth)

 if(isLoading) return <h1>Loading.....</h1>

    if(!user){
        return <Navigate to={'/auth/login'}/>
    }


  return <Outlet/>
}

export default MainProtected;
