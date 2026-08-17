import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {addUser} from '../features/authSlice'

export const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [registerUser, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );
  const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem("loginUser")));

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();




 const registerFormSubmit = (data) => {
    console.log(registerUser);
    
    let arr = [...registerUser, { ...data, id: nanoid() }];
    setRegisterUser(arr);
    {toast.success("Registered Successfully")}
    localStorage.setItem("registerUsers", JSON.stringify(arr));

    reset();
  };

  const loginFormSubmit = (data) => {
    console.log(registerUser);

    let user=registerUser.find((val)=>{
      return val.email === data.email && val.password === data.password
    })

    if(!user){
      {toast.error("Invalid credentials !")}
      console.log(user);
      return 
    }
    
    dispatch(addUser(user))
    localStorage.setItem("loginUser",JSON.stringify(user))
    {toast.success("Login Successfully")}
    navigate('/')
    reset()
    
  };
 

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    loginFormSubmit,
    registerFormSubmit,
    loginUser,
    setLoginUser,
    registerUser,
    setRegisterUser,
  };
};
