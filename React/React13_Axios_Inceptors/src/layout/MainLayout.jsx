import {Outlet} from "react-router"
import NavBar from "../components/NavBar";
const MainLayout = () => {
  return (
    <div className="bg-black p-3 gap-5">
         <NavBar/>
     <div className="h-full w-[85%] relative right-[-16%] scrollbar-none p-6 overflow-auto">
       <Outlet/>
     </div>
    </div>
  );
}

export default MainLayout;
