import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-mono",
});

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

export const ibrand = localFont({
  src: "../styles/fonts/woff/Ibrand.woff",
  variable: "--font-ibrand",
  weight: "100 900",
});
