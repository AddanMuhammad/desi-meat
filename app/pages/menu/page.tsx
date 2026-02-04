"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { menuData } from "../../json-data/menu-data";
import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import Image from "next/image";

// Simple in-memory cache for images
const imageCache = new Map();

// Preload images function
const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    if (!imageCache.has(url)) {
      const img = new window.Image();
      img.src = url;
      imageCache.set(url, img);
    }
  });
};

// Debounce function to limit scroll event calls
const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function MenuPage() {
  const typeScrollRef = useRef<HTMLDivElement>(null);
  const navScrollRef = useRef<HTMLDivElement>(null);

  const [showNavLeft, setShowNavLeft] = useState(false);
  const [showNavRight, setShowNavRight] = useState(true);
  const [showTypeLeft, setShowTypeLeft] = useState(false);
  const [showTypeRight, setShowTypeRight] = useState(true);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    menuData[0]?.id || "",
  );
  const [selectedTypeId, setSelectedTypeId] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Memoize selected category and type to prevent unnecessary recalculations
  const selectedCategory = useMemo(
    () => menuData.find((cat) => cat.id === selectedCategoryId),
    [selectedCategoryId],
  );

  const selectedType = useMemo(
    () => selectedCategory?.types.find((type) => type.id === selectedTypeId),
    [selectedCategory, selectedTypeId],
  );

  const currentItems = useMemo(() => selectedType?.items, [selectedType]);

  // Memoized scroll handler with debouncing
  const handleScrollButtons = useCallback(
    debounce(
      (
        ref: React.RefObject<HTMLDivElement | null>,
        setLeft: (v: boolean) => void,
        setRight: (v: boolean) => void,
      ) => {
        if (!ref.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const hasLeft = scrollLeft > 0;
        const hasRight = scrollLeft + clientWidth < scrollWidth - 5;

        setLeft(hasLeft);
        setRight(hasRight);
      },
      50,
    ),
    [],
  );

  useEffect(() => {
    const nav = navScrollRef.current;
    const type = typeScrollRef.current;

    const onNavScroll = () =>
      handleScrollButtons(navScrollRef, setShowNavLeft, setShowNavRight);
    const onTypeScroll = () =>
      handleScrollButtons(typeScrollRef, setShowTypeLeft, setShowTypeRight);

    nav?.addEventListener("scroll", onNavScroll, { passive: true });
    type?.addEventListener("scroll", onTypeScroll, { passive: true });

    // Initial check
    onNavScroll();
    onTypeScroll();

    return () => {
      nav?.removeEventListener("scroll", onNavScroll);
      type?.removeEventListener("scroll", onTypeScroll);
    };
  }, [handleScrollButtons]);

  // Set default type when category changes
  useEffect(() => {
    if (selectedCategory && selectedCategory.types.length > 0) {
      if (
        !selectedTypeId ||
        !selectedCategory.types.find((t) => t.id === selectedTypeId)
      ) {
        setSelectedTypeId(selectedCategory.types[0].id);
      }
    }
  }, [selectedCategoryId, selectedCategory, selectedTypeId]);

  // Preload images for the current selection
  useEffect(() => {
    if (!currentItems) return;

    const imagesToPreload: string[] = [];

    // Main item image
    if (currentItems.image_url) {
      imagesToPreload.push(currentItems.image_url);
    }

    // Additional images
    if (currentItems.images) {
      imagesToPreload.push(...currentItems.images);
    }

    // Category and type icons
    if (selectedCategory?.icon_url) {
      imagesToPreload.push(selectedCategory.icon_url);
    }

    if (selectedType?.icon) {
      imagesToPreload.push(selectedType.icon);
    }

    // Preload images
    preloadImages(imagesToPreload);
  }, [currentItems, selectedCategory, selectedType]);

  if (!selectedCategory) {
    return <div className="p-8 text-white">No menu data available</div>;
  }

  return (
    <div className="bg-[#0a0a0a] text-white">
      <NavBar />
      <div className="border-t border-gray-500/90" />

      {/* PAGE TITLE */}
      <h2 className="font-satoshi p-3 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        Our{" "}
        <span className="font-clearface font-light italic p-1 bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
          Menu
        </span>
      </h2>

      <div ref={sectionRef} className="min-h-screen lg:pb-12">
        <div className="mx-3 sm:mx-6 lg:mx-6 2xl:mx-32">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* SIDEBAR */}
            <div className="w-full lg:w-60">
              <div className="rounded-xl border border-[#2f2f2f] bg-[#1b1b1b]/40 backdrop-blur-sm p-2 sm:p-4 lg:sticky lg:top-8 relative">
                {showNavLeft && (
                  <button
                    onClick={() =>
                      navScrollRef.current?.scrollBy({
                        left: -200,
                        behavior: "smooth",
                      })
                    }
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-20 lg:hidden p-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/80"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                )}

                {showNavRight && (
                  <button
                    onClick={() =>
                      navScrollRef.current?.scrollBy({
                        left: 200,
                        behavior: "smooth",
                      })
                    }
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-20 lg:hidden p-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/80"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                )}

                <nav
                  ref={navScrollRef}
                  className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible scrollbar-hide"
                >
                  {menuData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategoryId(category.id)}
                      className={`flex items-center gap-3 rounded-lg p-3 min-w-max lg:min-w-0 cursor-pointer transition-all duration-200 ${
                        selectedCategoryId === category.id
                          ? "bg-linear-to-r from-[#B38934]/20 to-[#e6ca79]/10 border border-amber-500/30 text-amber-100"
                          : "text-gray-400 border border-transparent hover:bg-white/5"
                      }`}
                    >
                      {category.icon_url && (
                        <Image
                          src={category.icon_url}
                          alt={category.name}
                          width={20}
                          height={20}
                          className="object-contain opacity-90"
                          loading="lazy"
                        />
                      )}
                      <span className="text-sm font-medium tracking-wide">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* MAIN CONTENT */}
         
            <div className="flex-1">
              <div className="lg:rounded-xl lg:border lg:border-gray-500/30 lg:bg-[#1B1B1B]/20 lg:backdrop-blur-sm p-2 lg:p-3">
                {/* <h1 className="text-center text-2xl font-light tracking-wide text-gray-300 mb-5">
                  Category of {selectedCategory.name}
                </h1> */}

                {/* TYPE SELECTOR */}
                {selectedCategory.types.length > 0 && (
                  <div className="flex justify-center items-center">
                    <div className="mb-3 relative">
                      {showTypeLeft && (
                        <button
                          onClick={() =>
                            typeScrollRef.current?.scrollBy({
                              left: -200,
                              behavior: "smooth",
                            })
                          }
                          className="absolute left-1 top-1/2 -translate-y-1/2 z-20 lg:hidden p-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white/80"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </button>
                      )}

                      {showTypeRight && (
                        <button
                          onClick={() =>
                            typeScrollRef.current?.scrollBy({
                              left: 200,
                              behavior: "smooth",
                            })
                          }
                          className="absolute right-1 top-1/2 -translate-y-1/2 z-20 lg:hidden p-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white/80"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                      )}

                      <div
                        ref={typeScrollRef}
                        className="flex gap-3 overflow-x-auto scrollbar-hide"
                      >
                        {selectedCategory.types.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedTypeId(type.id)}
                            className={`flex items-center gap-2 cursor-pointer rounded-xl p-2 min-w-max border transition-all duration-200 ${
                              selectedTypeId === type.id
                                ? "bg-linear-to-br from-[#B38934]/20 to-[#e6ca79]/10 border-amber-500/40 text-amber-100"
                                : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg transition-all duration-200 ${
                                selectedTypeId === type.id
                                  ? "bg-amber-500/20"
                                  : "bg-white/5"
                              }`}
                            >
                              {type.icon && (
                                <Image
                                  src={type.icon}
                                  alt={type.name}
                                  width={20}
                                  height={20}
                                  className="object-contain"
                                  loading="lazy"
                                />
                              )}
                            </div>
                            <span className="text-sm whitespace-nowrap">
                              {type.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ITEMS GRID */}
                {currentItems ? (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
                      {/* ================= MAIN CARD ================= */}
                      <div
                        className="
                          lg:col-span-4 sm:col-span-2
                          flex flex-col
                          rounded-2xl
                          border border-[#2f2f2f]
                          bg-[#1B1B1B]
                          overflow-hidden
                          group
                          transition-all duration-300 ease-out
                          hover:-translate-y-1
                          hover:border-amber-400/40
                          hover:shadow-[0_10px_40px_-10px_rgba(212,166,74,0.35)]
                        "
                      >
                        <div className="p-4 flex flex-col gap-3 flex-1">
                          {/* Image */}
                          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                            {currentItems?.image_url && (
                              <>
                                <Image
                                  src={currentItems.image_url}
                                  alt={currentItems?.name || "item"}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                  priority // Only for above-the-fold images
                                  loading="eager"
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                                <div className="absolute top-3 left-3 flex gap-2 z-10">
                                  <span className="text-xs bg-white/5 backdrop-blur text-white px-2 py-1 rounded-md border border-white/20">
                                    {currentItems?.time}
                                  </span>
                                  <span className="text-xs bg-white/5 backdrop-blur text-white px-2 py-1 rounded-md border border-white/20">
                                    {currentItems?.status}
                                  </span>
                                </div>
                              </>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-extrabold line-clamp-2">
                            {currentItems?.name}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-gray-300 line-clamp-3">
                            {currentItems?.description}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between p-4">
                          <span className="text-xl sm:text-2xl">$ 15</span>
                          <PrimaryButton
                            primaryColor="#d4a64a"
                            text="Order Online"
                            gradientToWhite
                            className="uppercase tracking-wider text-xs sm:text-sm"
                            href="https://dhesimeats.restaurantsolutions.ca/"
                          />
                        </div>
                      </div>

                      {/* ================= FEATURE IMAGE ================= */}
                      {currentItems?.images?.[0] && (
                        <div
                          className="lg:col-span-6 sm:col-span-2 rounded-2xl overflow-hidden border border-[#2f2f2f] bg-[#1B1B1B] p-3 group
                          transition-all duration-300 ease-out
                          hover:-translate-y-1
                          hover:border-amber-400/30
                          hover:shadow-[0_10px_40px_-12px_rgba(212,166,74,0.3)]"
                        >
                          <div className="w-full h-full aspect-video overflow-hidden rounded-2xl relative">
                            <Image
                              src={currentItems.images[0]}
                              alt="featured"
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          </div>
                        </div>
                      )}

                      {/* ================= BOTTOM IMAGES ================= */}
                      {currentItems?.images?.slice(1, 3).map((img, index) => (
                        <div
                          key={index}
                          className="lg:col-span-5 sm:col-span-1 rounded-2xl overflow-hidden border border-[#2f2f2f] bg-[#1B1B1B] p-3 group
                          transition-all duration-300 ease-out
                          hover:-translate-y-1
                          hover:border-amber-400/30
                          hover:shadow-[0_10px_35px_-12px_rgba(212,166,74,0.25)]"
                        >
                          <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                            <Image
                              src={img}
                              alt={`gallery-${index}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center text-gray-400">
                    No items available for this selection
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer cl="mt-10" />
    </div>
  );
}
