
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const ProtextedRoutes = () => {

    let {user}=useSelector((store)=>store.auth)

    if(user){
      return <Navigate to={'/'}/>
    }

  return (
    <Outlet/>
  );
}

export default ProtextedRoutes;
