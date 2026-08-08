import { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Productcard from "./components/Productcard";

const App = () => {
  const [userData, setUserData] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || []
  });
  const [toggle, setToggle] = useState(false);

  console.log(userData);

  return (
    <div className="p-2 ">
      <NavBar setToggle={setToggle} />
      {toggle ? (
        <Form userData={userData} setUserData={setUserData} setToggle={setToggle} />
      ) : (
        <div className="flex flex-wrap gap-12">
        {userData.map((elem,idx)=>{
          return <Productcard key={idx} userdata={elem}/>
        })} 
        </div>
      )}
    </div>
  );
};

export default App;
