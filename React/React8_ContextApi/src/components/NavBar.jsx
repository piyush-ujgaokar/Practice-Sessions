import { useContext } from "react";
import { MyShope } from "../context/ShopeContext";

const NavBar = () => {


    let {setToggle}=useContext(MyShope)


  return (
    <nav className="w-full bg-black text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          Shop<span className="text-gray-400">X</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden cursor-pointer text-2xl items-center gap-8 md:flex">
            <h2 onClick={()=>{
                setToggle(false)
            }} >Home</h2>
            <h2 onClick={()=>{
                setToggle(true)
            }}>Cart</h2>
            <h2>About</h2>
        </div>

        {/* Add Product Button */}
        <button
          className="rounded-lg text-2xl cursor-pointer border border-white px-5 py-2
                     font-medium transition duration-200
                     hover:bg-white hover:text-black
                     active:scale-95"
        >
          + Add Product
        </button>

      </div>
    </nav>
  );
};

export default NavBar;

