import Link from "next/link";
import { PrimaryButton } from "@/app/components/ui/primary-button";

export const NavBar = () => {
    return (
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-10 py-4">
            {/* Logo */}
            <img
                src="/images/desi-meat-logo.png"
                alt="Desi Meat Logo"
                width={70}
                height={70}
                className="object-contain"
            />

            {/* Centered pill navigation */}
            <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-8 rounded-full border border-[#3b3b3b] bg-gradient-to-r from-[#1e1e1e] to-[#2a2a2a] px-8 py-2 shadow-lg">
                    <Link
                        href="/"
                        className="text-xs md:text-sm font-semibold text-[#d2a55f]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-us"
                        className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/blog"
                        className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact-us"
                        className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Order button */}
            <PrimaryButton
                primaryColor="#d4a64a"
                text="ORDER ONLINE"
                // onClick={}
                className="uppercase tracking-wider"
                gradientToWhite={true}
            />
        </nav>
    );
}