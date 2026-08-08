
const NavBar = ({setToggle}) => {
  return (
    <div className="p-5 bg-gray-700 h-20 items-center justify-between flex rounded">
        <div className="text-xl">LOGO</div>
        <div className="flex items-center gap-5 text-xl cursor-pointer">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <h2>Products</h2>
        </div>
        <button onClick={()=>setToggle((prev)=>!prev)} className="text-xl px-3 py-2 rounded-xl cursor-pointer bg-amber-700">Create Product</button>
    </div>
  )
}

export default NavBar