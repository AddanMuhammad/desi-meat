"use client";

import { useEffect, useRef } from "react";
import { PrimaryButton } from "./ui/primary-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SubFooter = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef}>
      <div className="relative w-full h-full overflow-hidden">
        {/* Background image behind navbar and content */}
        <img
          src="/images/subFooter.png"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <img
          src="/images/subFooter2.png"
          className="absolute inset-0 w-full h-full object-cover -z-10 lg:hidden"
        />

        <div className="relative z-10 flex flex-col h-full mt-15">
          {/* Text content */}
          <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24">
            <h1 className="font-satoshi subfooter-title text-3xl md:text-5xl font-bold leading-tight text-white">
              Elevate Your{" "}
              <span className="font-clearface italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent font-light">
                Wellness with Meat
              </span>
              <br />
            </h1>
            <p className="subfooter-desc text-sm md:text-base text-gray-200 mt-5">
              Pure olive oil packed with 800+ mg/kg polyphenols to support heart
              health and longevity.
            </p>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4 px-8 md:px-24 mt-15 mb-10 lg:mb-20">
            <p className="subfooter-benefits-title text-sm md:text-2xl font-bold leading-tight text-white">
              BENEFITS OF A SUBSCRIPTION
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="subfooter-benefit flex  items-center gap-3">
                <img src="/icons/subFooter1.svg" alt="" />
                <p className="text-gray-200 text-sm">Freshly cut after order</p>
              </div>
              <div className="subfooter-benefit flex  items-center gap-3">
                <img src="/icons/subFooter2.svg" alt="" />
                <p className="text-gray-200 text-sm">
                  Wide variety quality meats
                </p>
              </div>
              <div className="subfooter-benefit flex  items-center gap-3">
                <img src="/icons/subFooter2.svg" alt="" />
                <p className="text-gray-200 text-sm">
                  Real-time freshness tracking
                </p>
              </div>
            </div>
            <div className="mt-8 subfooter-button">
              <PrimaryButton
                primaryColor="#d4a64a"
                text="ORDER ONLINE"
                // onClick={}
                className="uppercase tracking-wider"
                gradientToWhite={true}
                href="https://dhesimeat.cloudwaitress.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
