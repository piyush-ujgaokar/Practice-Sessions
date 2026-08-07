import { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import Productcard from "./components/Productcard";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(false);

  console.log(userData);

  return (
    <div className="p-2 ">
      <NavBar setToggle={setToggle} />
      {toggle ? (
        <Form setUserData={setUserData} setToggle={setToggle} />
      ) : (
        <div className="flex flex-wrap gap-12">
        {userData.map((elem)=>{
          return <Productcard userdata={elem} />
        })}
        </div>
      )}
    </div>
  );
};

export default App;
