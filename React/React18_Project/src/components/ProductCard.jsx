const ProductCard = ({ product }) => {
  return (
    <div
      className="
        w-full max-w-sm overflow-hidden rounded-2xl
        border border-zinc-800 bg-zinc-900 shadow-lg
        transition-transform duration-300 ease-in-out
        hover:scale-102 cursor-pointer hover:shadow-2xl
      "
    >
      {/* Product Image */}
      <div className="h-84 w-full bg-zinc-800 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Title */}
        <h2 className="mb-2 line-clamp-1 text-xl font-semibold text-white">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-3 line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

        {/* Stock */}
        <p className="mb-4 text-sm text-zinc-400">
          Stock:{" "}
          <span className="font-semibold text-green-400">
            {product.stock}
          </span>
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>

          <button
            className="
              rounded-lg cursor-pointer bg-white px-4 py-2
              text-sm font-semibold text-black
              transition-all duration-200
              hover:bg-zinc-200
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