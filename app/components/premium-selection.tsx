import { PrimaryButton } from "@/app/components/ui/primary-button";
import { dummyCardData } from "../json-data/series-selector";


export const PerimumSeriesSelector = () => {
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

            {/* Cards grid - 3 per row */}
            <div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                    <img src="arrow" alt="" />
                    {/* selected.description */}
                </div>
                <img src="" alt="" />
            </div>
        </div>
    );
}