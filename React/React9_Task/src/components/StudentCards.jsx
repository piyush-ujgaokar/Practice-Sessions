const StudentCard = ({ student,deleteStudent,setUpdatedData, index }) => {



  return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      
      {/* Left Content */}
      <div className="flex items-start gap-4">
        
        {/* Blue Line */}
        <div className="h-16 w-1 rounded-full bg-blue-500"></div>

        <div>
          {/* Name + Status */}
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-800">
              {student.name}
            </h3>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {student.status}
            </span>
          </div>

          {/* Email */}
          <p className="mt-1 text-sm text-slate-600">
            {student.email}
          </p>

          {/* Course + Fee */}
          <p className="mt-1 text-sm text-slate-500">
            {student.course}
            <span className="mx-2">•</span>
            ₹{student.price}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <button
        onClick={()=>{
          setUpdatedData(student)
        }}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          Edit
        </button>

        <button
        onClick={()=>{
          deleteStudent(index)
        }}
          className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;