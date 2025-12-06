import { Geist, Geist_Mono } from "next/font/google"
// import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// add custom font

// export const akira = localFont({
//   src: [
//     {
//       path: "../../public/fonts/akira/Akira-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/akira/Akira-Expanded.otf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
//   variable: "--font-akira",
// });

export const fonts = { geistSans, geistMono }
