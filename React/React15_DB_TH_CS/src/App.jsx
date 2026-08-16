import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {

  const [products, setProducts] = useState([])
const [input, setInput] = useState(null)

  const getAllproducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const filterData=()=>{
    console.log("filter running...");
    let result=products.filter((val)=>{
        return val.title.toLowerCase().includes(input.toLowerCase())
    })
    setProducts(result)
  }
  
  

  useEffect(()=>{

    if(!input) return 
    
    let timer=setTimeout(() => {
        filterData()
    },0);

    return ()=>clearTimeout(timer)
  },[input])
  
  useEffect(()=>{
    getAllproducts()
    
},[])


  return <div className=" p-10  ">

   <div className="text-xl mb-10 ">
    <input onChange={(e)=>setInput(e.target.value)} className="p-3 border rounded-2xl" type="text" placeholder="Search" />
   </div>


  <div className=" gap-10">
      {
      products.map((elem)=>{
        return <h1>{elem.title}</h1>
      })
    }
  </div>
  </div>;
};

export default App;
