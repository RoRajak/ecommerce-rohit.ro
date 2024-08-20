import React, { useState } from "react";
import { Rating } from "@mui/material";
import { deleteIcons } from "../../constants";
import { ProductType } from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { addQuantity, removeItems, removeQuantity } from "../../store/features/cart/cartSlice";

interface productProps {
  product: ProductType;
}

function Product({ product }: productProps): React.ReactElement {
  const [value, setValue] = useState<number | null>(2);
  return (
    <div className="flex flex-col gap-y-2 w-36 ">
      <div className="h-auto w-36  sm:w-60 rounded-xl bg-[#F0EEED] ">
        <img src={product.images[0]} alt="src" />
      </div>
      <p className="font-semibold text-xs sm:text-base text-wrap">
        {product.title}
      </p>
      <div className="flex gap-x-2 ">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          precision={0.5}
          size="small"
        />
        <p className="text-gray-500 text-sm sm:text-base">{value}/5</p>
      </div>
      <div className="flex gap-x-2">
        <h5 className="font-semibold text-sm sm:text-base">
          ₹
          {product.price}
        </h5>

        <h5 className=" line-through text-sm sm:text-base">₹{((product.price * (product.discountPercentage + 100)) / 100).toFixed(
            2
          )}{" "}</h5>
        <div className="text-red-800 bg-red-500 rounded-xl px-2 text-sm sm:text-base">
          {product.discountPercentage}%
        </div>
      </div>
    </div>
  );
}



export const CartProductComp: React.FC<productProps> = ({product}) => {
  //const [quantity, setQuantity] = useState(1);
  const dispatch=useAppDispatch()
  // const handleDecrease = () => {
  //   if (quantity <= 0) return;
  //   setQuantity(quantity - 1);
  // };
  // const handleAdd = () => {
  //   setQuantity(quantity + 1);
  // };
  return (
    <div className="flex gap-x-2">
      <div className="h-auto w-24 rounded-xl bg-[#F0EEED] ">
        <img src={product.images[0]} alt="src" />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="flex justify-between w-full">
          <h6 className="font-semibold text-sm">{product.title}</h6>
          <button
          onClick={()=>dispatch(removeItems(product.id))}
          >
          <img src={deleteIcons} alt="" />
            
          </button>
          
        </div>
        <p className="text-gray-400">
        Category:<span className="text-sm pl-2">{product.category}</span>
        </p>
        <div className="flex flex-col justify-between">
          <h3 className="font-bold">₹{product.price}</h3>
          <div className="bg-[#F0F0F0] rounded-2xl w-20 px-2  flex items-center justify-between">
            <button onClick={()=>dispatch(removeQuantity(product.id))} className="text-3xl">
              -
            </button>
            <p className="font-semibold">{product.quantites}</p>
            <button onClick={()=>dispatch(addQuantity(product.id))} className="text-xl">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
