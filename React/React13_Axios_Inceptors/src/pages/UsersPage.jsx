import { useContext, useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/AxiosInstance";
import { Auth } from "../context/AuthContext";
const UsersPage = () => {
  const [userData, setuserData] = useState([]);
 let {isLoading,setIsLoading}=useContext(Auth)

  const getAllusers = async () => {
    setIsLoading(true);
    try {
      let res = await axiosInstance.get("/users");
      setuserData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllusers();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-[4vw] font-medium text-purple-400">
            Loading products...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {userData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
