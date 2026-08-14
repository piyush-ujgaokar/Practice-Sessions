
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className=' h-full flex flex-col bg-gray-900 p-5 w-[15%]'>
        <h1 className='text-3xl font-bold'>Fab Wear</h1>

        <div className='h-full  flex flex-col items-end pt-30 gap-10'>
            <div>
                <NavLink to={"/"} className='text-2xl cursor-pointer border-b border-b-amber-800'>Home</NavLink>
            </div>
            <div>
                <NavLink to={"/users"} className='text-2xl cursor-pointer border-b border-b-amber-800'>Users</NavLink>
            </div>
            <div>
                <NavLink to={"/products"} className='text-2xl cursor-pointer border-b border-b-amber-800'>Products</NavLink>
            </div>
        </div>

        <button className='text-2xl bg-red-700 py-2 cursor-pointer px-4 rounded-xl'>LogOut</button>
    </div>
  );
}

export default NavBar;
