import { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Productcard from "./components/Productcard";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(userData);

  const deleteuser=(id)=>{
    setUserData((prev)=>{
     return prev.filter((user)=> user.id !==id)
    })
  }

  return (
    <div className="p-2 ">
      <NavBar setToggle={setToggle} />
      {toggle ? (
        <Form setUserData={setUserData} setToggle={setToggle} />
      ) : (
        <div className="flex flex-wrap gap-12">
        {userData.map((elem,idx)=>{
          return <Productcard key={idx} userdata={elem} deleteUser={deleteuser}/>
        })} 
        </div>
      )}
    </div>
  );
};

export default App;
