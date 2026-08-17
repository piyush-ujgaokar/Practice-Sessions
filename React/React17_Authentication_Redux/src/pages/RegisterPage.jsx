import { useAuthHook } from "../hooks/useAuthHook";

const RegisterPage = () => {


    let {register,handleSubmit,errors,registerFormSubmit,navigate} =useAuthHook()



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#171717] p-8 shadow-2xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Create your account to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-5">

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
              required:"name is required"
            })}
              type="text"
              id="username"
              placeholder="Enter your username"
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
              required:"Email is required"
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
              required:"password is required",
              minLength:{
                value:6,
                message:"Password must have 6 char"
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
          <button
            onClick={()=>navigate('/auth/login')}
            className="font-medium cursor-pointer text-purple-400 transition hover:text-purple-300"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;