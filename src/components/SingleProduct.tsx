import { Rating } from "@mui/material";
// import { tapeShirtIcon } from "../constants";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useAppDispatch, useAppSelector } from "../store/hooks";
import { ProductType } from "../types";
import { addItems } from "../store/features/cart/cartSlice";


function SingleProduct() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("Black");
  const { id } = useParams();
  const allProducts = useAppSelector((items) => items.product.product);
  const navigate=useNavigate()
  const dispatch=useAppDispatch();
  const slectedProduct = allProducts.find((item) => item.id === Number(id));

  useEffect(() => {
    
    if (slectedProduct) {
      setProduct(slectedProduct);
    }
  }, [id, allProducts, slectedProduct]);

  const colors = ["Black", "Navy", "Gray"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];
  return (
    <section className="flex flex-col gap-y-6">
      <div className=" flex pt-5 gap-x-3">
        <button
        onClick={()=>navigate("/")}
        >Home</button>
        &gt;
        <button
        onClick={()=>navigate("/category")}
        >Shop</button>
        &gt;
        <button>{product?.category}</button>
        &gt;
        <button>{product?.tags[1]}</button>
      </div>
      <div className="flex flex-col p-3 sm:flex-row h-auto w-full">
        <div className="flex flex-col-reverse sm:flex-row gap-5 sm:w-1/2 sm:h-1/2">
          <div className="flex sm:flex-col gap-5">
            {product?.images.slice(0, 3).map((image, index) => (
              <div key={index} className="h-auto w-44 rounded-xl bg-[#F0EEED]">
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="h-auto w-full rounded-3xl bg-[#F0EEED] flex items-center justify-center  ">
            <img src={product?.images[3]} alt="src" className="w-full h-full" />
          </div>
        </div>
        <div className=" flex flex-col mt-5 gap-y-5 p-3 sm:w-1/2 sm:h-1/2">
          <p className="text-3xl font-extrabold">{product?.title}</p>
          <Rating value={4.5} />
          <div className="flex gap-x-2">
            <h5 className="font-semibold">₹{product?.price} </h5>

            <h5 className="line-through">
              ₹
              {(
                ((product?.price ?? 0) *
                  ((product?.discountPercentage ?? 0) + 100)) /
                100
              ).toFixed(2)}
            </h5>
            <div className="text-red-800 bg-red-500 rounded-xl px-2">
              -{product?.discountPercentage}%
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {product?.description}
          </p>
          <div>
            <h2 className="font-semibold text-gray-500 mb-2">Select Color</h2>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-gray-500 mb-2">Choose Size</h2>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`py-2 border rounded-3xl  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300 text-gray-700 bg-[#F0F0F0]"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-x-3 ">
            
            <button
            onClick={() => {
              if (slectedProduct) {
                dispatch(addItems(slectedProduct));
              } 
            }}
             className="bg-black text-white px-6 py-2 rounded-3xl w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
