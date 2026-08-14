import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useAuth = () => {
  let { registerData, loginData, setLoginData, setRegisterData } =
    useContext(Auth);

  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const loginFormSubmit = (data) => {
    let isUserExists = registerData.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (!isUserExists) {
      {
        toast.error("Invalid Credentials");
      }
      reset();
      return;
    }

    navigate("/");
    setLoginData(data);
    {
      toast.success(`Welcome !`);
    }
    localStorage.setItem("loginUsers", JSON.stringify(data));

    console.log(loginData);

    reset;
  };

  const registerFormSubmit = (data) => {
    console.log(data);

    let AlreadyExists = registerData.find((user) => {
      return data.email === user.email;
    });

    if (AlreadyExists) {
      {
        toast.error("Email already Exists");
      }
      reset();
      return;
    }

    let arr = [...registerData, data];
    setRegisterData(arr);
    {
      toast.success("Successfully registered");
    }
    console.log(registerData);
    navigate("/auth/login");
    localStorage.setItem("registerUsers", JSON.stringify(arr));

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    loginFormSubmit,
    navigate,
    registerFormSubmit,
  };
};
