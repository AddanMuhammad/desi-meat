"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Custom Cuts & Bulk Orders",
    description:
      "Choose exactly how you want it, whether for home or bulk needs.",
    icon: "/icons/why-choose-us1.svg",
  },
  {
    title: "Freshly Prepared Every Day",
    description:
      "Chicken is cut, cleaned, and prepared daily for maximum freshness.",
    icon: "/icons/why-choose-us2.svg",
  },
  {
    title: "Trusted by Families & Fitness Clients",
    description:
      "Quality protein trusted by households and health-focused customers.",
    icon: "/icons/why-choose-us3.svg",
  },
  {
    title: "Clean Marinades, Balanced Spice",
    description:
      "No overpowering flavors — just controlled, well-balanced seasoning.",
    icon: "/icons/why-choose-us4.svg",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".why-title",
          { y: 40, opacity: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .from(
          ".why-desc",
          { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5",
        )
        .from(
          ".promise-block",
          { x: -50, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5",
        )
        .from(
          ".feature-item",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-7 md:py-13 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/why-choose-us.png"
          alt="Fresh Meat"
          fill
          className="object-cover hidden lg:block"
          priority
        />
        <Image
          src="/images/why-choose-us2.png"
          alt="Fresh Meat"
          fill
          className="object-cover lg:hidden"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-center lg:justify-end px-4 sm:px-6 md:px-10 lg:px-16">
        <div
          ref={cardRef}
          className="rounded-3xl bg-black/60 backdrop-blur-xl w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10"
        >
          <h2 className="why-title mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white font-satoshi">
            Why Choose{" "}
            <span className="text-[#d4af37] italic font-clearface">Us?</span>
          </h2>

          <p className="why-desc mb-8 max-w-full text-sm sm:text-base md:text-lg font-extralight text-gray-300/70">
            Freshly prepared chicken, clean marinades, and custom cuts you can
            trust—every single day.
          </p>

          <div className="promise-block mb-8 gap-2 sm:gap-4">
            <p className="text-sm sm:text-base font-semibold text-white">
              WHAT WE PROMISE:
            </p>
            <div className="flex-1 border-t-2 border-dotted border-gray-300/70 mt-1 sm:mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="feature-item flex items-start gap-3 sm:gap-4"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />

                <div>
                  <h4 className="mb-1 mt-1 font-semibold text-[#d4af37] text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
