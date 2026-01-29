"use client";

import { useState, useEffect, useRef } from "react";
import { menuData } from "../../json-data/menu-data";
import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";

export default function MenuPage() {
  const typeScrollRef = useRef<HTMLDivElement>(null);
  const navScrollRef = useRef<HTMLDivElement>(null);
  const [showNavLeft, setShowNavLeft] = useState(false);
  const [showNavRight, setShowNavRight] = useState(true);

  const [showTypeLeft, setShowTypeLeft] = useState(false);
  const [showTypeRight, setShowTypeRight] = useState(true);

  const handleScrollButtons = (
    ref: React.RefObject<HTMLDivElement | null>,
    setLeft: (v: boolean) => void,
    setRight: (v: boolean) => void,
  ) => {
    if (!ref.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = ref.current;

    setLeft(scrollLeft > 0);
    setRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const nav = navScrollRef.current;
    const type = typeScrollRef.current;

    const onNavScroll = () =>
      handleScrollButtons(navScrollRef, setShowNavLeft, setShowNavRight);

    const onTypeScroll = () =>
      handleScrollButtons(typeScrollRef, setShowTypeLeft, setShowTypeRight);

    nav?.addEventListener("scroll", onNavScroll);
    type?.addEventListener("scroll", onTypeScroll);

    // Initial check
    onNavScroll();
    onTypeScroll();

    return () => {
      nav?.removeEventListener("scroll", onNavScroll);
      type?.removeEventListener("scroll", onTypeScroll);
    };
  }, []);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    menuData[0]?.id || "",
  );
  const [selectedTypeId, setSelectedTypeId] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);

  const selectedCategory = menuData.find(
    (cat) => cat.id === selectedCategoryId,
  );
  const selectedType = selectedCategory?.types.find(
    (type) => type.id === selectedTypeId,
  );

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

  if (!selectedCategory) {
    return <div className="p-8 text-white">No menu data available</div>;
  }

  const currentItems = selectedType?.items;

  return (
    <div className="bg-[#0a0a0a] text-white">
      <NavBar />
      <div className="border-t border-gray-500/90" />

      {/* PAGE TITLE */}
      <h2 className="font-satoshi p-6 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
        Our{" "}
        <span className="font-clearface font-light italic text-amber-200">
          Menu
        </span>
      </h2>

      <div ref={sectionRef} className="min-h-screen pt-4 pb-12">
        <div className="mx-3 sm:mx-6 lg:mx-6 2xl:mx-32">
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* SIDEBAR */}
            <div className="w-full lg:w-64">
              <div className="rounded-2xl border border-[#2f2f2f] bg-[#1b1b1b]/40 p-3 sm:p-4 lg:sticky lg:top-8 relative">
                {showNavLeft && (
                  <div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20  blur-2xl bg-white h-10 w-10 lg:hidden" />
                    <button
                      onClick={() =>
                        navScrollRef.current?.scrollBy({
                          left: -200,
                          behavior: "smooth",
                        })
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 lg:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                  </div>
                )}

                {showNavRight && (
                  <div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20  blur-2xl bg-white h-10 w-10 lg:hidden" />
                    <button
                      onClick={() =>
                        navScrollRef.current?.scrollBy({
                          left: 200,
                          behavior: "smooth",
                        })
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 lg:hidden"
                    >
                      <img
                        src="/icons/right-arrow.svg"
                        alt="Right Arrow"
                        height={25}
                        width={25}
                      />
                    </button>
                  </div>
                )}
                <nav
                  ref={navScrollRef}
                  className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible"
                >
                  {menuData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategoryId(category.id)}
                      className={`flex cursor-pointer shrink-0 items-center gap-3 rounded-lg p-3 transition-all ${
                        selectedCategoryId === category.id
                          ? "bg-[#B38934] text-white font-semibold"
                          : "bg-black/30 text-gray-300 hover:bg-[#2f2f2f] hover:text-white"
                      }`}
                    >
                      {category.icon_url && (
                        <img
                          src={category.icon_url}
                          alt={category.name}
                          className="h-9 w-9 object-contain"
                        />
                      )}
                      <span className="text-sm md:text-base uppercase">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 rounded-2xl border border-gray-500/30 p-4 sm:p-6 lg:p-8 bg-[#1B1B1B]/20">
              <h1 className="mb-6 text-center text-2xl sm:text-3xl md:text-4xl">
                Type of {selectedCategory.name}
              </h1>

              {/* TYPE SELECTOR */}
              {selectedCategory.types.length > 0 && (
                <div className="mb-6 rounded-lg border border-gray-500/30 bg-[#1b1b1b]/40 p-4 relative">
                  {/* RIGHT ARROW (Mobile + Tablet only) */}
                  {showTypeLeft && (
                    <div>
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20  blur-2xl bg-white h-10 w-10 lg:hidden" />
                      <button
                        onClick={() =>
                          typeScrollRef.current?.scrollBy({
                            left: -200,
                            behavior: "smooth",
                          })
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 lg:hidden"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                  {showTypeRight && (
                    <div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20  blur-2xl bg-white h-10 w-10 lg:hidden" />
                      <button
                        onClick={() =>
                          typeScrollRef.current?.scrollBy({
                            left: 200,
                            behavior: "smooth",
                          })
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 lg:hidden"
                      >
                        <img
                          src="/icons/right-arrow.svg"
                          alt="Right Arrow"
                          height={25}
                          width={25}
                        />
                      </button>
                    </div>
                  )}
                  <div
                    ref={typeScrollRef}
                    className="flex gap-3 overflow-x-auto pr-12
               lg:flex-wrap lg:overflow-visible
               md:justify-center scrollbar-hide"
                  >
                    {selectedCategory.types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedTypeId(type.id)}
                        className={`flex cursor-pointer shrink-0 items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                          selectedTypeId === type.id
                            ? "bg-[#B38934] text-white font-semibold"
                            : "bg-black/40 text-gray-300 hover:text-white"
                        }`}
                      >
                        <img
                          src={type.icon}
                          alt={type.name}
                          className="h-8 w-8"
                        />
                        <span className="whitespace-nowrap">{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ITEMS GRID */}
              {currentItems && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
                  {/* MAIN CARD */}
                  <div className="lg:col-span-4 md:col-span-2 flex flex-col rounded-2xl border border-[#2f2f2f] bg-[#1B1B1B] overflow-hidden">
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <div className="aspect-4/3 rounded-xl overflow-hidden relative">
                        {/* IMAGE */}
                        <img
                          src={currentItems.image_url}
                          alt={currentItems.name}
                          className="w-full h-full object-cover md:p-3 lg:p-0"
                        />

                        {/* BADGES ON IMAGE */}
                        {currentItems.image_url ? (
                          <div className="absolute top-3 left-3 flex gap-2 z-10">
                            <span className="text-xs bg-white/5 backdrop-blur text-white px-2 py-1 rounded-md border border-white/20">
                              {currentItems.time}
                            </span>
                            <span className="text-xs bg-white/5 backdrop-blur text-white px-2 py-1 rounded-md border border-white/20">
                              {currentItems.status}
                            </span>
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold line-clamp-2">
                        {currentItems.name}
                      </h3>

                      <p className="text-sm text-gray-300 line-clamp-3">
                        {currentItems.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between p-4">
                      <span className="text-xl sm:text-2xl">$ 15</span>
                      <PrimaryButton
                        primaryColor="#d4a64a"
                        text="Order Online"
                        gradientToWhite
                        className="uppercase tracking-wider text-xs sm:text-sm"
                        href="https://dhesimeat.cloudwaitress.com/"
                      />
                    </div>
                  </div>

                  {/* FEATURE IMAGE */}
                  {currentItems.images?.[0] && (
                    <div className="sm:col-span-2 lg:col-span-6 rounded-2xl overflow-hidden border border-[#2f2f2f] bg-[#1B1B1B] p-3 aspect-video lg:aspect-auto">
                      <img
                        src={currentItems.images[0]}
                        alt="featured"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  )}

                  {/* BOTTOM IMAGES */}
                  {currentItems.images?.slice(1, 3).map((img, index) => (
                    <div
                      key={index}
                      className="rounded-2xl overflow-hidden border border-[#2f2f2f] bg-[#1B1B1B] p-3 aspect-4/3 sm:col-span-1 lg:col-span-5"
                    >
                      <img
                        src={img}
                        alt={`gallery-${index}`}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              )}

              {!currentItems && (
                <div className="py-12 text-center text-gray-400">
                  No items available for this selection
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer cl="mt-10" />
    </div>
  );
}
