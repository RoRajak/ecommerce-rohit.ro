
import {
  calvinIcon,
  gucciIcon,
  paradeIcon,
  versaceIcon,
  zaraIcon,
} from "../../../constants";

function Brand() {
  return (
    <section >
      <div className="bg-black flex flex-wrap justify-center gap-3 py-2 items-center sm:grid sm:grid-cols-3 sm:gap-4 md:grid-cols-5 md:gap-4 sm:pl-6">
        {/* <div className="flex gap-x-4 justify-center sm:justify-around"> */}
          <img src={versaceIcon} alt="" className="w-24" />
          <img src={zaraIcon} alt="" className="w-14 h-10" />
          <img src={gucciIcon} alt="" className="w-24" />
        {/* </div> */}
        {/* <div className="flex justify-center gap-x-4 sm:justify-around"> */}
          <img src={paradeIcon} alt="" className="w-28" />
          <img src={calvinIcon} alt="" className="w-28" />
        {/* </div> */}
      </div>
    </section>
  );
}

export default Brand;
