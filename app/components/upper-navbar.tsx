// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function UpperNavbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50
//         flex items-center justify-center
//         backdrop-blur-md bg-black/30
//         transition-all duration-300
//         md:hidden
//         overflow-hidden
//         ${scrolled ? "h-14" : "h-20"}
//       `}
//     >
//       <Link href="/" className="flex items-center justify-center">
//         <div
//           className={`
//             relative
//             transition-all duration-300
//             ${scrolled ? "w-24 h-10" : "w-36 h-14"}
//           `}
//         >
//           <Image
//             src="/images/desi-meat-logo.png"
//             alt="Logo"
//             fill
//             priority
//             sizes="(max-width: 768px) 144px, 96px"
//             className="object-contain"
//           />
//         </div>
//       </Link>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UpperNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer — only active when navbar becomes fixed */}
      {scrolled && <div className="h-14 md:hidden" />}

      <header
        className={`
          w-full z-50
          flex items-center justify-center
          backdrop-blur-md bg-black/30
          transition-all duration-300
          lg:hidden
          ${scrolled ? "fixed top-0 left-0 h-14" : "relative h-20"}
        `}
      >
        <Link href="/" className="flex items-center justify-center">
          <div
            className={`
              relative transition-all duration-300
              ${scrolled ? "w-24 h-10" : "w-36 h-14"}
            `}
          >
            <Image
              src="/images/desi-meat-logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </header>
    </>
  );
}
