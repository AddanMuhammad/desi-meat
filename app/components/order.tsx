"use client";

import { useEffect, useRef } from "react";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import { orderCardData } from "../json-data/order";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Order = () => {
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
            })
                .fromTo(
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
                    "-=0.5"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Hover animations for cards - separate effect to ensure refs are populated
    useEffect(() => {
        const hoverHandlers: Array<{ card: HTMLDivElement; enter: () => void; leave: () => void }> = [];

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
                
                hoverHandlers.push({ card, enter: handleMouseEnter, leave: handleMouseLeave });
            }
        });

        return () => {
            hoverHandlers.forEach(({ card, enter, leave }) => {
                card.removeEventListener("mouseenter", enter);
                card.removeEventListener("mouseleave", leave);
            });
        };
    }, [orderCardData]);

    return (
        <div ref={sectionRef} className="mt-[120px] mx-[60px]">
            <div className="flex justify-around items-center mb-8">
                <h2 className="order-title text-3xl md:text-5xl font-bold leading-tight text-white">
                    How To{" "}
                    <span className="italic text-[#B38934] font-light">
                        Order
                    </span>
                </h2>
               
            </div>

            {/* Cards grid - 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-42">
                {orderCardData.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className="order-card border border-[#2f2f2f] rounded-2xl p-8 flex flex-col justify-between items-center shadow-lg
                         h-full bg-linear-to-r from-[#B78E39]/20 to-[#161616] gap-4 cursor-pointer transition-all"
                        style={{ opacity: 1 }}
                    >
                        <img
                            src={card.icon_url}
                            alt={card.title}
                            className=""
                        />
                        <h3 className="text-lg md:text-xl font-extrabold text-white">
                            {card.title} <br />
                        </h3>
                        <p className="text-md text-gray-300 font-light text-center">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}