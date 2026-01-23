"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const googleReviews = [
  {
    name: "Gurpreet Singh",
    quote:
      "Dhesi Meat is the best place for fresh chicken! The quality is always top-notch – clean, tender, and cut perfectly for Indian-style curries and biryani. The staff are friendly and fast, and prices are very fair. Highly recommend this shop for anyone who wants real desi-style chicken.",
    rating: 5,
    image: "/images/google-review1.png",
    reviewUrl: "https://maps.app.goo.gl/y95pzRwbuiHCrTRu8",
  },
  {
    name: "Discovery Sonu Ali",
    quote:
      "I recently visited this meat shop for the first time, and I was pleasantly surprised. The prices are very reasonable, and the quality of the meat is exceptional. I highly recommend it to anyone looking for both value and premium quality products.",
    rating: 5,
    image: "/images/google-review2.png",
    reviewUrl: "https://maps.app.goo.gl/CqgVYdSS3QD5V2jt8",
  },
  {
    name: "G Singh",
    quote: "Fast turnaround and excellent quality. Highly recommended!",
    rating: 5,
    image: "/images/google-review3.png",
    reviewUrl: "https://maps.app.goo.gl/iwXv6MsfgkbnqCsf7",
  },
  {
    name: "Hiwa Palani",
    quote:
      "This is by far the best meat shop I’ve ever visited. They offer a wide variety of flavors, and the meat is always fresh. I’ve never had a single complaint since I started coming here. Highly recommend!",
    rating: 5,
    image: "",
    reviewUrl: "https://maps.app.goo.gl/eiKabyeAUi5S9W946",
  },
  {
    name: "Kataria sagar",
    quote:
      "Very good flavours of chicken. Price is reasonable. I tried their special goat curry and it was so amazing. I would highly recommend this place. Please visit and try",
    rating: 5,
    image: "/images/google-review4.png",
    reviewUrl: "https://maps.app.goo.gl/z7wNmCGdCpSb312Q6",
  },
  {
    name: "Manj Nijjar",
    quote:
      "Always fresh meat. Amazing friendly service. One of the best meat shops in Surrey if not The best meat shop in Surrey !!",
    rating: 5,
    image: "",
    reviewUrl: "https://maps.app.goo.gl/Y2RoNSRyVwziLTKs7",
  },
  {
    name: "Champagne Daddyxx",
    quote:
      "I was craving tandoori chicken for my post-workout meal & decided to stop by Dhesi Meats. I have to say that the variety, quality, standards, and service was perfection at this location. My family really enjoyed the taste of the tandoori chicken as well, it had just the right amount of spice along with freshness & great quality for their meats. Highly recommend this establishment to everyone and looking forward to doing business with you guys again!",
    rating: 5,
    image: "",
    reviewUrl: "https://maps.app.goo.gl/QFVMSnRfRMWPWHwd9",
  },
];

const VISIBLE = 5;
const CENTER = 2;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageRefs = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLAnchorElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const getVisibleReviews = () => {
    const visible = [];
    const total = googleReviews.length;

    for (let i = CENTER; i > 0; i--) {
      let index = activeIndex - i;
      if (index < 0) index = total + index;
      visible.push(googleReviews[index]);
    }

    visible.push(googleReviews[activeIndex]);

    for (let i = 1; i <= CENTER; i++) {
      let index = activeIndex + i;
      if (index >= total) index -= total;
      visible.push(googleReviews[index]);
    }

    return visible;
  };

  const visibleReviews = getVisibleReviews();

  useEffect(() => {
    imageRefs.current.forEach((el, i) => {
      const isCenter = i === CENTER;

      gsap.to(el, {
        scale: isCenter ? 1.4 : 0.85,
        opacity: isCenter ? 1 : 0.4,
        y: isCenter ? -4 : 0,
        duration: 0.5,
        ease: "power3.out",
      });
    });

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
      );
    }
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-images", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? googleReviews.length - 1 : prev - 1,
    );

  const goNext = () =>
    setActiveIndex((prev) =>
      prev === googleReviews.length - 1 ? 0 : prev + 1,
    );

  const activeReview = googleReviews[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center bg-linear-to-br from-[#cfa44a] to-[#e6c36a] px-4 py-20 overflow-hidden"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Avatars */}
        <div className="testimonial-images flex justify-center items-center gap-5 mb-8">
          {visibleReviews.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
              }}
              className="rounded-full h-[60px] w-[60px] border border-black/50 overflow-hidden relative"
            >
              <Image
                src={item.image || "/images/default-avatar.png"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Review Content */}
        <a
          href={activeReview.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          ref={textRef}
          className="block cursor-pointer hover:opacity-90 transition"
        >
          <div className="font-satoshi font-bold text-2xl text-white mt-5">
            {activeReview.name}
          </div>
          <div className="flex justify-center mb-3 text-yellow-300 text-2xl mt-1">
            {"★".repeat(activeReview.rating)}
            {"☆".repeat(5 - activeReview.rating)}
          </div>

          <p className="text-xl md:text-2xl italic text-gray-200 mb-4">
            “
            {activeReview.quote.length > 150
              ? activeReview.quote.slice(0, 140) + "..."
              : activeReview.quote}
            ”
          </p>
        </a>

        <div className="flex justify-center items-center gap-2 mt-2 ">
          <Image
            src="/images/google-logo.png"
            alt="Google"
            width={30}
            height={30}
          />
          <span className="text-base text-blue-100">Google Review</span>
        </div>

        {/* Controls */}
        <div className="testimonial-controls flex justify-center gap-4 mt-7">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-black hover:bg-black hover:text-white"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-black hover:bg-black hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
