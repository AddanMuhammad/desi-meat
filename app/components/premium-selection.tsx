'use client';
import { useState } from "react";
import { premiumSelection } from "../json-data/premium-selection";



export const PerimumSeriesSelector = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    return (
        <div className="mt-[120px] mx-[60px]">
            <div className="flex justify-around items-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                    Our Premium Selection:{" "}
                    <span className="italic text-[#B38934] font-light">
                        Fresh & Marinated
                    </span>
                </h2>
            
            </div>

            <div className="flex flex-row justify-between gap-6">
                <div className="w-full border border-[#2f2f2f] rounded-2xl p-6 flex flex-col justify-between shadow-lg gap-2 bg-[#191919]">
                {premiumSelection.map((card, index) => {
                    const isSelected = selectedIndex === index;
                    return (
                        <div 
                            key={index} 
                            className={`flex flex-col gap-4 p-4 rounded-lg cursor-pointer  ${isSelected ? 'bg-linear-to-r from-[#B38934] to-[#e6ca79]' : ''}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <div className="flex flex-row gap-7 justify-between transition-colors">
                                <div className={`flex flex-row gap-7 items-center transition-colors ${
                                    isSelected ? 'text-[#B38934]' : 'text-white'
                                }`}>
                                    {/* Image */}
                                    <img 
                                        src={card.img_url} 
                                        alt={card.title} 
                                        className={`w-12 h-12 object-contain transition-all ${
                                            isSelected ? 'brightness-125' : ''
                                        }`}
                                    />
                                    
                                    {/* Title */}
                                    <h3 className={`text-lg font-bold uppercase text-white`}>
                                        {card.title}
                                    </h3>
                                </div>
                                {isSelected &&
                                    <img src="/icons/arrow-up.svg" alt="" />
                                }
                                {!isSelected &&
                                    <img src="/icons/arrow-right.svg" alt="" />
                                }
                            </div>
                            {/* Description - only show if selected */}
                            {isSelected && (
                                <p className="text-[15px] text-white">
                                    {card.description}
                                </p>
                            )}
                            {!isSelected && <div className="border border-[#2f2f2f] mt-2"/>}
                        </div>
                    );
                })}
                </div>
                <img src="/images/premium-meat.png" alt="" className=""/>
            </div>
        </div>
    );
}