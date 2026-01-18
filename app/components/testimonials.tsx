"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Myriam Malinge",
    role: "Head of Marketing and Comms at Satair",
    quote:
      "For us it has been important to find a creative partner like Superside – a team we can trust to deliver quality work on time...",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    quote:
      "Superside helped us scale our design efforts without compromising quality.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "David Lee",
    role: "Founder",
    quote: "A reliable and creative partner that understands business needs.",
    image: "/images/testimonial3.jpg",
  },
  {
    name: "Emma Brown",
    role: "Marketing Lead",
    quote: "Fast turnaround, excellent quality, and great communication.",
    image: "/images/testimonial4.jpg",
  },
  {
    name: "Alex Green",
    role: "CTO",
    quote: "Their team feels like an extension of our own.",
    image: "/images/testimonial5.jpg",
  },
  {
    name: "Sarah Khan",
    role: "Brand Manager",
    quote: "Outstanding design consistency and speed.",
    image: "/images/testimonial6.jpg",
  },
  {
    name: "Daniel White",
    role: "CEO",
    quote: "Exceptional collaboration and creative output.",
    image: "/images/testimonial7.jpg",
  },
];

const VISIBLE = 5;
const CENTER = 2; // middle index (0–4)

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const imageRefs = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Create a function to get visible testimonials with loop logic
  const getVisibleTestimonials = () => {
    const visible = [];
    const total = testimonials.length;

    // Get CENTER items before active index
    for (let i = CENTER; i > 0; i--) {
      let index = activeIndex - i;
      if (index < 0) index = total + index; // Wrap to end if negative
      visible.push(testimonials[index]);
    }

    // Add active testimonial
    visible.push(testimonials[activeIndex]);

    // Get CENTER items after active index
    for (let i = 1; i <= CENTER; i++) {
      let index = activeIndex + i;
      if (index >= total) index = index - total; // Wrap to beginning if exceeds
      visible.push(testimonials[index]);
    }

    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

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
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      );
    }
  }, [activeIndex]);

  // Scroll trigger animation for initial entrance
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

      tl.from(".testimonial-images", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        
        .from(
          ".testimonial-controls",
          { y: 20, opacity: 0.5, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? testimonials.length - 1 : newIndex;
    });
  };

  const goNext = () => {
    setActiveIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  return (
    <section ref={sectionRef} className="h-full flex items-center justify-center bg-linear-to-br from-[#cfa44a] to-[#e6c36a] px-4 overflow-hidden p-10 md:py-20">
      <div className="max-w-4xl w-full text-center">
        {/* Images */}
        <div className="testimonial-images flex justify-center items-center gap-5 mb-12">
          {visibleTestimonials.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              ref={(el) => {
                if (el) imageRefs.current[i] = el;
              }}
              className="rounded-full h-[60px] w-[60px] border border-black/50 overflow-hidden shrink-0 relative"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="60px"
                className="rounded-full object-cover"
                priority={i === CENTER}
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <div ref={textRef} className="min-h-50 md:min-h-45">
          <p className="text-xl md:text-2xl italic font-medium mb-6">
            "{testimonials[activeIndex].quote}"
          </p>

          <div className="font-semibold">{testimonials[activeIndex].name}</div>
          <div className="text-sm opacity-80 mb-10">
            {testimonials[activeIndex].role}
          </div>
        </div>

        {/* Controls */}
        <div className="testimonial-controls flex justify-center gap-4">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center transition hover:bg-black hover:text-white"
          >
            ←
          </button>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center transition hover:bg-black hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
