import { PrimaryButton } from "@/app/components/ui/primary-button";

interface SeriesSelectorCard {
    title: string;
    description: string;
    button: {
        text: string;
        isGradient: boolean;
        isPrimary: boolean;
    };
    img_url: string;
}



export const SeriesSelector = () => {
    const dummyCardData: SeriesSelectorCard[] = [
        {
            title: 'FIT',
            description: 'For Gym & Clean Eating',
            button: {
                text: 'Order Online',
                isGradient: true,
                isPrimary: true,
            },
            img_url: '/images/main-steak.png',
        },
        {
            title: 'BALANCE',
            description: 'For Everyday Family Meds',
            button: {
                text: 'Order Online',
                isGradient: true,
                isPrimary: true,
            },
            img_url: '/images/main-steak.png',
        },
        {
            title: 'FEAST',
            description: 'For BBQs & Gathering',
            button: {
                text: 'Order Online',
                isGradient: true,
                isPrimary: true,
            },
            img_url: '/images/main-steak.png',
        }
    ];

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
                {dummyCardData.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#2f2f2f] rounded-2xl p-4 flex flex-row justify-between shadow-lg h-[200px] "
                        style={{backgroundImage:'linear-gradient(to right, #141008, #343434)'}}
                    >
                        <div className="flex flex-col justify-between">
                            
                            <h3 className="text-lg md:text-xl font-semibold text-white capitalize">
                                {card.title} <br />
                                <span className="text-sm text-gray-300">
                                {card.description}</span>
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