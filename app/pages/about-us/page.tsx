import { AboutUsApproach } from "@/app/components/about-us-approach";
import { NavBar } from "@/app/components/navbar";
import Testimonials from "@/app/components/testimonials";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import Image from "next/image";

const features = [
  {
    title: "Quality First",
    description:
      "Carefully sourced proteins, prepared fresh in a clean, controlled environment.",
  },
  {
    title: "Flavor with Purpose",
    description:
      "Balanced marinades designed for fitness meals or bold family feasts.",
  },
  {
    title: "Community Focused",
    description:
      "Proudly serving local families, fitness enthusiasts, and celebrations in Fleetwood.",
  },
  {
    title: "Prepared Your Way",
    description:
      "Custom cuts, spice levels, and bulk options tailored to your needs.",
  },
];

const AboutUs = () => {
  return (
    <div className=" text-white">
      <NavBar />
      <div className="border-t border-gray-500/90" />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-0  grid grid-cols-1 lg:grid-cols-2 sm:gap-3 lg:gap-9 items-center">
        {/* Image */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
          {/* Mobile Image */}
          <Image
            src="/images/person2.png"
            alt="Chef Mobile"
            fill
            className="object-contain block lg:hidden"
            priority
          />

          {/* Desktop Image */}
          <Image
            src="/images/person.png"
            alt="Chef Desktop"
            fill
            className="object-contain hidden lg:block"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-xl mx-auto lg:mx-0 mb-5">
          <span className="inline-block mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
            OUR STORY
          </span>

          <h2 className="font-satoshi text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            More Than a{" "}
            <span className="font-clearface italic font-light p-0.5 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
              Butcher Shop
            </span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-300 text-justify">
            <p>
              Welcome to Dhesi Meats Fleetwood—your modern neighborhood protein
              studio. We're not just another meat shop; we're a culinary partner
              for your lifestyle.
            </p>
            <p>
              Founded with a passion for quality and a vision for convenience,
              we recognized that today's busy families, health-conscious
              individuals, and entertainers need more than just raw ingredients.
              They need solutions.
            </p>
            <p>
              Located in the heart of Fleetwood, Surrey BC, we bridge the gap
              between traditional butcher craftsmanship and contemporary,
              flavor-forward convenience. Every cut is prepared fresh daily,
              every marinade is crafted in small batches, and every order is
              tailored to your needs.
            </p>
          </div>

          <div className="mt-8">
            <PrimaryButton
              primaryColor="#d4a64a"
              text="ORDER ONLINE"
              className="uppercase tracking-wider mb-5"
              gradientToWhite
              href="https://dhesimeats.restaurantsolutions.ca/"
            />
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[5/4]  lg:aspect-[4/3] ">
            <Image
              src="/images/about-us1.png"
              alt="Philosophy"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl">
            <span className="inline-block mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
              OUR PHILOSOPHY
            </span>

            <h2 className="font-satoshi text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              The Dhesi{" "}
              <span className="font-clearface p-0.5 italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light">
                Difference
              </span>
            </h2>

            <p className="text-gray-300 lg:hidden mb-6">
              Freshly prepared chicken, clean marinades, and custom cuts you can
              trust—every single day.
            </p>

            <p className=" font-semibold">WHAT WE PROMISE:</p>
            <div className="flex-1 border-t-2 border-dotted border-gray-300/70 mb-6" />

            <div className="grid grid-cols-2 gap-6">
              {features.map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-end lg:items-center pb-8">
        <img
          src="/images/about-us2.png"
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/images/about-us3.png"
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover object-top  lg:hidden"
        />

        <div className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-10 xl:px-24">
          <h1 className="font-satoshi text-2xl sm:text-3xl md:text-5xl font-bold">
            Meet Our{" "}
            <span className="font-clearface italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light">
              Team
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-200 max-w-xl">
            Our skilled butchers and marinade artisans bring years of expertise
            and a genuine passion for food. We're here to offer advice,
            custom-cut to your specifications, and ensure you leave with exactly
            what you need for your meal.
          </p>

          <div className="mt-6">
            <PrimaryButton
              primaryColor="#d4a64a"
              text="ORDER ONLINE"
              className="uppercase tracking-wider text-sm"
              gradientToWhite
              href="https://dhesimeats.restaurantsolutions.ca/"
            />
          </div>
        </div>
      </section>

      <AboutUsApproach />
      <Testimonials />

      <div className="border-t border-gray-500/90" />
      <Footer />
    </div>
  );
};

export default AboutUs;
