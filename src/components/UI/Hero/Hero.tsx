
import HeroAbout from "../../Helper/HeroAbout";
import { heroModel, Smallstar } from "../../../constants";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate=useNavigate()
  return (
    <section className="bg-[#F2F0F1] mt-6 gap-y-2 ">
      <div className="flex flex-col w-full sm:flex-row">
        <div className="flex flex-col px-3 gap-y-3 sm:pt-10 sm:justify-start   sm:w-1/2 ">
          <div className="flex flex-col gap-y-4 sm:gap-y-10  ">
            
            <h3 className="font-extrabold text-4xl sm:text-7xl sm:px-12">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h3>
            <p className="text-sm sm:px-12">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button
            onClick={()=>navigate("/category")}
             className="bg-black w-full sm:w-1/5 text-white p-2 text-center rounded-2xl hover:bg-zinc-800 sm:ml-12">
              Shop Now
            </button>
           
          </div>
          <div className="flex items-center flex-col gap-y-3 sm:flex-row sm:gap-x-4 sm:ml-12 sm:mt-16">
            <div className="flex items-center gap-x-10 sm:pl-0">
              <HeroAbout numbers="200" para="International Brands" />
              <span className="w-0.5 h-7 bg-gray-600"></span>
              <HeroAbout numbers="2000" para="High-Quality Products" />
            </div>
            <span className="hidden sm:block sm:bg-gray-600 w-0.5  h-7 sm:mr-4 "></span>
            <HeroAbout numbers="30,000" para="Happy Customers" />
          </div>
        </div>
        <div className="relative ">
          <img
            src={Smallstar}
            className=" absolute top-44 left-4 w-8 sm:top-72 sm:left-12 sm:w-14"
          />
          <img src={heroModel} alt="model" className="z-10" />
          <img
            src={Smallstar}
            className=" absolute top-14 right-5 w-14 sm:top-20 sm:right-24 sm:w-20"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
