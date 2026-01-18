import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 text-center">
      {" "}
      <div className="max-w-7xl flex flex-col justify-center items-center mx-auto pt-8">
        {" "}
        <img
          src="/images/desi-meat-logo.png"
          alt="Desi Meat Logo"
          width={100}
          height={100}
          className="object-contain"
        />{" "}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 mx-8 mt-10 work-sans">
          {" "}
          <div className="md:text-left">
            {" "}
            <h4 className="font-semibold mb-4">Quick link</h4>{" "}
            <ul className="space-y-3 text-sm text-gray-300/50">
              {" "}
              <li>
                {" "}
                <Link href="/pages/about-us">About Us</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/menu">Menu</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/pages/contact-us">Contact Us</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/blog">Blog Us</Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="flex flex-col items-center text-center ">
            {" "}
            <p className="text-sm text-gray-300/60 max-w-md mb-6">
              {" "}
              Savor fresh, locally-sourced meat meals, expertly prepared and
              delivered to your door for a delicious experience every time.{" "}
            </p>{" "}
            {/* EMAIL INPUT */}{" "}
            <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-max mb-6 pt-1 pr-2 pb-1">
              {" "}
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-black outline-none"
              />{" "}
              <button className="bg-[#c9a24d] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors p-10">
                {" "}
                SIGN UP{" "}
              </button>{" "}
            </div>{" "}
            {/* SOCIAL ICONS */} {/* SOCIAL ICONS */}{" "}
            <div className="flex gap-4">
              {" "}
              {[
                {
                  name: "instagram",
                  src: "/icons/instagram.svg",
                  link: "https://instagram.com",
                },
                {
                  name: "facebook",
                  src: "/icons/facebook.svg",
                  link: "https://facebook.com",
                },
                {
                  name: "tiktok",
                  src: "/icons/tiktok.svg",
                  link: "https://tiktok.com",
                },
              ].map((icon) => (
                <Link
                  key={icon.name}
                  href={icon.link}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c9a24d] cursor-pointer"
                >
                  {" "}
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={20}
                    height={20}
                  />{" "}
                </Link>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div className="md:text-right">
            {" "}
            <h4 className="font-semibold mb-4 ">Support</h4>{" "}
            <ul className="space-y-3 text-sm text-gray-300/50">
              {" "}
              <li>
                {" "}
                <Link href="/privacy-policy">Privacy Policy</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/refund-policy">Refund Policy</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/terms">Terms Of Service</Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link href="/track-order">Track Order</Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-12 text-center text-xs text-gray-500">
          {" "}
          © 2025 Dhesi Meat. All rights reserved. Reproduction without consent
          is prohibited. Privacy Policy.{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
