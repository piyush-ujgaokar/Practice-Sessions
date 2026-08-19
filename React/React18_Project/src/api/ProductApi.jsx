import { axiosInstance } from "../config/axiosInstance";

export const getAllProductsApi = async () => {
    console.log("Product Apoi is Running ....");
    
  try {
    let res = await axiosInstance("/products");
    return res.data.products
  } catch (error) {
    console.log(error);
  }
};
