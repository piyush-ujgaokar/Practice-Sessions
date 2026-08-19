import { useProductApi } from "../hooks/ProductHook";

const FilteredProduct = () => {


    const {filteredData}=useProductApi()

    
    


  return (
    <div className="mb-8 flex w-full flex-col gap-4 sm:flex-row">

      {/* Search */}
      <div className="flex flex-1">
        <input
        onChange={(e)=>filteredData(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="
            w-full rounded-l-lg border border-zinc-700
            bg-zinc-900 px-4 py-3
            text-white placeholder-zinc-500
            outline-none
            focus:border-amber-600
          "
        />

        <button
          className="
            rounded-r-lg bg-amber-600 px-6 py-3
            font-semibold text-black
            transition hover:bg-amber-800
            cursor-pointer
            active:scale-95
          "
        >
          Search
        </button>
      </div>

      {/* Category */}
      <select
        className="
          rounded-lg border border-zinc-700
          bg-zinc-900 px-4 py-3
          text-white outline-none
          focus:border-amber-800
          sm:w-52
        "
      >
        <option value="">All Categories</option>
        <option value="beauty">Beauty</option>
        <option value="groceries">Grocery</option>
        <option value="fragrances">Fragrance</option>
        <option value="furniture">Furniture</option>
      </select>

    </div>
  );
};

export default FilteredProduct;