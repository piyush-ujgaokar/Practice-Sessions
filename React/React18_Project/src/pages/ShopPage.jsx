
import FilteredProduct from "../components/FilteredProduct";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProduct } from "../hooks/ProductHook";

const ShopPage = () => {

    const {filteredData,filtereData,isLoading}=useProduct()

  return (
    <div>
      <FilteredProduct filteredProduct={filteredData} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filtereData?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
