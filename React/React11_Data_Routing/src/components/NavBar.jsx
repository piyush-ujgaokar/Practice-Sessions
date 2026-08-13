import {NavLink} from 'react-router'
const NavBar = () => {
  return (
    <div className='flex rounded-2xl bg-black text-[1.2vw] text-white p-5 justify-between items-center'>
      <h1>Logo</h1>
      <div className='flex cursor-pointer items-center gap-5'>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={'/cart'}>Cart</NavLink>
      </div>
      <h4>Login</h4>
    </div>
  );
}

export default NavBar;
