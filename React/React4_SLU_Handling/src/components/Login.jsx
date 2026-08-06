
const Login = ({setToggle}) => {

  return (
    <form className="p-10 bg-gray-700 rounded-2xl flex flex-col  w-[30%] gap-5 " action="">
        <h1 className="text-2xl ">Login</h1>
        <input className="p-2 border rounded text-[1.2vw]" type="text" placeholder="Enter Your Email" />
        <input className="p-2 border rounded text-[1.2vw]" type="text" placeholder="Enter your Password" />

        <button className="p-2 bg-blue-700 rounded-2xl text-xl cursor-pointer">Login</button>

        <p>Don't have An Acc?{" "} <span onClick={()=>{
            setToggle((prev)=>!prev)
        }} className="text-blue-600 cursor-pointer">Register</span></p>
    </form>
  )
}

export default Login