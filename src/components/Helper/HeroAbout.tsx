import React from "react";
interface Feature{
    numbers:string;
    para:string;
}

function HeroAbout({numbers,para}:Feature) :React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-xl sm:text-4xl font-bold">{numbers}+</p>
        <p className="text-xs sm:text-lg text-zinc-700">{para}</p>
    </div>
  )
}

export default HeroAbout