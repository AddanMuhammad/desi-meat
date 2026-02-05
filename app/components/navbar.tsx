"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryButton } from "@/app/components/ui/primary-button";

export const NavBar = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-xs md:text-sm font-semibold text-[#d2a55f]"
      : "text-xs md:text-sm text-gray-300 hover:text-white transition-colors";

  return (
    <div className="hidden lg:block fixed w-full z-100">
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <Link href={"/"}>
          <img
            src="/images/desi-meat-logo.png"
            alt="Dhesi Meat Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Centered pill navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-8 rounded-full border border-[#3b3b3b] bg-linear-to-r from-[#1e1e1e] to-[#2a2a2a] px-8 py-2 shadow-lg">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>

            <Link
              href="/pages/about-us"
              className={linkClasses("/pages/about-us")}
            >
              About Us
            </Link>

            {/* <Link href="/pages/blog" className={linkClasses("/pages/blog")}>
              Blog
            </Link> */}

            <Link href="/pages/menu" className={linkClasses("/pages/menu")}>
              Menu
            </Link>

            <Link
              href="/pages/contact-us"
              className={linkClasses("/pages/contact-us")}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Order button */}
        <PrimaryButton
          primaryColor="#d4a64a"
          text="ORDER ONLINE"
          className="uppercase tracking-wider"
          gradientToWhite={true}
          href="https://dhesimeats.restaurantsolutions.ca/"
        />
      </nav>
    </div>
  );
};
