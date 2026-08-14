import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/AxiosInstance";
import { Auth } from "../context/AuthContext";

const ProductsPage = () => {
  const [productData, setProductData] = useState([]);
  let {isLoading,setIsLoading} = useContext(Auth)

  const getAllProducts = async () => {
    setIsLoading(true);
    try {
      let res = await axiosInstance.get("/products");
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(productData);

  return (
    <div className="grid h-auto overflow-hidden ">
      {isLoading ? (
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-[5vw] font-medium text-purple-400">
            Loading products...
          </p>
        </div>
      ) : (
        <div className=" grid grid-cols-4 gap-10">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
