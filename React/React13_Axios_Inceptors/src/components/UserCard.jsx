const UserCard = ({ user }) => {
  return (
    <div className="w-full cursor-pointer max-w-sm rounded-2xl border border-gray-800 bg-[#171717] p-6 shadow-xl transition hover:-translate-y-1 hover:border-gray-700">

      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-xl font-bold text-white">
          {user.name.firstname.charAt(0).toUpperCase()}
        </div>

        {/* Name */}
        <div>
          <h2 className="text-xl font-semibold capitalize text-white">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-400">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-6 space-y-4">

        {/* Email */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Email
          </p>

          <p className="mt-1 truncate text-sm text-gray-300">
            {user.email}
          </p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Phone
          </p>

          <p className="mt-1 text-sm text-gray-300">
            {user.phone}
          </p>
        </div>

        {/* Address */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Address
          </p>

          <p className="mt-1 text-sm leading-6 text-gray-300">
            {user.address.number}, {user.address.street},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

      </div>

    </div>
  );
};

export default UserCard;