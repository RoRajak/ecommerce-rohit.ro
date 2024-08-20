import { useState } from "react";
import { feedback } from "../constants";
import Survey from "./Helper/Survey";

function SueveyComp() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative mt-4">
      <div className="flex  flex-col pt-0 pb-10 sm:p-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl">OUR HAPPY CUSTOMERS</h1>
        <div className="w-full overflow-hidden  ">
          <div
            className={`flex w-fit ${isHovered ? "paused" : "scrolling"} pt-6`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex gap-x-12">
              {feedback.map((item, i) => (
                <Survey key={i} para={item.feedback} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SueveyComp;
