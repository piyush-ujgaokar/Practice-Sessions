import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginUserApi } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/authActions";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const loginFormSubmit=async(data)=>{
    console.log(data);
try {
    dispatch(loginUserAction(data))    
  
} catch (error) {
    console.log("Login Form Submit Error",error);
    
}

    reset()
  }

  const registerFormSubmit=(data)=>{
    console.log(data);
   
    
    reset()
  }





  return { navigate,register,handleSubmit,registerFormSubmit,loginFormSubmit,errors };
};
