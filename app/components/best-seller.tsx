"use client";

import { useEffect, useRef } from "react";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import { bestSellerData } from "../json-data/best-seller";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BestSeller = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div ref={sectionRef} className="mt-[120px] mx-[60px]">
      <div className="flex justify-around items-center mb-8">
        <h2 className="font-satoshi bestseller-title text-3xl md:text-5xl font-bold leading-tight text-white">
          Best{" "}
          <span className="font-clearface italic text-[#B38934] font-light">
            Seller
          </span>
        </h2>
      </div>

      {/* Cards grid - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-42">
        {bestSellerData.map((card, index) => (
          <div
            key={index}
            className="bestseller-card border border-[#2f2f2f] rounded-2xl pt-2 pl-4 pr-4 flex flex-col justify-between shadow-lg
                         h-full bg-[#1B1B1B]"
          >
            <img src={card.img_url} alt={card.title} className="h-[210px]" />

            <div className="flex flex-col justify-between p-4">
              <h3 className="text-lg md:text-xl font-extrabold text-white">
                {card.title} <br />
              </h3>
              <p className="text-sm text-gray-300 font-light">
                {card.description}
              </p>
              <div className="flex flex-row justify-between items-center mt-4">
                <h1 className="text-2xl text-white">${card.price}</h1>
                <PrimaryButton
                  primaryColor="#d4a64a"
                  text={card.button.text}
                  gradientToWhite={card.button.isGradient}
                  className="uppercase tracking-wider"
                  href="https://dhesimeat.cloudwaitress.com/"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
