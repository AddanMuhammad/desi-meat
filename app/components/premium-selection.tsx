"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { premiumSelection } from "../json-data/premium-selection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { YellowGlow } from "./ui/yellow-glow";

gsap.registerPlugin(ScrollTrigger);
const imageCache = new Map<string, HTMLImageElement>();

export const PerimumSeriesSelector = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const selectedIndexRef = useRef<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve) => {
      const cached = imageCache.get(src);
      if (cached && cached.complete) {
        resolve(cached);
        return;
      }

      const img = cached ?? new Image();
      img.src = src;

      img.onload = () => {
        imageCache.set(src, img);
        resolve(img);
      };
    });

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

      // Title animation
      tl.from(".premium-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        // Left content animates from LEFT
        .from(
          leftContentRef.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        // Right image animates from RIGHT
        .from(
          rightImageRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex(index);
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
    premiumSelection.forEach((item) => {
      if (!imageCache.has(item.preview_img)) {
        const img = new Image();
        img.src = item.preview_img;
        imageCache.set(item.preview_img, img);
      }
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

  useEffect(() => {
    if (!imageRef.current || selectedIndex === null) return;

    const imgEl = imageRef.current;
    const nextSrc = premiumSelection[selectedIndex].preview_img;

    const tl = gsap.timeline();

    // Animate current image OUT
    tl.to(imgEl, {
      opacity: 0,
      scale: 0.97,
      y: 10,
      duration: 0.35,
      ease: "power2.in",
    });

    // Load next image BEFORE switching
    loadImage(nextSrc).then(() => {
      imgEl.src = nextSrc;

      // Animate new image IN
      tl.fromTo(
        imgEl,
        { opacity: 0, scale: 1.03, y: -10 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    });

    return () => {
      tl.kill();
    };
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
    w-120 h-120
    md:w-130 md:h-130
    lg:w-150 lg:h-180
    -z-10
  "
      />
      {/* Title */}
      <div className="relative z-10">
        <div className="flex justify-center mb-10">
          <h2 className="premium-title text-center font-satoshi text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight ">
            Our Premium Selection:{" "}
            <p className=" font-clearface italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent lg:inline font-light">
              Fresh & Marinated
            </p>
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-10 items-stretch">
          {/* Left Cards */}
          <div
            ref={leftContentRef}
            className="premium-content w-full lg:w-1/2 border border-[#2f2f2f] rounded-2xl p-4 sm:p-6 bg-[#191919] shadow-lg space-y-2"
          >
            {premiumSelection.map((card, index) => {
              const isSelected = selectedIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => handleSelect(index)}
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
          <div
            ref={rightImageRef}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              ref={imageRef}
              src={
                selectedIndex !== null
                  ? premiumSelection[selectedIndex].preview_img
                  : "/images/premium-meat.png"
              }
              alt={premiumSelection[selectedIndex ?? 0].title}
              className="
      premium-image
      w-full
      max-w-md sm:max-w-lg md:max-w-full xl:max-w-xl
      h-70 sm:h-90 md:h-112.5 lg:h-130
      object-cover
      rounded-xl
    "
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
