import { useContext } from "react";
import { MyShope } from "../context/ShopeContext";

const Cart = () => {


    let {cartData}=useContext(MyShope)

  console.log(cartData);

  const total = cartData.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Your Cart
          </h1>

          <p className="mt-2 text-gray-400">
            {cartData.length} items in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {cartData.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-gray-800 bg-gray-950">
            <div className="text-center">
              <div className="mb-4 text-6xl">
                🛒
              </div>

              <h2 className="text-2xl font-semibold">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-400">
                Add some products to your cart.
              </p>

              <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (

          /* Cart + Summary */
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">

              {cartData.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex flex-col gap-5
                    rounded-2xl
                    border border-gray-800
                    bg-gray-950
                    p-5
                    sm:flex-row
                    sm:items-center
                  "
                >

                  {/* Image */}
                  <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-black sm:w-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-28 object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">

                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Product
                    </p>

                    <h2 className="mt-1 line-clamp-2 text-lg font-semibold">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold">
                      ${item.price}
                    </p>

                  </div>

                  {/* Quantity
                  <div className="flex items-center gap-3">
                    <button
                      className="
                        flex h-9 w-9 items-center
                        justify-center rounded-lg
                        border border-gray-700
                        text-lg
                        transition hover:bg-white hover:text-black
                      "
                    >
                      −
                    </button>

                    <span className="w-6 text-center font-semibold">
                      {item.quantity || 1}
                    </span>

                    <button
                      className="
                        flex h-9 w-9 items-center
                        justify-center rounded-lg
                        border border-gray-700
                        text-lg
                        transition hover:bg-white hover:text-black
                      "
                    >
                      +
                    </button>
                  </div> */}

                  {/* Remove */}
                  <button
                    className="
                      rounded-lg border border-red-900
                      px-4 py-2 text-sm
                      text-red-400
                      transition hover:bg-red-500
                      hover:text-white
                    "
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-gray-800 bg-gray-950 p-6">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="my-6 space-y-4">

                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-400">
                    Free
                  </span>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">
                      Total
                    </span>

                    <span className="text-2xl font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

              </div>

              <button
                className="
                  w-full rounded-xl
                  bg-white py-3
                  font-semibold text-black
                  transition
                  hover:bg-gray-200
                  active:scale-[0.98]
                "
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
