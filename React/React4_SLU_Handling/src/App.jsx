import { useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"

const App = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex items-center justify-center h-screen">
      
      {toggle ? <Login toggle={toggle} setToggle={setToggle}/>:<Register toggle={toggle} setToggle={setToggle}/>}


    </div>
  )
}

export default App