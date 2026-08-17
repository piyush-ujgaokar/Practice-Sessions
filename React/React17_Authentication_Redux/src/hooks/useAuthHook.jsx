import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const useAuthHook = () => {
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const loginFormSubmit=(data)=>{}
  const registerFormSubmit=(data)=>{}


  return {
    navigate,
    register,handleSubmit,errors,loginFormSubmit,registerFormSubmit
  };
};
