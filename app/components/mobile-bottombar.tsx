"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileBottomBar = () => {
  const pathname = usePathname();

  const itemClass = (path: string) =>
    `flex flex-col items-center justify-center w-full gap-1 text-[10px] sm:text-xs transition-colors ${
      pathname === path ? "text-[#d2a55f]" : "text-gray-400"
    }`;

  const imageClass = (path: string) =>
    pathname === path
      ? "flex items-center justify-center bg-white rounded-2xl p-1"
      : "flex items-center justify-center";

  const iconClass = "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="flex justify-around bg-[#1e1e1e] border-t border-gray-700 px-1 py-2 pb-safe">
        <Link href="/" aria-label="Home" className={itemClass("/")}>
          <div className={imageClass("/")}>
            <img src="/icons/home.svg" alt="Home" className={iconClass} />
          </div>
          Home
        </Link>

        <Link
          href="/pages/about-us"
          aria-label="About"
          className={itemClass("/pages/about-us")}
        >
          <div className={imageClass("/pages/about-us")}>
            <img src="/icons/about.svg" alt="About" className={iconClass} />
          </div>
          About
        </Link>

        <Link
          href="/pages/blog"
          aria-label="Blog"
          className={itemClass("/pages/blog")}
        >
          <div className={imageClass("/pages/blog")}>
            <img src="/icons/blog.svg" alt="Blog" className={iconClass} />
          </div>
          Blog
        </Link>

        <Link
          href="/pages/menu"
          aria-label="Menu"
          className={itemClass("/pages/menu")}
        >
          <div className={imageClass("/pages/menu")}>
            <img src="/icons/menu.svg" alt="Menu" className={iconClass} />
          </div>
          Menu
        </Link>

        <Link
          href="/pages/contact-us"
          aria-label="Contact"
          className={itemClass("/pages/contact-us")}
        >
          <div className={imageClass("/pages/contact-us")}>
            <img src="/icons/contact.svg" alt="Contact" className={iconClass} />
          </div>
          Contact
        </Link>

        <Link
          href="https://dhesimeat.cloudwaitress.com/"
          aria-label="Order Now"
          className={itemClass("https://dhesimeat.cloudwaitress.com/")}
        >
          <div className={imageClass("https://dhesimeat.cloudwaitress.com/")}>
            <img
              src="/icons/order-now.svg"
              alt="Order Now"
              className={iconClass}
            />
          </div>
          Order
        </Link>
      </div>
    </div>
  );
};
