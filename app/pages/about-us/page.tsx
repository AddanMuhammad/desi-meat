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
    <div>
      <NavBar />
      <div className="border-t border-gray-500/90" />
      <section className="w-full text-white">
        <div className="max-w-7xl h-screen mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-120">
            <Image
              src="/images/person.png"
              alt="Chef"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="h-120 overflow-hidden relative mt-10">
            {/* Badge */}
            <span className="inline-block mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
              OUR STORY
            </span>

            {/* Heading */}
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
              More Than a{" "}
              <span className=" italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
                Butcher Shop
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm text-justify">
              Welcome to Desi Meats Fleetwood—your modern neighborhood protein
              studio. We're not just another meat shop; we're a culinary partner
              for your lifestyle.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm text-justify mb-6">
              Founded with a passion for quality and a vision for convenience,
              we recognized that today’s busy families, health-conscious
              individuals, and entertainers need more than just raw ingredients.
              They need solutions.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm text-justify mb-10">
              Located in the heart of Fleetwood, Surrey BC, we bridge the gap
              between traditional butcher craftsmanship and contemporary,
              flavor-forward convenience. Every cut is prepared fresh daily,
              every marinade is crafted in small batches, and every order is
              tailored to your needs.
            </p>

            {/* CTA */}
            <PrimaryButton
              primaryColor="#d4a64a"
              text="ORDER ONLINE"
              className="uppercase tracking-wider"
              gradientToWhite={true}
            />
          </div>
        </div>

        <div className="bg-black">
          <div className="max-w-7xl   mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-120">
              <Image
                src="/images/about-us1.png"
                alt="Chef"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="h-120 overflow-hidden relative mt-10">
              {/* Badge */}
              <span className="inline-block mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
                OUR PHILOSOPHY
              </span>

              {/* Heading */}
              <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
                The Dhesi{" "}
                <span className=" italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
                  Difference
                </span>
              </h2>

              <div className="promise-block mb-8 gap-4">
                <p className="text-base font-semibold text-white">
                  WHAT WE PROMISE:
                </p>
                <div className="flex-1 border-t-2 border-dotted border-gray-300/70 mt-2" />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {features.map((item) => (
                  <div key={item.title} className="feature-item">
                    <div>
                      <h4 className="mb-1 mt-2 font-semibold text-[#d4af37]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300 text-justify">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] overflow-hidden">
          {/* Background image */}
          <img
            src="/images/about-us2.png"
            alt="About us background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col justify-center h-full">
            {/* Text content */}
            <div className="max-w-3xl px-6 sm:px-10 md:px-24">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">
                Meet Our{" "}
                <span className="italic text-[#d4a64a] font-light">Team</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 mt-4 sm:mt-5 max-w-xl text-justify">
                Our skilled butchers and marinade artisans bring years of
                expertise and a genuine passion for food. We're here to offer
                advice, custom-cut to your specifications, and ensure you leave
                with exactly what you need for your meal.
              </p>
            </div>

            {/* Button */}
            <div className="px-6 sm:px-10 md:px-24 mt-6 sm:mt-8">
              <PrimaryButton
                primaryColor="#d4a64a"
                text="ORDER ONLINE"
                className="uppercase tracking-wider text-xs sm:text-sm"
                gradientToWhite
              />
            </div>
          </div>
        </div>

        <Testimonials />
      </section>

      <div className="border-t border-gray-500/90" />
      <Footer />
    </div>
  );
};

export default AboutUs;
