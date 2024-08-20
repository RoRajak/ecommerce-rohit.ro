import  { useEffect, useRef } from "react";
import { leftArrowIcon, rightArrowIcon } from "../constants";
import Product from "./Helper/Product";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../store/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function TopSelling() {
  const {product,isLoading}=useAppSelector((state)=>state.product)
  const navigate=useNavigate()
  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll=(offset:number)=>{
    if (scrollRef.current) {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + offset,
            behavior: 'smooth'
          });
      }
  }
  return (
    <section className="flex flex-col">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">TOP SELLING</h1>
      </div>
      <div
        className="relative"
        
      >
        <button
        onClick={()=>scroll(-200)}
        className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10"
        >
          <img
            src={leftArrowIcon}
            alt=""
            className="w-14"
          />
        </button>
        {isLoading&&( <div>Loading...</div> )}
        <div
        ref={scrollRef} className="flex items-center overflow-x-auto px-10 whitespace-nowrap  pt-4  gap-x-5 sm:gap-x-36 relative sm:justify-around scrollbar-hidden">
        {product.map((product) => (
              <button key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
              <Product
                key={product.id}
                product={product}
              />
              </button>
            ))}
        </div>
        <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={()=>scroll(240)}
        >
          <img src={rightArrowIcon} className="w-14 " />
        </button>
      </div>
      <div className="mt-4 p-4 text-center">
        <button
        onClick={()=>navigate("/category")}
        className=" px-6 sm:px-9 py-2 bg-[#F0EEED] rounded-full border border-sky-900 hover:bg-black hover:text-white"
        >View all</button>
      </div>
    </section>
  );
}

export default TopSelling;
