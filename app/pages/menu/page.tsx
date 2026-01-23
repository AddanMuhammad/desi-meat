'use client';

import { useState, useEffect, useRef } from "react";
import { menuData } from "../../json-data/menu-data";
import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";

export default function MenuPage() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>(menuData[0]?.id || '');
    const [selectedTypeId, setSelectedTypeId] = useState<string>('');
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const selectedCategory = menuData.find(cat => cat.id === selectedCategoryId);
    const selectedType = selectedCategory?.types.find(type => type.id === selectedTypeId);

    // Set default type when category changes
    useEffect(() => {
        if (selectedCategory && selectedCategory.types.length > 0) {
            if (!selectedTypeId || !selectedCategory.types.find(t => t.id === selectedTypeId)) {
                setSelectedTypeId(selectedCategory.types[0].id);
            }
        }
    }, [selectedCategoryId, selectedCategory, selectedTypeId]);

    if (!selectedCategory) {
        return <div className="p-8 text-white">No menu data available</div>;
    }

    const currentItems = selectedType?.items;
    console.log(currentItems) 

    currentItems ? console.log(currentItems.images) : ''

    return (
        <div>
            <NavBar />
            <div className="border-t border-gray-500/90" />
            <h2 className="p-6 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
                Our <span className="font-light italic text-amber-200">Menu</span>
            </h2>

            <div ref={sectionRef} className="min-h-screen bg-[#0a0a0a] text-white pt-4 pb-10">
                <div className="mx-4 sm:mx-6 lg:mx-[60px]">
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Permanent Sidebar */}
                        <div className="w-full lg:w-64">
                            <div className="rounded-2xl border border-[#2f2f2f] bg-[#1b1b1b]/40 p-4 lg:sticky lg:top-8">
                                <nav className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0">
                                {menuData.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategoryId(category.id)}
                                        className={`flex shrink-0 items-center gap-4 rounded-lg p-3 text-left transition-all lg:shrink ${
                                            selectedCategoryId === category.id
                                                ? 'bg-[#B38934] text-white font-semibold'
                                                : 'text-gray-300 bg-black/20 hover:bg-[#2f2f2f] hover:text-white cursor-pointer'
                                        }`}
                                    >
                                        {category.icon_url && (
                                            <img
                                                src={category.icon_url}
                                                alt={category.name}
                                                className="h-10 w-10 object-contain"
                                            />
                                        )}
                                        <span className="text-sm md:text-base">{category.name.toUpperCase()}</span>
                                    </button>
                                ))}
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="min-w-0 flex-1 rounded-2xl border border-gray-500/30 p-4 sm:p-6 lg:p-8 mt-2 lg:mt-0">
                            {/* Category Title */}
                            <h1 className="mb-6 text-center text-3xl text-white md:text-5xl">
                                Type of {selectedCategory.name}
                            </h1>

                            {/* Type Selector */}
                            {selectedCategory.types.length > 0 && (
                                <div className="mb-6 rounded-lg border border-gray-500/30 bg-[#1b1b1b]/40 p-4 md:mx-10 lg:mx-20">
                                    <div className="flex w-full gap-3 overflow-x-auto pb-1 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
                                        {selectedCategory.types.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setSelectedTypeId(type.id)}
                                                className={`flex shrink-0 flex-row items-center gap-3 rounded-lg px-4 py-3 transition-all md:shrink md:px-5 md:py-4 ${
                                                    selectedTypeId === type.id
                                                        ? 'bg-[#B38934] border-[#B38934] text-white font-semibold'
                                                        : 'bg-black/50 text-gray-300 hover:border-[#B38934] hover:text-white'
                                                }`}
                                            >
                                                <img src={type.icon} alt="" className="h-10 w-10" />
                                                <span className="whitespace-nowrap">{type.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Menu Items Grid - 2 columns, 2 rows (4 items total) */}
                            {currentItems && (
                            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                                {/* Main Card (1/3) */}
                                <div
                                    className="md:col-span-4 h-[420px] border border-[#2f2f2f] rounded-2xl
                                                flex flex-col shadow-lg bg-[#1B1B1B] overflow-hidden"
                                    >
                                    {/* TOP CONTENT */}
                                    <div className="p-3 flex flex-col gap-3 flex-1">
                                        {/* Image */}
                                        <div className="h-[220px] w-full overflow-hidden rounded-xl">
                                            <img
                                                src={currentItems.image_url}
                                                alt={currentItems.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <h3 className="text-lg md:text-xl font-extrabold text-white line-clamp-2">
                                        {currentItems.name}
                                        </h3>

                                        <p className="text-sm text-gray-300 font-light line-clamp-3">
                                        {currentItems.description}
                                        </p>
                                    </div>

                                    {/* BOTTOM CTA */}
                                   
                                        <div className="flex justify-between items-center p-4">
                                            <h1 className="text-2xl text-white">$ 15</h1>
                                            <PrimaryButton
                                                primaryColor="#d4a64a"
                                                text="Order Online"
                                                gradientToWhite
                                                className="uppercase tracking-wider"
                                                href="https://dhesimeat.cloudwaitress.com/"
                                            />
                                        </div>
                                    </div>


                                {/* Large Image (2/3) */}
                                {currentItems.images?.[0] && (
                                <div className="md:col-span-6 h-[420px] rounded-2xl overflow-hidden">
                                    <img
                                    src={currentItems.images[0]}
                                    alt="featured"
                                    className="w-full h-full object-cover"
                                    />
                                </div>
                                )}

                                {/* Bottom Images (50 / 50) */}
                                {currentItems.images?.slice(1, 3).map((image, index) => (
                                <div
                                    key={index}
                                    className="md:col-span-5 rounded-2xl overflow-hidden"
                                >
                                    <img
                                    src={image}
                                    alt={`gallery-${index}`}
                                    className="w-full object-cover"
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

            <Footer cl="mt-10"/>
        </div>
    );
}
