import { axiosInstance } from "../../../config/axiosInstance";

export const loginUserApi = async (credentials) => {
  try {
    const res = await axiosInstance.post("/auth/login",credentials);
    localStorage.setItem("accessToken",res.data.accessToken)
    return res.data
  } catch (error) {
    console.log("Error in Login Api-->", error);
  }
};
export const hydrateUserApi = async () => {
    let token=localStorage.getItem("accessToken")
  try {
    let res = await axiosInstance.get("/auth/me",{
        headers:{
          Authorization:`Bearer ${token}`
        }
    });
    console.log(res);
    return res.data

  } catch (error) {
    console.log("Error in hydrate Api-->", error);
  }
};
