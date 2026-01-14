import { NavBar } from "@/app/components/ui/navbar";
import { PrimaryButton } from "@/app/components/ui/primary-button";

export default function HomePage(){
    console.log("in home page")
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background image behind navbar and content */}
            <img
                src="/images/main-steak.png"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            <NavBar />
            <div className="relative z-10 flex h-full mt-32">
                {/* Text content */}
                <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                        Fresh • Marinated •{" "}
                        <span>
                            Lifestyle-
                        </span>
                        <span className="italic text-[#d4a64a] font-light">
                            Focused Meats in Surrey, BC
                        </span>
                        <br />
                        
                    </h1>
                    <p className="text-sm md:text-base text-gray-200">
                        Your modern neighborhood meat studio. Choose from FIT, <br />
                        BALANCE, or FEAST series.
                    </p>
                    <PrimaryButton
                        primaryColor="#B38934"
                        text="ORDER ONLINE"
                        // onClick={}
                        className="uppercase tracking-wider mt-4"
                        gradientToWhite={true}
                    />
                </div>
            </div>
        </div>
    );
}