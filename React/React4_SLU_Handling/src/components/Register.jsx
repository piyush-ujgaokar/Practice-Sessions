import { useState } from "react"

const Register = ({setToggle}) => {

  const [formData, setFormData] = useState({
   
  })
const [users, setUsers] = useState([])

console.log(users);


const handleSubmit=(e)=>{
  e.preventDefault()
  setUsers([...users, formData])

  setFormData({
    name:"",
    email:"",
    password:""
  })

  }
  
  const handleChange=(e)=>{
    let {name,value}=e.target
    setFormData({...formData, [name]:value})
  }
  console.log(formData);
  

  return (
    <form onSubmit={handleSubmit} className="p-10 bg-gray-700 rounded-2xl flex flex-col  w-[30%] gap-5 " action="">
        <h1 className="text-2xl ">Register</h1>
        <input required value={formData.name} name="name" onChange={handleChange} className="p-2 border rounded text-[1.2vw]" type="text" placeholder="Enter Your Name" />
        <input required value={formData.email} name="email" onChange={handleChange} className="p-2 border rounded text-[1.2vw]" type="text" placeholder="Enter Your Email" />
        <input required value={formData.password} name="password" onChange={handleChange} className="p-2 border rounded text-[1.2vw]" type="password" placeholder="Enter your Password" />

        <button className="p-2 bg-blue-700 rounded-2xl text-xl cursor-pointer">Register</button>

        <p>Already have An Acc?{" "} <span onClick={()=>{
            setToggle((prev)=>!prev)
        }} className="text-blue-600 cursor-pointer">Login</span></p>
    </form>
  )
}

export default Register