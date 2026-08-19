const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg">
      
      {/* Image Skeleton */}
      <div className="h-64 w-full animate-pulse bg-zinc-800" />

      {/* Content */}
      <div className="p-5 animate-pulse">

        {/* Title */}
        <div className="mb-3 h-6 w-3/4 rounded bg-zinc-800" />

        {/* Description */}
        <div className="mb-2 h-4 w-full rounded bg-zinc-800" />
        <div className="mb-4 h-4 w-5/6 rounded bg-zinc-800" />

        {/* Stock */}
        <div className="mb-4 h-4 w-1/3 rounded bg-zinc-800" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          
          {/* Price */}
          <div className="h-7 w-20 rounded bg-zinc-800" />

          {/* Button */}
          <div className="h-10 w-28 rounded-lg bg-zinc-800" />

        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;