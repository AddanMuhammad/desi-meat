import Image from "next/image";
import Link from "next/link";

const Footer = ({ cl = "" }: { cl?: string }) => {
  return (
    <footer className={`${cl} bg-black text-white`}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-8 ">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 lg:gap-12 items-center">
          {/* LEFT – QUICK LINKS */}
          <div className="order-2 md:order-1 text-left">
            <h4 className="font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/pages/about-us" },
                { label: "Menu", href: "/pages/menu" },
                { label: "Contact Us", href: "/pages/contact-us" },
                // { label: "Blog Us", href: "/blog" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white hover:underline transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER – LOGO + EMAIL + SOCIAL */}
          <div className="order-1 md:order-2 flex flex-col items-center text-center">
            <Image
              src="/images/desi-meat-logo.png"
              alt="Dhesi Meat Logo"
              width={110}
              height={110}
              className="mb-6"
            />

            <p className="hidden md:block text-sm text-gray-400 max-w-md mb-8">
              Savor fresh, locally-sourced meat meals, expertly prepared and
              delivered to your door for a delicious experience every time.
            </p>

            {/* <div className="flex items-center bg-white rounded-full w-full lg:max-w-md overflow-hidden mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-black outline-none"
              />
              <button className="font-satoshi font-semibold bg-linear-to-br from-[#cfa44a] to-[#e6c36a] text-black  mr-1.25 px-2 lg:px-4 py-2 rounded-full hover:bg-[#b8923f] transition">
                Sign up
              </button>
            </div> */}

            <div className="flex gap-4">
              {[
                { src: "/icons/instagram.svg", link: "https://instagram.com" },
                { src: "/icons/facebook.svg", link: "https://facebook.com" },
                { src: "/icons/tiktok.svg", link: "https://tiktok.com" },
              ].map((icon, i) => (
                <Link
                  key={i}
                  href={icon.link}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a24d] hover:scale-110 transition"
                >
                  <Image src={icon.src} alt="social" width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT – SUPPORT */}
          <div className="order-3 text-left md:text-right">
            <h4 className="font-semibold mb-5">Support</h4>
            {/* <ul className="space-y-3 text-sm">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms and Conditions</li>
              <li className="cursor-pointer">+1 604-593-5222</li>

              <li className="cursor-pointer">Track Order</li>
            </ul> */}
            <ul className="space-y-3 text-sm">
              {[
                { label: "Privacy Policy", href: "/pages/privacy-policy" },
                {
                  label: "Terms and Conditions",
                  href: "/pages/terms-and-conditions",
                },
                { label: "+1 604-593-5222", href: "#" },
                // { label: "Blog Us", href: "/blog" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white hover:underline transition duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 lg:mt-14 text-center text-xs text-gray-500">
          Copyright © 2025 All rights reserved. Powered by{" "}
          <a
            href="https://easytoscale.com/"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            Easy To Scale Inc.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
