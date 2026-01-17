import { PrimaryButton } from "./ui/primary-button";

const SubFooter = () => {
  return (
    <section>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background image behind navbar and content */}
        <img
          src="/images/subFooter.png"
          className="absolute inset-0 w-full h-7xl object-cover -z-10"
        />

        <div className="relative z-10 flex flex-col h-full mt-15">
          {/* Text content */}
          <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Elevate Your{" "}
              <span className="italic text-[#d4a64a] font-light">
                Wellness with Meat
              </span>
              <br />
            </h1>
            <p className="text-sm md:text-base text-gray-200 mt-5">
              Pure olive oil packed with 800+ mg/kg polyphenols to support heart
              health and longevity.
            </p>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24 mt-15">
            <p className="text-sm md:text-2xl font-bold leading-tight text-white">
              BENEFITS OF A SUBSCRIPTION
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex justify-center items-center gap-3">
                <img src="/icons/subFooter1.svg" alt="" />
                <p className="text-gray-200 text-sm">Freshly cut after order</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="/icons/subFooter2.svg" alt="" />
                <p className="text-gray-200 text-sm">
                  Wide variety quality meats
                </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src="/icons/subFooter2.svg" alt="" />
                <p className="text-gray-200 text-sm">
                  Real-time freshness tracking
                </p>
              </div>
            </div>
            <div className="mt-8">
              <PrimaryButton
                primaryColor="#d4a64a"
                text="ORDER ONLINE"
                // onClick={}
                className="uppercase tracking-wider"
                gradientToWhite={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
