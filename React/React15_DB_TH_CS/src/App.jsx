import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [input, setInput] = useState(null);

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = () => {
    console.log("filter data....");

    let result = productsData.filter((elem) => {
      return elem.title.toLowerCase().includes(input.toLowerCase());
    });

    console.log(result);

    setProductsData(result);
  };

  useEffect(() => {
    if (!input) return;

    let timeOut = setTimeout(() => {
      filterData();
    }, 700);

    return () => clearTimeout(timeOut);
  }, [input]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" p-10  ">
      <div className="text-xl mb-10 ">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="p-3 border rounded-2xl"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-wrap gap-10">
        {productsData.map((elem) => {
          return <ProductCard key={elem.id} product={elem} />;
        })}
      </div>
    </div>
  );
};

export default App;
