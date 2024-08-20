import { useState } from "react";
import { cancelIcon } from "../../../constants/index";
import { useNavigate } from "react-router-dom";
function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const navigate=useNavigate()

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };
  return (
    <>
      {isBannerVisible && <div className="bg-black w-full h-9 flex items-center">
        <div className="flex-1 flex justify-center">
          <h4 className="text-white text-xs sm:text-sm">
            Sign up and get 20% off to your first order.{" "}
            <button
            onClick={()=>navigate("/signup")}
            ><span className="underline font-semibold">Sign Up Now</span></button>
          </h4>
        </div>
        <button className=" hidden sm:mr-36 sm:block" onClick={handleCloseBanner}>
          <img src={cancelIcon} alt="Cancel" />
        </button>
      </div>}
    </>
  );
}

export default Banner;
