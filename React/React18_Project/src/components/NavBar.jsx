import { NavLink } from 'react-router';
import {LogOut} from 'lucide-react';
const NavBar = () => {
  return (
    <div className='flex bg-gray-800 justify-between items-center text-xl p-4 rounded-xl'>
      <h1>Xhancy-Ecomm</h1>

      <div className='flex items-center gap-10'>
        <NavLink className={({isActive})=> isActive ? "text-amber-500 border-b border-amber-600":"text-white"} to={'/'}>Home</NavLink>
        <NavLink  className={({isActive})=> isActive ? "text-amber-500 border-b border-amber-600":"text-white"} to={'/shop'}>Shop</NavLink>
        <NavLink  className={({isActive})=> isActive ? "text-amber-500 border-b border-amber-600":"text-white"} to={'/about'}>About</NavLink>
      </div>

      <div className='flex items-center gap-9'>
        <h2>Hey, Piyush</h2>
        <button className=' bg-green-800 text-[1.3vw] px-5 rounded-xl cursor-pointer'>Cart</button>
        <LogOut className='cursor-pointer' />
      </div>
    </div>
  );
}

export default NavBar;
