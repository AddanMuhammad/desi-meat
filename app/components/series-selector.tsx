"use client";

import { PrimaryButton } from "@/app/components/ui/primary-button";
import { dummyCardData } from "../json-data/series-selector";

export const SeriesSelector = () => {
  return (
    <div className="mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-16 2xl:px-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <h2 className="font-satoshi series-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          The Series{" "}
          <span className="font-clearface italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light">
            Selector
          </span>
        </h2>

        <p className="series-subtitle text-sm sm:text-base font-bold text-white">
          Dhesi Meat{" "}
          <span className="font-light">– What's your purpose today</span>
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {dummyCardData.map((card, index) => (
          <div
            key={index}
            className="
              series-card
              border border-[#2f2f2f]
              rounded-2xl p-4
              flex flex-row justify-between 
              gap-6
              h-full
              bg-linear-to-r from-[#B78E39]/20 to-[#161616]
              cursor-pointer
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-xl hover:shadow-[#B78E39]/20
              hover:border-[#B78E39]/60
            "
          >
            {/* Text Section */}
            <div className="flex flex-col justify-between gap-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white">
                {card.title}
                <br />
                <span className="text-xs sm:text-sm text-gray-300 font-light">
                  {card.description}
                </span>
              </h3>

              <PrimaryButton
                primaryColor="#d4a64a"
                text={card.button.text}
                gradientToWhite={card.button.isGradient}
                className="uppercase  w-fit"
                href="https://dhesimeats.restaurantsolutions.ca/"
              />
            </div>

            {/* Image */}
            {/* Image */}
            <div className="shrink-0 w-35 sm:w-37 lg:w-40 h-30 sm:h-35 md:h-40 md:w-40 lg:h-40 flex items-center justify-center overflow-hidden">
              <img
                src={card.img_url}
                alt={card.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
