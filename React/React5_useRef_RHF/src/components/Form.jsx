import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(errors);
  


  const formSubmit=(data)=>{
    console.log(data);

  }


  return (
    <div>
      <h1 className="text-5xl ">Ref</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col w-[30%] mt-10 gap-10">
        <input
        {...register("name",{
            required:"Name is Required",
        })}
          className="text-[1vw] p-2 rounded-xl border"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p>{errors.name.message}</p> }
        <input
        {...register("email",{
            required:"Email is required",
            pattern:{
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:"Email is Not Valid"
            }
        })}
          className="text-[1vw] p-2 rounded-xl border"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        
        <input
        {...register("password",{
            required:"password is required",
            minLength:{
                value:6,
                message:"Password must have 6 Char"
            },
        })}
          className="text-[1vw] p-2 rounded-xl border"
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button className="text-[1vw] bg-green-700 p-3 rounded cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
