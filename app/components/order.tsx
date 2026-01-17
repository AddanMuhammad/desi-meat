import { PrimaryButton } from "@/app/components/ui/primary-button";
import { dummyCardData } from "../json-data/series-selector";


export const Order = () => {
    return (
        <div className="mt-[120px] mx-[60px]">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                    The Series{" "}
                    <span className="italic text-[#B38934] font-light">
                        Selector
                    </span>
                </h2>
                <p className="font-bold text-white">
                    Desi Meat{" "}
                    <span className="font-light">
                        – What's your purpose today
                    </span>
                </p>
            </div>

            {/* Cards grid - 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-42">
                {dummyCardData.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#2f2f2f] rounded-2xl p-6 flex flex-row justify-between shadow-lg
                         h-[230px] bg-linear-to-r from-[#B78E39]/20 to-[#161616]"
                        
                    >
                        {/* bg-linear-gradient(to right,, #343434) */}
                        <div className="flex flex-col justify-between">
                            
                            <h3 className="text-lg md:text-xl font-extrabold text-white">
                                {card.title} <br />
                                <span className="text-sm text-gray-300 font-light">
                                    {card.description}
                                </span>
                            </h3>
                            <PrimaryButton
                                primaryColor="#d4a64a"
                                text={card.button.text}
                                gradientToWhite={card.button.isGradient}
                                className="uppercase tracking-wider"
                            />
                        </div>

                        
                        <img
                                src={card.img_url}
                                alt={card.title}
                                className="w-1/2 h-full"
                            />
                    </div>
                ))}
            </div>
        </div>
    );
}