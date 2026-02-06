"use client";

import { useEffect, useRef } from "react";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import { bestSellerData } from "../json-data/best-seller";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BestSeller = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Utility to check if it's a mobile screen
  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    if (!isMobile()) {
      // Scroll animation for desktop/tablet
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.from(".bestseller-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        }).from(
          ".bestseller-card",
          {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5",
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        mt-20 sm:mt-24 lg:mt-32
        px-4 sm:px-8 md:px-12 xl:px-16 2xl:px-24
      "
    >
      {/* Title */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <h2 className="font-satoshi bestseller-title text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">
          Popular{" "}
          <span className="font-clearface italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light">
            Selling Items
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6 lg:gap-8
          mb-25 md:mb-30 lg:mb-40
        "
      >
        {bestSellerData.map((card, index) => {
          const cardRef = useRef<HTMLDivElement>(null);

          // Only add hover effect if not mobile
          const handleHoverIn = () => {
            if (isMobile() || !cardRef.current) return;

            gsap.to(cardRef.current, {
              y: -8,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
              borderColor: "rgba(183, 142, 57, 0.6)",
              boxShadow: "0px 12px 20px rgba(183, 142, 57, 0.2)",
            });
          };

          const handleHoverOut = () => {
            if (isMobile() || !cardRef.current) return;

            gsap.to(cardRef.current, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
              borderColor: "#2f2f2f",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
            });
          };

          return (
            <div
              key={index}
              ref={cardRef}
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
              className="
                bestseller-card relative
                border border-[#2f2f2f]
                rounded-2xl overflow-hidden
                bg-[#1B1B1B] shadow-lg
                flex flex-col
              "
            >
              {/* Image */}
              <div className="p-3">
                <img
                  src={card.img_url}
                  alt={card.title}
                  className="w-full h-48 sm:h-45 lg:h-50 object-cover rounded-t-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-300 flex-1">
                  {card.description}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <a href="https://dhesimeats.restaurantsolutions.ca/">
                    <span className="text-lg sm:text-base bg-linear-to-l p-0.5 from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light italic">
                      {card.detail}
                    </span>
                  </a>

                  <PrimaryButton
                    primaryColor="#d4a64a"
                    text={card.button.text}
                    gradientToWhite={card.button.isGradient}
                    className="uppercase tracking-wider text-xs sm:text-sm"
                    href="https://dhesimeats.restaurantsolutions.ca/"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
