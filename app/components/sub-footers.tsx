"use client";

import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "./ui/primary-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SubFooter = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [vintageEffect, setVintageEffect] = useState<string>("sepia"); // Default effect

  // Optional: Function to cycle through effects (if you want interactive)
  // const cycleVintageEffect = () => {
  //   const effects = ["sepia", "vintage", "warm", "classic", "aged"];
  //   const currentIndex = effects.indexOf(vintageEffect);
  //   const nextIndex = (currentIndex + 1) % effects.length;
  //   setVintageEffect(effects[nextIndex]);
  // };

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

      tl.from(".subfooter-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".subfooter-desc",
          { y: 30, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.5",
        )
        .from(
          ".subfooter-benefits-title",
          { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .from(
          ".subfooter-benefit",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".subfooter-button",
          { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // CSS classes for different vintage effects
  const vintageEffects = {
    sepia: "sepia-vintage-effect",
    vintage: "premium-vintage-effect",
    warm: "warm-vintage-effect",
    classic: "classic-vintage-effect",
    aged: "aged-paper-effect",
  };

  return (
    <section ref={sectionRef}>
      <style jsx>{`
        /* Base vintage overlay */
        .vintage-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(179, 137, 52, 0.08) 0%,
            rgba(232, 204, 123, 0.05) 25%,
            rgba(0, 0, 0, 0.05) 50%,
            rgba(139, 69, 19, 0.03) 75%
          );
          mix-blend-mode: overlay;
          z-index: -5;
        }

        /* Subtle grain texture for premium vintage feel */
        .grain-texture::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          opacity: 0.2;
          z-index: -4;
        }

        /* Effect 1: Sepia Vintage */
        .sepia-vintage-effect img {
          filter: sepia(0.4) brightness(0.9) contrast(1.1) saturate(0.8);
        }

        /* Effect 2: Premium Vintage (Recommended) */
        .premium-vintage-effect img {
          filter: sepia(0.3) brightness(0.85) contrast(1.15) saturate(0.7)
            hue-rotate(-5deg);
        }

        /* Effect 3: Warm Vintage */
        .warm-vintage-effect img {
          filter: sepia(0.25) brightness(0.9) contrast(1.05) saturate(0.9)
            hue-rotate(350deg);
        }

        /* Effect 4: Classic Vintage */
        .classic-vintage-effect img {
          filter: sepia(0.5) brightness(0.8) contrast(1.2) saturate(0.6);
        }

        /* Effect 5: Aged Paper Effect */
        .aged-paper-effect img {
          filter: sepia(0.35) brightness(0.88) contrast(1.1) saturate(0.75);
        }

        /* Light vignette for depth */
        .vignette-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(0, 0, 0, 0.25) 100%
          );
          pointer-events: none;
          z-index: -3;
        }
      `}</style>

      <div className="relative w-full h-full overflow-hidden">
        {/* Background container with vintage effect */}
        <div
          className={`absolute inset-0 w-full h-full -z-10 ${vintageEffects[vintageEffect as keyof typeof vintageEffects]} grain-texture vignette-overlay`}
        >
          <img
            src="/images/subFooter.jpg"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            alt="Vintage background"
          />
          <img
            src="/images/subFooter2.png"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 lg:hidden"
            alt="Vintage background mobile"
          />
          {/* Vintage color overlay */}
          <div className="vintage-overlay"></div>

          {/* Optional: Subtle gradient overlay that complements meat tones */}
          <div className="absolute inset-0 bg-linear-to-br from-[#B38934]/10 via-transparent to-[#2c1810]/10 mix-blend-mode-multiply"></div>
        </div>

        <div className="relative lg:w-172.5 z-10 flex flex-col h-full mt-15">
          {/* Text content */}
          <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24">
            <h1 className="font-satoshi subfooter-title text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Elevate Protein With{" "}
              <span className="font-clearface italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light">
                Other Local Fresh Meat.
              </span>
              <br />
            </h1>
            <p className="subfooter-desc text-sm md:text-base text-gray-200 mt-5 drop-shadow">
              Pure olive oil packed with 800+ mg/kg polyphenols to support heart
              health and longevity.
            </p>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24 mt-15 mb-10 lg:mb-20">
            <p className="subfooter-benefits-title text-sm md:text-2xl font-bold leading-tight text-white drop-shadow">
              BENEFITS OF A SUBSCRIPTION
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-4">
              <div className="subfooter-benefit flex items-center gap-3">
                <img
                  src="/icons/subFooter1.svg"
                  alt=""
                  className="drop-shadow"
                />
                <p className="text-gray-200 text-sm drop-shadow">
                  Freshly cut after order
                </p>
              </div>
              <div className="subfooter-benefit flex items-center gap-3">
                <img
                  src="/icons/subFooter2.svg"
                  alt=""
                  className="drop-shadow"
                />
                <p className="text-gray-200 text-sm drop-shadow">
                  Wide variety quality meats
                </p>
              </div>
              <div className="subfooter-benefit flex items-center gap-3">
                <img
                  src="/icons/subFooter2.svg"
                  alt=""
                  className="drop-shadow"
                />
                <p className="text-gray-200 text-sm drop-shadow">
                  Real-time freshness tracking
                </p>
              </div>
            </div>
            <div className="mt-8 subfooter-button">
              <PrimaryButton
                primaryColor="#d4a64a"
                text="ORDER ONLINE"
                className="uppercase tracking-wider drop-shadow-lg hover:drop-shadow-xl transition-all"
                gradientToWhite={true}
                href="https://dhesimeats.restaurantsolutions.ca/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
