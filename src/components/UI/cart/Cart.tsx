import { useState } from "react";

import { CartProductComp } from "../../Helper/Product";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../store/features/cart/cartSlice";

function Cart() {
  const [promoCode, setPromoCode] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * product.quantites,
      0
    );
  }
  const handleCheckout = () => {
    const storedData = localStorage.getItem("data");

    // Parse the stored data if it exists
    const parsedData = storedData ? JSON.parse(storedData) : null;

    // Redirect to signup if no data is found or if name is missing
    if (!parsedData) {
      navigate("/signup");
      return;
    }
    setOrderPlaced(true);

    // Clear the cart
    dispatch(clearCart());

    // Redirect to homepage after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const discountedPrice: number = parseFloat(((total * 15) / 100).toFixed(2));
  const deliveryFee: number = 15;
  return (
    <section className="flex flex-col p-4">
      <div className="flex-initial gap-x-8 text-sm font-semibold">
        <button onClick={() => navigate("/")}>Home</button>
        &gt;
        <button>Cart</button>
      </div>
      <h1 className="mt-4 font-bold text-xl">YOUR CART</h1>
      {orderPlaced && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          Placed order successfully! Redirecting to homepage...
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-x-10 mt-4 gap-4">
        <div className="flex flex-col gap-y-4 sm:w-1/3">
          {cart.map((item) => (
            <CartProductComp key={item.id} product={item} />
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-bold">Order Summary</h1>
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm font-semibold">₹{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Discount(15%)</p>
              <p className="text-sm font-semibold text-red-500">
                -₹{discountedPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Delivery fee</p>
              <p className="text-sm font-semibold">₹{deliveryFee}</p>
            </div>
            <span className="w-full block bg-gray-500"></span>
            <div className="flex justify-between">
              <p className="text-sm">Total</p>
              <p className="text-sm font-semibold">
                ₹{(total + deliveryFee - discountedPrice).toFixed(2)}
              </p>
            </div>
            <div className="max-w-sm mx-auto p-4">
              <div className="flex items-center mb-4 border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-grow p-2 outline-none"
                />
                <button className="bg-black text-white px-4 py-2">Apply</button>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-lg"
              >
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
