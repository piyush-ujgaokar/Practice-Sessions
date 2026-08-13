import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();

  const { registeredUser, setLoggedInUser } = useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Login data --->", data);

    const user = registeredUser.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    if (!user) {
      {toast.error("Invalid Credentials")}
      return;
    }

    setLoggedInUser(user);

    console.log("Logged in user --->", user);
    {toast.success(`${user.name} Logged in Successfully`)}
    reset();

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#171717] p-8 shadow-2xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-5"
        >

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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="cursor-pointer font-medium text-purple-400 transition hover:text-purple-300"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;