
import { casualModel, formalModel, gymModel, partyModel } from "../../../constants";

function BrowseStyle() {
  return (
    <section className="relative w-full h-screen">
      <div className="py-16  bg-[#F0EEED] sm:w-3/4 rounded-xl flex flex-col items-center justify-center sm:absolute sm:-translate-x-2/4 sm:-translate-y-2/4 left-2/4 top-2/4">
        <div className="text-center text-xl sm:text-4xl font-extrabold mb-4">
          BROWSE BY DRESS STYLE
        </div>
        <div className="w-full place-items-center grid grid-cols-1 md:grid-cols-2 gap-y-5 ">
          <div className="relative ">
            <img
              src={casualModel}
              alt="Casual"
              className="w-[310px] h-[190px] object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 font-bold text-black text-lg p-2">
              Casual
            </div>
          </div>
          <div className="relative">
            <img
              src={formalModel}
              alt="Formal"
              className="w-[310px] sm:w-[544px] h-[190px] sm:mr-6 object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 font-bold text-black text-lg p-2">
              Formal
            </div>
          </div>
          <div className="relative">
            <img
              src={partyModel}
              alt="Party"
              className="w-[310px] sm:w-[544px] sm:ml-8  h-[190px] object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 font-bold text-black text-lg p-2 sm:px-12">
              Party
            </div>
          </div>
          <div className="relative">
            <img
              src={gymModel}
              alt="Gym"
              className="w-[310px] h-[190px] object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 font-bold text-black text-lg p-2">
              Gym
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseStyle;
