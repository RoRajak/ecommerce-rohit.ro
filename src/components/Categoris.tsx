import { useEffect, useState } from "react";
import {
  arrowIcon,
  cancelIconBlack,
  filterGrayIcon,
  filterIcon,
} from "../constants";
import Product from "./Helper/Product";
import {
  FilterOption,
  FilterSection,
  PriceRangeFilter,
  SizeSection,
} from "./Filteroption";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchData } from "../store/features/product/productSlice";
import { useNavigate } from "react-router-dom";

function Categoris() {
  const [filterVisable, setFilterVisable] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const {product,isLoading}=useAppSelector((state)=>state.product)
  const dispatch=useAppDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])

  const toggleFilter = (filter: string) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };
  
  return (
    <section className="flex flex-col justify-around ">
      <div className="flex gap-x-2 p-4">
        <button
        onClick={()=>navigate("/")}
        >Home</button>
        &gt;
        <button>Shop</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[20%_80%] gap-x-5 sm:p-4 relative">
        <div
          className={`${
            filterVisable
              ? "block transition-all h-full w-full p-0 rounded-t-2xl bg-white shadow-[-1px_-36px_34px_9px_rgba(204,204,204,0.65)] absolute top-0 z-10"
              : "hidden"
          } sm:block   `}
        >
          <div className="flex justify-between p-4">
            <h3 className="font-bold text-xl">Filters</h3>
            <button onClick={()=>setFilterVisable(!filterVisable)} >
              <img src={cancelIconBlack} alt=""  className="sm:hidden"/>
              
            </button>

            <button>
            <img src={filterGrayIcon} alt=""  className="hidden sm:block"/>
            </button>
          </div>
          <div className="p-4">
            <span className="w-full  border border-gray-300 block"></span>
          </div>
          <div>
            <div className="p-4 flex flex-col gap-y-2">
              <FilterSection
                title="T-shirts"
                expanded={expandedFilter === "T-shirts"}
                onToggle={() => toggleFilter("T-shirts")}
              >
                <FilterOption label="Option 1" />
                <FilterOption label="Option 2" />
                <FilterOption label="Option 3" />
              </FilterSection>
              <FilterSection
                title="Shorts"
                expanded={expandedFilter === "Shorts"}
                onToggle={() => toggleFilter("Shorts")}
              >
                <FilterOption label="Option 1" />
                <FilterOption label="Option 2" />
                <FilterOption label="Option 3" />
              </FilterSection>
              <FilterSection
                title="Shirts"
                expanded={expandedFilter === "Shirts"}
                onToggle={() => toggleFilter("Shirts")}
              >
                <FilterOption label="Option 1" />
                <FilterOption label="Option 2" />
                <FilterOption label="Option 3" />
              </FilterSection>
              <FilterSection
                title="Hoodie"
                expanded={expandedFilter === "Hoodie"}
                onToggle={() => toggleFilter("Hoodie")}
              >
                <FilterOption label="Option 1" />
                <FilterOption label="Option 2" />
                <FilterOption label="Option 3" />
              </FilterSection>
              <FilterSection
                title="Jeans"
                expanded={expandedFilter === "Jeans"}
                onToggle={() => toggleFilter("Jeans")}
              >
                <FilterOption label="Option 1" />
                <FilterOption label="Option 2" />
                <FilterOption label="Option 3" />
              </FilterSection>
            </div>
            <div className="p-4">
              <span className="w-full  border border-gray-300 block"></span>
            </div>
            <div className="p-4">
              <PriceRangeFilter />
            </div>
            <div className="p-4 mt-4">
              <span className="w-full  border border-gray-300 block"></span>
            </div>
            <div className="flex flex-col gap-y-4 p-4">
              <h3 className="font-bold text-xl ">Size</h3>
              <SizeSection />
            </div>
            <div className="p-4">
              <span className="w-full  border border-gray-300 block"></span>
            </div>
            <div className="p-4 mt-4">
              <h3 className="text-xl font-bold">Dress style</h3>
              <div className="p-4 flex flex-col gap-y-2">
                <FilterSection
                  title="Causal"
                  expanded={expandedFilter === "Causal"}
                  onToggle={() => toggleFilter("Causal")}
                >
                  <FilterOption label="Option 1" />
                  <FilterOption label="Option 2" />
                  <FilterOption label="Option 3" />
                </FilterSection>
                <FilterSection
                  title="Formal"
                  expanded={expandedFilter === "Formal"}
                  onToggle={() => toggleFilter("Formal")}
                >
                  <FilterOption label="Option 1" />
                  <FilterOption label="Option 2" />
                  <FilterOption label="Option 3" />
                </FilterSection>
                <FilterSection
                  title="Party"
                  expanded={expandedFilter === "Party"}
                  onToggle={() => toggleFilter("Party")}
                >
                  <FilterOption label="Option 1" />
                  <FilterOption label="Option 2" />
                  <FilterOption label="Option 3" />
                </FilterSection>
                <FilterSection
                  title="Gym"
                  expanded={expandedFilter === "Gym"}
                  onToggle={() => toggleFilter("Gym")}
                >
                  <FilterOption label="Option 1" />
                  <FilterOption label="Option 2" />
                  <FilterOption label="Option 3" />
                </FilterSection>
              </div>
            </div>
            <div className="p-4">
            <button className="bg-black text-white px-6 py-2 rounded-3xl w-full">
              Apply filter
            </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col p-4">
          <div className="flex justify-between items-center px-4">
            <h4 className="font-bold text-lg">Clothing</h4>
            <div className="flex gap-x-3 items-center">
              <p className="text-gray-400 text-xs">
                Showing 10 Products
              </p>
              <p className="hidden sm:block">
                Sort by:{" "}
                <span>
                  {" "}
                  Most Popular{" "}
                  <button>
                    <img src={arrowIcon} alt="" />
                  </button>
                </span>
              </p>
              <div className="bg-[#F0F0F0] rounded-xl w-auto sm:hidden">
                <button onClick={()=>setFilterVisable(!filterVisable)}>
                  <img src={filterIcon} alt="filterIcon" />
                </button>
              </div>
            </div>
          </div>
          {isLoading&& (<div>Loading....</div>)}
          <div className="flex flex-wrap sm:grid sm:grid-cols-3 sm:grid-rows-3 sm:mt-4 gap-2 p-4 place-content-center">
            {product.map((product) => (
              <button key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
              <Product
                key={product.id}
                product={product}
              />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Categoris;
