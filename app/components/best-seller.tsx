import { PrimaryButton } from "@/app/components/ui/primary-button";
import { bestSellerData } from "../json-data/best-seller";


export const BestSeller = () => {
    return (
        <div className="mt-[120px] mx-[60px]">
            <div className="flex justify-around items-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                    Best{" "}
                    <span className="italic text-[#B38934] font-light">
                        Seller
                    </span>
                </h2>
                
            </div>

            {/* Cards grid - 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-42">
                {bestSellerData.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#2f2f2f] rounded-2xl pt-2 pl-3 pr-3 flex flex-col justify-between shadow-lg
                         h-full bg-linear-to-r from-[#B78E39]/20 to-[#161616]"
                        
                    >
                        <img
                                src={card.img_url}
                                alt={card.title}
                                className="h-full"
                            />
                         
                        <div className="flex flex-col justify-between p-4">
                            <h3 className="text-lg md:text-xl font-extrabold text-white">
                                {card.title} <br />
                                <span className="text-sm text-gray-300 font-light">
                                    {card.description}
                                </span>
                            </h3>
                            <div className="flex flex-row justify-between items-center mt-6">
                            <h1 className="text-2xl">${card.price}</h1>
                            <PrimaryButton
                                primaryColor="#d4a64a"
                                text={card.button.text}
                                gradientToWhite={card.button.isGradient}
                                className="uppercase tracking-wider"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}