import React, { useState } from "react";

type FilterSectionProps = {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

type FilterOptionProps = {
  label: string;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  expanded,
  onToggle,
  children,
}) => (
  <div>
    <button
      className="flex items-center justify-between w-full text-left"
      onClick={onToggle}
    >
      <span className="font-normal text-gray-500">{title}</span>
      <span
        className={`text-gray-500 ${
          expanded ? "rotate-180" : "rotate-[270deg]"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </button>
    <div className={`mt-2 ${expanded ? "block" : "hidden"}`}>{children}</div>
  </div>
);

const FilterOption: React.FC<FilterOptionProps> = ({ label }) => (
  <div className="flex items-center space-x-2">
    <input
      type="checkbox"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
    />
    <label className="text-gray-700">{label}</label>
  </div>
);

const PriceRangeFilter = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 200]);
  const [activeSlider, setActiveSlider] = useState<number | null>(null); // Track which slider is active

  const handleClick = (index: number | null) => {
    setActiveSlider(index);
  };

  const handlePriceChange = (index: number, newValue: number) => {
    if (index === 0 && newValue > priceRange[1]) return; // Prevent min > max
    if (index === 1 && newValue < priceRange[0]) return; // Prevent max < min
    const newPriceRange: [number, number] = [
      index === 0 ? newValue : priceRange[0],
      index === 1 ? newValue : priceRange[1],
    ];
    setPriceRange(newPriceRange);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-gray-700">Price</span>
        <span className="text-gray-700">
          ₹{priceRange[0]} - ₹{priceRange[1]}
        </span>
      </div>
      <div className="relative">
        {/* Left Slider */}
        <input
          type="range"
          min="50"
          max="200"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
          onMouseDown={() => handleClick(0)}
          onMouseUp={() => handleClick(null)}
          className={`absolute w-full ${activeSlider === 0 ? "z-10" : "z-0"}`}
          style={{ zIndex: activeSlider === 0 ? 10 : 5 }}
        />
        {/* Right Slider */}
        <input
          type="range"
          min="50"
          max="200"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
          onMouseDown={() => handleClick(1)}
          onMouseUp={() => handleClick(null)}
          className={`absolute w-full ${activeSlider === 1 ? "z-10" : "z-0"}`}
          style={{ zIndex: activeSlider === 1 ? 10 : 5 }}
        />
      </div>
    </div>
  );
};

const SizeSection = () => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const sizes = ["X-small","Small", "Medium", "Large", "X-Large","XX-Large"];
  return (
    <div className="grid grid-cols-2 gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`py-2 border rounded-3xl  ${
            selectedSize === size
              ? "bg-black text-white"
              : "border-gray-300 text-gray-700 bg-[#F0F0F0]"
          }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export { FilterSection, PriceRangeFilter, FilterOption, SizeSection };
