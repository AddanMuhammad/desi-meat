"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { orderCardData } from "../json-data/order";

gsap.registerPlugin(ScrollTrigger);

export const Order = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bagRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardRefs.current;
    const numCards = cards.length;
    const midIndex = (numCards - 1) / 2;

    gsap.set(cards, { xPercent: 0, yPercent: 0 });
    gsap.set(gridRef.current, { yPercent: 0, opacity: 1 });
    gsap.set(bagRef.current, { yPercent: 120, opacity: 0 });

    // --- Responsive animation ---
    const mm = gsap.matchMedia(); // create instance

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        const offset = (i - midIndex) * 110;
        tl.to(card, { xPercent: -offset, ease: "power1.out" }, 0);
      });

      tl.to(gridRef.current, { yPercent: 60, ease: "power1.out" }, 0)
        .to(
          bagRef.current,
          { yPercent: 0, opacity: 1, ease: "power2.out" },
          0.4,
        )
        .to(
          gridRef.current,
          { opacity: 0, scale: 0.95, ease: "power2.out" },
          0.4,
        );

      return () => {
        tl.scrollTrigger?.kill();
      };
    });

    return () => {
      mm.revert(); // cleanup matchMedia
    };
  }, []);

  // Hover animations
  useEffect(() => {
    const hoverHandlers: Array<{
      card: HTMLDivElement;
      enter: () => void;
      leave: () => void;
    }> = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;

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
    });

    return () => {
      hoverHandlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [orderCardData]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-6 md:px-16 flex flex-col justify-center"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="order-title text-4xl md:text-6xl font-bold text-white">
          How To <span className="italic text-[#B38934] font-light">Order</span>
        </h2>
        <p className="max-w-3xl mx-auto mt-6 text-gray-300">
          Follow these simple steps to place your order.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
      >
        {orderCardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }} // ✅ ref callback returns void
            className="order-card border border-[#2f2f2f] rounded-2xl p-8 flex flex-col justify-between items-center shadow-lg
                       h-full bg-gradient-to-br from-[#B78E39]/20 to-[#161616] gap-4 cursor-pointer will-change-transform"
          >
            <img src={card.icon_url} alt={card.title} className="" />
            <h3 className="text-lg md:text-xl font-extrabold text-white">
              {card.title}
            </h3>
            <p className="text-md text-gray-300 font-light text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bag Image */}
      <div
        ref={bagRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
      >
        <img
          src="/images/bag.png"
          alt="Bag"
          className="w-[280px] md:w-[520px]"
        />
      </div>
    </section>
  );
};
