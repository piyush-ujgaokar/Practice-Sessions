const Navbar = ({studentCards,total}) => {



  return (
    <nav className="w-full bg-[#0b111c] text-white px-6 py-5 rounded-3xl">
      {/* Brand */}
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-[0.3em] text-teal-400">
          KODR COHORT
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Student Manager
        </h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8">
        
        {/* Students */}
        <div className="border-l-4 border-teal-400 pl-4">
          <h2 className="text-3xl font-semibold">
            {studentCards.length}
          </h2>

          <p className="text-sm text-slate-400">
            Students
          </p>
        </div>

        {/* Active */}
        <div className="border-l-4 border-teal-400 pl-4">
          <h2 className="text-3xl font-semibold">
            0
          </h2>

          <p className="text-sm text-slate-400">
            Active
          </p>
        </div>

        {/* Fees */}
        <div className="border-l-4 border-teal-400 pl-4">
          <h2 className="text-3xl font-semibold">
            {total}
          </h2>

          <p className="text-sm text-slate-400">
            Fees collected
          </p>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;