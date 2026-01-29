"use client";
import { useState, useEffect, useRef } from "react";
import { premiumSelection } from "../json-data/premium-selection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { YellowGlow } from "./ui/yellow-glow";

gsap.registerPlugin(ScrollTrigger);

export const PerimumSeriesSelector = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const selectedIndexRef = useRef<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLImageElement | null)[]>([]);

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
      tl.from(".premium-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(
          ".premium-content",
          { x: -50, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(".premium-image", { x: 50, opacity: 0, duration: 0.7 }, "-=0.5");
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const enter = () => {
        if (selectedIndexRef.current !== index) {
          gsap.to(card, {
            backgroundColor: "rgba(179,137,52,0.15)",
            scale: 1.02,
            y: -4,
            duration: 0.3,
          });
        }
      };
      const leave = () => {
        if (selectedIndexRef.current !== index) {
          gsap.to(card, {
            backgroundColor: "transparent",
            scale: 1,
            y: 0,
            duration: 0.3,
          });
        }
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);
  useEffect(() => {
    premiumSelection.forEach((_, index) => {
      const card = cardRefs.current[index];
      const description = descriptionRefs.current[index];
      const arrow = arrowRefs.current[index];
      const isSelected = selectedIndex === index;
      if (card) {
        gsap.to(card, {
          backgroundColor: isSelected ? "rgba(179,137,52,0.3)" : "transparent",
          duration: 0.3,
        });
      }
      if (description) {
        if (isSelected) {
          gsap.set(description, { height: "auto" });
          const h = description.scrollHeight;
          gsap.set(description, { height: 0, opacity: 0 });
          gsap.to(description, {
            height: h,
            opacity: 1,
            duration: 0.4,
            onComplete: () => {
              gsap.set(description, { height: "auto" });
            },
          });
        } else {
          gsap.to(description, { height: 0, opacity: 0, duration: 0.3 });
        }
      }
      if (arrow) {
        gsap.to(arrow, { rotation: isSelected ? 180 : 0, duration: 0.3 });
      }
    });
  }, [selectedIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-14 xl:px-20 2xl:px-32"
    >
      <YellowGlow
        className="
    lg:top-60
    md:top-40
    md:right-[-30%]
    top-40
    lg:right-[-25%]
    right-[-50%]
    -translate-y-1/2
    w-[480px] h-[480px]
    md:w-[520px] md:h-[520px]
    lg:w-[600px] lg:h-[720px]
    -z-10
  "
      />
      {/* Title */}
      <div className="relative z-10">
        <div className="flex justify-center mb-10">
          <h2 className="premium-title text-center font-satoshi text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight ">
            Our Premium Selection:{" "}
            <p className=" font-clearface italic text-[#B38934] lg:inline font-light">
              Fresh & Marinated
            </p>
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 items-stretch">
          {/* Left Cards */}
          <div className="premium-content w-full lg:w-1/2 border border-[#2f2f2f] rounded-2xl p-4 sm:p-6 bg-[#191919] shadow-lg space-y-2">
            {premiumSelection.map((card, index) => {
              const isSelected = selectedIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => setSelectedIndex(index)}
                  className={`p-4 sm:p-5 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-linear-to-r from-[#B38934] to-[#e6ca79]"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={card.img_url}
                        alt={card.title}
                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                      />
                      <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase text-white">
                        {card.title}
                      </h3>
                    </div>

                    <img
                      ref={(el) => {
                        arrowRefs.current[index] = el;
                      }}
                      src={
                        isSelected
                          ? "/icons/arrow-up.svg"
                          : "/icons/arrow-right.svg"
                      }
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      alt=""
                    />
                  </div>

                  <p
                    ref={(el) => {
                      descriptionRefs.current[index] = el;
                    }}
                    className="text-sm sm:text-[15px] text-white mt-3 overflow-hidden"
                    style={{ height: 0, opacity: 0 }}
                  >
                    {card.description}
                  </p>

                  {!isSelected && (
                    <div className="border border-[#2f2f2f] mt-3" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/premium-meat.png"
              alt=""
              className="premium-image w-full max-w-md sm:max-w-lg md:max-w-full xl:max-w-xl h-[280px] sm:h-[360px] md:h-[450px] lg:h-[520px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
