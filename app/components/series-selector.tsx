"use client";

import { useEffect, useRef } from "react";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import { dummyCardData } from "../json-data/series-selector";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SeriesSelector = () => {
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

      tl.from(".series-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".series-subtitle",
          { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          ".series-card",
          {
            y: 60,
            opacity: 0,
            immediateRender: false,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover animations for cards - separate effect to ensure refs are populated
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
  }, [dummyCardData]);

  return (
    <div ref={sectionRef} className="mt-[120px] mx-[60px]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-satoshi series-title text-3xl md:text-5xl font-bold leading-tight text-white">
          The Series{" "}
          <span className="font-clearface italic text-[#B38934] font-light">
            Selector
          </span>
        </h2>
        <p className="series-subtitle font-bold text-white">
          Desi Meat{" "}
          <span className="font-light">– What's your purpose today</span>
        </p>
      </div>

      {/* Cards grid - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-42">
        {dummyCardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="series-card border border-[#2f2f2f] rounded-2xl p-6 flex flex-row justify-between shadow-lg
                         h-full bg-linear-to-r from-[#B78E39]/20 to-[#161616] cursor-pointer transition-all"
            style={{ opacity: 1 }}
          >
            {/* bg-linear-gradient(to right,, #343434) */}
            <div className="flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-extrabold text-white">
                {card.title} <br />
                <span className="text-sm text-gray-300 font-light">
                  {card.description}
                </span>
              </h3>
              <PrimaryButton
                primaryColor="#d4a64a"
                text={card.button.text}
                gradientToWhite={card.button.isGradient}
                className="uppercase tracking-wider"
                href="https://dhesimeat.cloudwaitress.com/"
              />
            </div>

            <img src={card.img_url} alt={card.title} className="h-[200px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
