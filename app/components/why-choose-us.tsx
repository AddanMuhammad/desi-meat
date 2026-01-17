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
      // Timeline for scroll-triggered animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // when top of section hits 75% of viewport
          end: "bottom 25%", // optional, for leaving animation
          toggleActions: "play reverse play reverse", // triggers every time entering/leaving
          // play = scroll into view
          // reverse = scroll out of view
          // play = scroll into view again
          // reverse = scroll out again
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
          "-=0.6"
        )
        .from(
          ".why-desc",
          { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          ".promise-block",
          { x: -50, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5"
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
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-5 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/why-choose-us.png"
          alt="Fresh Meat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="flex justify-end relative z-10 h-full w-full px-5 md:px-10">
        <div
          ref={cardRef}
          className="rounded-3xl bg-black/60 backdrop-blur-xl w-3xl p-10 shadow-2xl border border-white/10"
        >
          <h2 className="why-title mb-4 text-5xl font-bold text-white">
            Why Choose <span className="text-[#d4af37] italic">Us?</span>
          </h2>

          <p className="why-desc mb-8 max-w-2xl text-base font-extralight text-gray-300/70">
            Freshly prepared chicken, clean marinades, and custom cuts you can
            trust—every single day.
          </p>

          <div className="promise-block mb-8 gap-4">
            <p className="text-base font-semibold text-white">
              WHAT WE PROMISE:
            </p>
            <div className="flex-1 border-t-2 border-dotted border-gray-300/70 mt-2" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((item) => (
              <div key={item.title} className="feature-item">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
                <div>
                  <h4 className="mb-1 mt-2 font-semibold text-[#d4af37]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-300">{item.description}</p>
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
