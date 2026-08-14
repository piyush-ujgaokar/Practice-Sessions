import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const NavBar = () => {

    let navigate=useNavigate()

  return (
    <div className=" h-screen fixed top-0 flex flex-col rounded-xl bg-gray-900 p-5 w-[15vw]">
      <h1 className="text-3xl font-bold">Fab Wear</h1>

      <div className="h-full  flex flex-col items-end pt-30 gap-10">
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-2xl text-amber-500 cursor-pointer border-b border-b-amber-800"
                : "text-2xl cursor-pointer border-b border-b-amber-800"
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              isActive
                ? "text-2xl text-amber-500 cursor-pointer border-b border-b-amber-800"
                : "text-2xl cursor-pointer border-b border-b-amber-800"
            }
          >
            Users
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/products"}
             className={({ isActive }) =>
              isActive
                ? "text-2xl text-amber-500 cursor-pointer border-b border-b-amber-800"
                : "text-2xl cursor-pointer border-b border-b-amber-800"
            }
          >
            Products
          </NavLink>
        </div>
      </div>

      <button onClick={()=>{
        localStorage.removeItem("loginUsers")
        {toast.warn("Logged Out successfully")}
        return navigate("/auth/login")
      }} className="text-2xl bg-red-700 py-2 cursor-pointer px-4 rounded-xl">
        LogOut
      </button>
    </div>
  );
};

export default NavBar;
