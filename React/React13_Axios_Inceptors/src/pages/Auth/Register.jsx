import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  let navigate = useNavigate();

  let {registerData,setRegisterData}=useContext(Auth)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:"onChange"
  });


const formSubmit=(data)=>{
  console.log(data);

  let AlreadyExists=registerData.find((user)=>{
    return data.email === user.email
  })

  if(AlreadyExists){
    {toast.error("Email already Exists")}
    reset()
    return 
  }


  let arr=[...registerData,data]
  setRegisterData(arr)
  {toast.success("Successfully registered")}
  console.log(registerData);
  navigate('/auth/login')
  localStorage.setItem("registerUsers",JSON.stringify(arr))

  reset()
  
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#171717] p-8 shadow-2xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-sm text-gray-400">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Username
            </label>

            <input
            {...register("name",{
              required:"Name is Required"
            })}
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="w-full rounded-lg border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
            {errors.name && <p className="text-red-700">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
            {...register("email",{
              required:"Email is required",
              pattern:{
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"Enter valid Email"
              }
            })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
            {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <input
            {...register("password",{
              required:"Password is required",
              minLength:{
                value:6,
                message:"Password Must have 6 char"
              }
            })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-500 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
            {errors.password && <p className="text-red-700">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            className="font-medium cursor-pointer text-purple-400 transition hover:text-purple-300"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
