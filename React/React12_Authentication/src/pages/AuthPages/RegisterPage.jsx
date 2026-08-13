import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../../context/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { registeredUser, setRegisteredUser } = useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Register data --->", data);
    let arr=[...registeredUser, data]
    setRegisteredUser(arr);
    localStorage.setItem("registerUsers",JSON.stringify(arr));
    reset();

    navigate("/");
  };

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
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-5"
        >

          {/* Username */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Username
            </label>

            <input
              {...register("name", {
                required: "Username is required",

                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },

                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message:
                    "Username can only contain letters, numbers and _",
                },
              })}
              type="text"
              id="name"
              placeholder="Enter your username"
              className={`w-full rounded-lg border bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-500 transition
                ${
                  errors.name
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                }`}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
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
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full rounded-lg border bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-500 transition
                ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
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
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`w-full rounded-lg border bg-[#0f0f0f] px-4 py-3 text-white outline-none placeholder:text-gray-500 transition
                ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                    : "border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                }`}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
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
            onClick={() => navigate("/")}
            className="cursor-pointer font-medium text-purple-400 transition hover:text-purple-300"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;