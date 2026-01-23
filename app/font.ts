import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";

export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const itcClearface = localFont({
  src: [
    {
      path: "../public/fonts/itc-clearface-std-regular/ClearfaceStd-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-itc-clearface",
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});
