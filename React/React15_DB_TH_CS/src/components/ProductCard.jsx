const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-[#171717] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500/50">

      {/* Image */}
      <div className="flex h-64 items-center justify-center bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium capitalize text-purple-400">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-4 line-clamp-2 text-lg font-semibold leading-6 text-white">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-400">
          {product.description}
        </p>

        {/* Price + Rating */}
        <div className="mt-5 flex items-end justify-between">

          {/* Price */}
          <div>
            <p className="text-xs text-gray-500">
              Price
            </p>

            <p className="mt-1 text-2xl font-bold text-white">
              ${product.price}
            </p>
          </div>

          {/* Rating */}
          <div className="text-right">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">
                ★
              </span>

              <span className="font-semibold text-white">
                {product.rating.rate}
              </span>
            </div>

            <p className="text-xs text-gray-500">
              {product.rating.count} reviews
            </p>
          </div>

        </div>

        {/* Button */}
        <button
          type="button"
          className="mt-5 w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 active:scale-[0.98]"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;