import { useForm } from "react-hook-form";

const Form = ({ setUserData, setToggle, userData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    let newUser=[...userData,data]
    setUserData(newUser);
    localStorage.setItem("users",JSON.stringify(newUser))

    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col w-[30%] p-7 rounded-xl bg-gray-800 gap-5"
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="px-4 outline-none py-2 text-xl border rounded-xl"
          type="text"
          placeholder="Enter User name"
        />
        {errors.name && (
          <p className="text-s text-red-700">{errors.name.message}</p>
        )}
        <input
          {...register("role", {
            required: "Role is required",
          })}
          className="px-4 outline-none py-2 text-xl border rounded-xl"
          type="text"
          placeholder="Enter Role"
        />
        {errors.role && (
          <p className="text-s text-red-700">{errors.role.message}</p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email is Not Valid",
            },
          })}
          className="px-4 outline-none py-2 text-xl border rounded-xl"
          type="text"
          placeholder="Enter Email"
        />
        {errors.email && (
          <p className="text-s text-red-700">{errors.email.message}</p>
        )}
        <input
          {...register("contact", {
            required: "Contact is required",
            minLength: {
              value: 10,
              message: "Minimum 10 Digits Are Required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 Digit Required ",
            },
          })}
          className="px-4 outline-none py-2 text-xl border rounded-xl"
          type="number"
          placeholder="Enter Contact number"
        />
        {errors.contact && (
          <p className="text-s text-red-700">{errors.contact.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image Url is required",
          })}
          className="px-4 outline-none py-2 text-xl border rounded-xl"
          type="url"
          placeholder="Enter Image url"
        />
        {errors.image && (
          <p className="text-s text-red-700">{errors.image.message}</p>
        )}
        <button className="text-xl cursor-pointer bg-pink-700 rounded-xl px-4 py-2 ">
          Create user
        </button>
      </form>
    </div>
  );
};

export default Form;
