import { useContext } from "react";
import { MyShope } from "../context/ShopeContext";

const ProductCard = ({ products}) => {


    let {setCartData}=useContext(MyShope)

  return (
    <div
      className="
      w-92
        group overflow-hidden rounded-2xl
        border border-gray-800
        bg-black text-white
        shadow-lg shadow-black/30
        transition-all duration-300
        hover:-translate-y-2
        hover:border-gray-600
        hover:shadow-2xl
      "
    >
      {/* products Image */}
      <div className="relative flex h-72 items-center justify-center bg-gray-950 p-6">
        {/* Category */}
        <span
          className="
            absolute left-4 top-4
            rounded-full bg-white px-3 py-1
            text-xs font-semibold capitalize text-black
          "
        >
          {products.category}
        </span>

        <img
          src={products.image}
          alt={products.title}
          className="
            h-full w-full object-contain
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* products Details */}
      <div className="p-5">
        {/* Title */}
        <h2
          className="
            line-clamp-2 min-h-[3.5rem]
            text-lg font-semibold
            text-white
          "
        >
          {products.title}
        </h2>

        {/* Description */}
        <p
          className="
            mt-3 line-clamp-2
            text-sm leading-6
            text-gray-400
          "
        >
          {products.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-yellow-400">★</span>

          <span className="font-semibold text-white">
            {products.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({products.rating.count})
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <p className="text-2xl font-bold text-white">${products.price}</p>
          </div>

          <button onClick={()=>setCartData((prev)=>[...prev,products])}

            className="
              rounded-xl
              bg-white px-5 py-2.5
              text-sm font-semibold text-black
              transition-all duration-200
              hover:bg-gray-200
              active:scale-95
            "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
