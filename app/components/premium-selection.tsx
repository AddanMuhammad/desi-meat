'use client';
import { useState, useEffect, useRef } from "react";
import { premiumSelection } from "../json-data/premium-selection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

            tl.from(".premium-title", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            })
                .from(
                    ".premium-content",
                    { x: -50, opacity: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.5"
                )
                .from(
                    ".premium-image",
                    { x: 50, opacity: 0, duration: 0.7, ease: "power2.out" },
                    "-=0.5"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Update ref when selectedIndex changes
    useEffect(() => {
        selectedIndexRef.current = selectedIndex;
    }, [selectedIndex]);

    // Hover animations for premium cards
    useEffect(() => {
        const hoverHandlers: Array<{ card: HTMLDivElement; enter: () => void; leave: () => void }> = [];
        
        cardRefs.current.forEach((card, index) => {
            if (card) {
                const handleMouseEnter = () => {
                    // Check current selection state dynamically using ref
                    if (selectedIndexRef.current !== index) {
                        gsap.to(card, {
                            backgroundColor: "rgba(179, 137, 52, 0.15)",
                            scale: 1.02,
                            y: -4,
                            duration: 0.3,
                            ease: "power2.out",
                        });
                    }
                };

                const handleMouseLeave = () => {
                    // Check current selection state dynamically using ref
                    if (selectedIndexRef.current !== index) {
                        gsap.to(card, {
                            backgroundColor: "transparent",
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                        });
                    }
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
    }, []);

    // Animation when selection changes
    useEffect(() => {
        premiumSelection.forEach((_, index) => {
            const card = cardRefs.current[index];
            const description = descriptionRefs.current[index];
            const arrow = arrowRefs.current[index];
            const isSelected = selectedIndex === index;

            if (card) {
                // Animate card background only (no scale to prevent image size changes)
                gsap.to(card, {
                    backgroundColor: isSelected 
                        ? "rgba(179, 137, 52, 0.3)" 
                        : "transparent",
                    duration: 0.3,
                    ease: "power2.out",
                });
            }

            if (description) {
                if (isSelected) {
                    // Measure and animate description in
                    gsap.set(description, { height: "auto", overflow: "hidden" });
                    const height = description.scrollHeight;
                    gsap.set(description, { height: 0, opacity: 0 });
                    gsap.to(description, {
                        height: height,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.set(description, { height: "auto" });
                        }
                    });
                } else {
                    // Animate description out
                    const currentHeight = description.scrollHeight || description.offsetHeight;
                    if (currentHeight > 0) {
                        gsap.to(description, {
                            height: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.in",
                        });
                    }
                }
            }

            if (arrow) {
                // Animate arrow rotation
                gsap.to(arrow, {
                    rotation: isSelected ? 180 : 0,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        });
    }, [selectedIndex]);

    return (
        <div ref={sectionRef} className="mt-[120px] mx-[60px]">
            <div className="flex justify-around items-center mb-8">
                <h2 className="premium-title text-3xl md:text-5xl font-bold leading-tight text-white">
                    Our Premium Selection:{" "}
                    <span className="italic text-[#B38934] font-light">
                        Fresh & Marinated
                    </span>
                </h2>
            
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="premium-content w-full border border-[#2f2f2f] rounded-2xl p-6 flex flex-col justify-between shadow-lg gap-2 bg-[#191919]">
                {premiumSelection.map((card, index) => {
                    const isSelected = selectedIndex === index;
                    return (
                        <div 
                            key={index} 
                            ref={(el) => { cardRefs.current[index] = el; }}
                            className={`flex flex-col gap-4 p-4 rounded-lg cursor-pointer overflow-hidden ${isSelected ? 'bg-linear-to-r from-[#B38934] to-[#e6ca79]' : ''}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <div className="flex flex-row gap-7 justify-between transition-colors">
                                <div className={`flex flex-row gap-7 items-center transition-colors ${
                                    isSelected ? 'text-[#B38934]' : 'text-white'
                                }`}>
                                    {/* Image */}
                                    <img 
                                        src={card.img_url} 
                                        alt={card.title} 
                                        className="w-12 h-12 object-contain shrink-0"
                                        style={{ width: '48px', height: '48px' }}
                                    />
                                    
                                    {/* Title */}
                                    <h3 className={`text-lg font-bold uppercase text-white`}>
                                        {card.title}
                                    </h3>
                                </div>
                                <img 
                                    ref={(el) => { arrowRefs.current[index] = el; }}
                                    src={isSelected ? "/icons/arrow-up.svg" : "/icons/arrow-right.svg"} 
                                    alt="" 
                                    className="transition-transform"
                                />
                            </div>
                            {/* Description - always rendered but animated */}
                            <p 
                                ref={(el) => { descriptionRefs.current[index] = el; }}
                                className="text-[15px] text-white overflow-hidden"
                                style={{ height: isSelected ? 'auto' : 0, opacity: isSelected ? 1 : 0 }}
                            >
                                {card.description}
                            </p>
                            {!isSelected && <div className="border border-[#2f2f2f] mt-2"/>}
                        </div>
                    );
                })}
                </div>
                <img src="/images/premium-meat.png" alt="" className="premium-image h-[600px] w-1/2"/>
            </div>
        </div>
    );
}