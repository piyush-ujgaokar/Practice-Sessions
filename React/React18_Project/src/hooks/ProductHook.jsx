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
