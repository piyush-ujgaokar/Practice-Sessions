
const Productcard = ({userdata,deleteUser,index}) => {
    

console.log(userdata);


  return (
    <div className="w-[22%] mt-3 p-5 border rounded-xl">
        <div className="overflow-hidden rounded-2xl  w-full h-[20vw]">
            <img className="w-full object-cover object-center h-full" src={userdata.image} alt="" />
        </div>
        <div className="pt-7 gap-10">
            <div className="flex pt-3 items-center justify-between">
                <h1 className="text-2xl font-bold">{userdata.name}</h1>
                <h1 className="text-xs text-gray-400">{userdata.role}</h1>
            </div>
                <h1 className="text-s pt-3 text-gray-500">{userdata.email}</h1>
            <p className="text-s text-gray-300 pt-3"><span className="text-lg text-gray-500">Contact:-</span> +91-{userdata.contact}</p>
        </div>
        <div className="flex justify-between pt-3 ">
            <button className="px-3 py-2 rounded-xl text-xl cursor-pointer bg-green-700">Update</button>
            <button onClick={()=>{
                deleteUser(index)
                
            }} className="px-3 py-2 rounded-xl text-xl cursor-pointer bg-red-700">Delete</button>
        </div>
    </div>
  );
}

export default Productcard;
