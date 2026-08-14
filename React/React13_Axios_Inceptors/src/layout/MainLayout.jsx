import {Outlet} from "react-router"
import NavBar from "../components/NavBar";
const MainLayout = () => {
  return (
    <div className="h-screen bg-black flex p-3 gap-5">
        <NavBar/>
      <Outlet/>
    </div>
  );
}

export default MainLayout;
