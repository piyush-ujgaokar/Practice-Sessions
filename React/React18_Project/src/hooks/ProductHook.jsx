import { useQuery } from "@tanstack/react-query"
import { getAllProductsApi } from "../api/ProductApi"
import { useEffect, useState } from "react"

export const useProductApi=()=>{

    const [filtereData, setfiltereData] = useState(null)

     const {data,isPending,error}=useQuery({
    queryKey:["product"],
    queryFn:getAllProductsApi,
    staleTime:5000,
  })

  const filteredData=(searchParams)=>{
    // let productList = data;

    // if (!productList) {
    //     productList = [];
    // }

    let filterProduct= data.filter((val)=>{
        return val.title.toLowerCase().includes(searchParams.toLowerCase())
    })
    console.log(filterProduct);
    

   if(filterProduct){
     setfiltereData(filterProduct)
   }
  }


  useEffect(()=>{
    setfiltereData(data)
  },[data])

  return {data,isPending,error,filtereData,filteredData}

}


export const useProduct=()=>{
      const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
      const [filtereData, setfiltereData] = useState([])
  const { data, error } = useProductApi();


  const getProducts = async () => {
    if (!data) {
      return;
    }

    setProductsData(data);
    setfiltereData(data)
    setIsLoading(false);
  };

  const filteredData = (searchParams) => {
    let filterProduct = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchParams.toLowerCase());
    });
    console.log(filterProduct);

    if (filterProduct) {
      setfiltereData(filterProduct);
    }
  };

  useEffect(() => {
    getProducts();
  }, [data]);

  if (error) {
    return <h1>{error.message}</h1>;
  }


  return {filteredData,filtereData,isLoading,productsData,setIsLoading,setProductsData,setfiltereData}


}
