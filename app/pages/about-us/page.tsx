import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="border-t border-gray-500/90" />
      <section className="w-full text-white py-10">
        <div className="max-w-7xl  mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <p className="text-gray-300 leading-relaxed text-sm">
              Welcome to Desi Meats Fleetwood—your modern neighborhood protein
              studio. We're not just another meat shop; we're a culinary partner
              for your lifestyle.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm mb-6">
              Founded with a passion for quality and a vision for convenience,
              we recognized that today’s busy families, health-conscious
              individuals, and entertainers need more than just raw ingredients.
              They need solutions.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm mb-10">
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
      </section>

      <div className="border-t border-gray-500/90" />
      <Footer />
    </div>
  );
};

export default AboutUs;
