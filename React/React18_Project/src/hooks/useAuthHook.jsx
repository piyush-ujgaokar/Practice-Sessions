import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginUsers")),
  );

  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );

  const dispatch=useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();

  const loginSubmit = (data) => {

    const user=registerData.find((val)=>{
        return val.email===data.email && val.password===data.password
    })

    if(!user){
        toast.error("Invalid Credentials")
        return
    }
  
    setLoginData(user);
    toast.success("Successfully Login")
    dispatch(addUser(user)) 
    navigate('/')
    localStorage.setItem("loginUser", JSON.stringify(user));

    reset();

  };

  const registerSubmit = (data) => {
 
    let userExists=registerData.find((val)=>{
        return val.email===data.email
    })

    if(userExists){
        toast.error("User Already Exists")

        return
    }

    let arr = [...registerData, data];
    setRegisterData(arr);
    toast.success("Successfully Register")
    navigate('/auth/login')
    localStorage.setItem("registerUsers", JSON.stringify(arr));




    reset();
  };

  return {
    loginData,
    setLoginData,
    registerData,
    setRegisterData,
    register,
    handleSubmit,
    errors,
    registerSubmit,
    loginSubmit,
    navigate,
  };
};
