import { useForm } from "react-hook-form";

const Form = ({ setStudentCards, studentCards,setUpdatedData, updatedData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values:updatedData || {
      status: "active",
    }
  });

  const formSubmit = (data) => {
  
    if(updatedData){
        setStudentCards((prev)=>{
          return prev.map((elem)=>{
            return  elem.id === updatedData.id ? {...data,id:updatedData.id} : elem
          })
        })
    }else{
       let newStudent=[...studentCards, { ...data, id: Date.now() }]
      setStudentCards(newStudent)
    }

    setUpdatedData(null)


    reset();
  };

  return (
    <div className="w-full max-w-125 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Add student</h2>

        <p className="mt-1 text-base text-slate-500">
          Details bharo aur cohort me add karo.
        </p>
      </div>

      <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-base font-medium text-slate-800"
          >
            Full name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Aarav Sharma"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-base font-medium text-slate-800"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="aarav@kodr.dev"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Course */}
        <div>
          <label
            htmlFor="course"
            className="mb-2 block text-base font-medium text-slate-800"
          >
            Course
          </label>

          <select
            id="course"
            defaultValue=""
            {...register("course", {
              required: "Please select a course",
            })}
            className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
          >
            <option value="" disabled>
              Select course
            </option>

            <option value="MERN Stack">MERN Stack</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="DevOps">DevOps</option>
          </select>

          {errors.course && (
            <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
          )}
        </div>

        {/* Fee Paid */}
        <div>
          <label
            htmlFor="fee"
            className="mb-2 block text-base font-medium text-slate-800"
          >
            Fee paid (₹)
          </label>

          <input
            id="fee"
            type="number"
            placeholder="4999"
            {...register("price", {
              required: "Fee is required",
              valueAsNumber: true,
              min: {
                value: 0,
                message: "Fee cannot be negative",
              },
            })}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
          />

          {errors.price && (
            <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <p className="mb-3 text-base font-medium text-slate-800">Status</p>

          <div className="flex flex-wrap gap-5">
            {/* Active */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                value="active"
                {...register("status", {
                  required: "Please select status",
                })}
                className="h-4 w-4 accent-teal-600"
              />

              <span className="text-base text-slate-700">Active</span>
            </label>

            {/* Completed */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                value="completed"
                {...register("status", {
                  required: "Please select status",
                })}
                className="h-4 w-4 accent-teal-600"
              />

              <span className="text-base text-slate-700">Completed</span>
            </label>

            {/* Dropped */}
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                value="dropped"
                {...register("status", {
                  required: "Please select status",
                })}
                className="h-4 w-4 accent-teal-600"
              />

              <span className="text-base text-slate-700">Dropped</span>
            </label>
          </div>

          {errors.status && (
            <p className="mt-1 text-sm text-red-500">{errors.status.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-teal-700 py-3.5 text-base font-semibold text-white transition hover:bg-teal-800 active:scale-[0.98]"
        >
          Add student
        </button>
      </form>
    </div>
  );
};

export default Form;
