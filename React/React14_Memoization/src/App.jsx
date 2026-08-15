import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  console.log("App is rendering....");

  const [count, setCount] = useState(0)
  const [userName, setUserName] = useState({name:"Piyush",id:123})

  
  


  return (
    <div className="text-5xl">
      <h1>{count}</h1>

      <h2 className="mt-3">{userName.name}</h2>

      <button onClick={()=>{
        setCount(count+1)
      }} className="bg-gray-600 mt-10 rounded p-2 cursor-pointer mb-20 mr-10">Increment</button>

      <button onClick={()=>{
          setUserName({...userName,name:"Ayush"})
      }} className="bg-gray-600 mt-10 rounded p-2 cursor-pointer mb-20">Change Name</button>


      <Home userName={userName}/>
      <About userName={userName}/>

    </div>
  );
}

export default App;
