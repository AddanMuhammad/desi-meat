"use client";

import { useEffect, useRef } from "react";
import { BestSeller } from "@/app/components/best-seller";
import { NavBar } from "@/app/components/navbar";
import { Order } from "@/app/components/order";
import { PerimumSeriesSelector } from "@/app/components/premium-selection";
import { SeriesSelector } from "@/app/components/series-selector";
import SubFooter from "@/app/components/sub-footers";
import Testimonials from "@/app/components/testimonials";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import WhyChooseUs from "@/app/components/why-choose-us";
import gsap from "gsap";
import { MobileBottomBar } from "@/app/components/mobile-bottombar";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance animation
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      });

      gsap.from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        ref={heroRef}
        className="relative w-full h-150 md:h-220 overflow-hidden"
      >
        {/* Desktop Image */}
        <img
          src="/images/main-steak.png"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover  -z-10"
        />

        {/* Mobile Image */}
        <img
          src="/images/mob-homePage.svg"
          className="block lg:hidden absolute inset-0 w-full h-full  object-cover object-top -z-10"
        />

        <NavBar />

        {/* Content */}

        <div
          className="relative z-10 w-full flex flex-col
            lg:justify-start lg:mt-30
            justify-end pb-10 lg:pb-0
            h-full max-w-3xl px-8 md:px-24"
        >
          <h1 className=" font-satoshi hero-title text-3xl md:text-5xl font-bold leading-tight text-white">
            Fresh • Marinated • <span>Lifestyle-</span>
            <span className="font-clearface italic text-[#d4a64a] font-light">
              Focused Meats in Surrey, BC
            </span>
            <br />
          </h1>
          <p className="hero-description text-sm md:text-base text-gray-200">
            Your modern neighborhood meat studio. Choose from FIT,{" "}
            <br className="hidden sm:block" />
            BALANCE, or FEAST series.
          </p>
          <div className="hero-button">
            <PrimaryButton
              primaryColor="#B38934"
              text="ORDER ONLINE"
              // onClick={}
              className="uppercase tracking-wider mt-4"
              gradientToWhite={true}
              href="https://dhesimeat.cloudwaitress.com/"
            />
          </div>
        </div>
      </div>
      <SeriesSelector />

      <PerimumSeriesSelector />
      <BestSeller />
      <WhyChooseUs />
      <Order />
      <Testimonials />
      <SubFooter />
    </div>
  );
}
