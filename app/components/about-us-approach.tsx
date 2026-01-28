"use client";

import { useEffect, useRef } from "react";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import { AboutUsApproachCardData } from "../json-data/about-us-approach";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { YellowGlow } from "./ui/yellow-glow";

gsap.registerPlugin(ScrollTrigger);

export const AboutUsApproach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".order-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }).fromTo(
        ".order-card",
        {
          y: 60,
          opacity: 0,
          immediateRender: false,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hoverHandlers: Array<{
      card: HTMLDivElement;
      enter: () => void;
      leave: () => void;
    }> = [];

    cardRefs.current.forEach((card) => {
      if (card) {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            y: -8,
            boxShadow: "0 20px 40px rgba(179, 137, 52, 0.3)",
            borderColor: "rgba(179, 137, 52, 0.5)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderColor: "#2f2f2f",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        hoverHandlers.push({
          card,
          enter: handleMouseEnter,
          leave: handleMouseLeave,
        });
      }
    });

    return () => {
      hoverHandlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [AboutUsApproachCardData]);

  return (
    <div
      ref={sectionRef}
      className="relative mt-20 lg:mt-30 lg:mb-30  px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48"
    >
      <YellowGlow
        className="
        top-[-20%] 
            md:top-[-15%] 
            lg:top-[-60%] 
            left-2 -translate-x-1/2  
            w-[480px] h-[480px]
            
            md:w-[520px] md:h-[520px]
            lg:w-[520px] lg:h-[720px]
            
            z-0
          "
      />
      <div className="flex justify-center items-center mb-8">
        <h2 className="order-title font-satoshi text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white text-center">
          Our Three-Pillar{" "}
          <span className="font-clearface italic text-[#B38934] font-light">
            Approach
          </span>
        </h2>
      </div>

      <div className="text-center mb-16">
        <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-sm lg:hidden">
          Discover how simple it is to get the best products delivered straight
          to your door. From choosing to receiving, we make the entire process
          seamless.
        </p>
      </div>
      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mb-16">
        {AboutUsApproachCardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="order-card border border-[#2f2f2f] rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center shadow-lg h-full bg-gradient-to-r from-[#B78E39]/20 to-[#161616] gap-4 cursor-pointer transition-all"
          >
            <img
              src={card.icon_url}
              alt={card.title}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">
              {card.title}
            </h3>
            <p className="text-sm sm:text-md md:text-lg text-gray-300 font-light text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
