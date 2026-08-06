import { useState } from "react"


const App = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  })


  console.log("Form Data--->", formData);


  const handleChange=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }



  return (
    <div className="p-10 h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col w-[30%] gap-3 bg-gray-800 p-6 rounded-2xl " action="">
        <input onChange={handleChange} name="name" className="p-2 text-[1vw] border rounded" type="text" placeholder="Enter Your name" />
        <input onChange={handleChange} name="email" className="p-2 text-[1vw] border rounded" type="text" placeholder="Enter Your Email" />
        <input onChange={handleChange} name="password" className="p-2 text-[1vw] border rounded" type="text" placeholder="Enter Your Password" />
        <input onChange={handleChange} name="contact" className="p-2 text-[1vw] border rounded" type="text" placeholder="Enter Your Password" />

        <button className="p-2 bg-green-800 rounded-2xl cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default App