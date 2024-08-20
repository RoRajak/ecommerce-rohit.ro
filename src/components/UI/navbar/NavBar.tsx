import  { useState } from "react";
import {
  buyIcon,
  cancelIcon,
  menuMOb,
  navBarMenu,
  profileIcon,
  searchIcon,
} from "../../../constants";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const cart=useAppSelector((state)=>state.cart.items)
  const navigate=useNavigate()
  const toggleBar=()=>{
    setMenuVisible(!isMenuVisible)
  }
  return (
    <nav className="w-full mt-4 relative">
      <div className={`menu-bar flex justify-between items-center h-8 sm:mx-28 `}>
        <div className="flex items-center gap-x-4 w-1/2">
          <button
            className="ml-4 md:hidden"
            onClick={toggleBar}
          >
            <img src={menuMOb} alt="Menu" />
          </button>

          <h3 className="text-black font-bold sm:text-xl">ROHIT.RO</h3>
          <div className="hidden md:flex sm:text-xs md:text-base flex-grow justify-around md:gap-x-8 ml-5 flex-[2_1_0]">
            {navBarMenu.map((item, i) => (
              <h5 key={i} className="text-xl font-semibold ">
                {item}
              </h5>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4 mr-2 md:w-1/2 ">
          <div
            className={`${
              isSearchVisible ? "flex w-5/12" : "hidden"
            } md:flex gap-2 items-center flex-grow max-w-xl h-12 rounded-md bg-gray-200 p-4`}
          >
            <img src={searchIcon} alt="Search" className="opacity-[0.4]" />
            <input
              type="text"
              placeholder="Search for products"
              className="outline-none w-full bg-inherit"
            />
          </div>
          <img
            src={searchIcon}
            alt="Search"
            onClick={() => setSearchVisible(!isSearchVisible)}
            className="sm:block md:hidden"
          />
          <div className="relative flex-initial gap-x-3">
          <button
          onClick={()=>navigate("/cart")}
          >
          <img src={buyIcon} alt="Buy" />
          </button>
          <div className="absolute -top-3 -right-2 w-4 h-auto bg-black text-white text-center rounded-lg text-xs">{cart.length}</div>
          </div>
          
          
          
          <img src={profileIcon} alt="Profile" />
          
        </div>
      </div>
      <div className={`${isMenuVisible ?"block duration-300 ease-in-out z-10":" hidden duration-300 ease-in-out z-0"} md:hidden absolute w-1/2 h-screen flex flex-row bg-black top-[-52px] left-0`}>
        <div className="flex justify-between flex-col  absolute top-0 left-5 gap-6 mt-5 ">
          {navBarMenu.map((item, i) => (
            <h5 key={i} className="text-base text-white mt-3  hover:bg-slate-50 hover:text-black">
              {item}
            </h5>
          ))}
        </div>
        <button className="ml-36 w-8 h-8 mt-8"
        onClick={toggleBar}
        >
        <img src={cancelIcon}  />
        </button>
        
      </div>
    </nav>
  );
}

export default NavBar;
