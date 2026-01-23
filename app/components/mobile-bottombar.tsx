"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileBottomBar = () => {
  const pathname = usePathname();

  const itemClass = (path: string) =>
    `flex flex-col w-full items-center gap-1 text-[10px] ${
      pathname === path ? "text-[#d2a55f]" : "text-gray-400"
    }`;
  
  const imageClass = (path: string) =>
    pathname === path ? "flex w-full justify-center items-center bg-white rounded-3xl" : ""
  

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex justify-around bg-[#1e1e1e] border-t border-gray-700 py-2">
        <Link href="/" className={itemClass("/")}>
          {/* <Home size={18} /> */}
          <div className={imageClass("/")}>
            <img src="/icons/home.svg" alt="" className="w-8" />
          </div>
          Home
        </Link>

        <Link href="/pages/about-us" className={itemClass("/pages/about-us")}>
          {/* <Info size={18} /> */}
          <div className={imageClass("/pages/about-us")}>
            <img src="/icons/about.svg" alt="" className="w-8" />
          </div>
          About
        </Link>

        <Link href="/pages/blog" className={itemClass("/pages/blog")}>
          <div className={imageClass("/pages/blog")}>
            <img src="/icons/blog.svg" alt="" className="w-8" />
          </div>
          Blog
        </Link>

        <Link href="/pages/menu" className={itemClass("/pages/menu")}>
          <div className={imageClass("/pages/menu")}>
            <img src="/icons/menu.svg" alt="" className="w-8"/>
          </div>
          Menu
        </Link>

        <Link
          href="/pages/contact-us"
          className={itemClass("/pages/contact-us")}
        >
          <div className={imageClass("/pages/contact-us")}>
            <img src="/icons/contact.svg" alt="" className="w-8" />
          </div>
          Contact
        </Link>

        <Link
          href="/pages/contact-us"
          className={itemClass("/pages/order-now")}
        >
          <div className={imageClass("/pages/order-now")}>
            <img src="/icons/order-now.svg" alt="" className="w-8" />
          </div>
          Order Now
        </Link>
      </div>
    </div>
  );
};
