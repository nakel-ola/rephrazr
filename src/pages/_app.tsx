import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Signika_Negative } from "next/font/google";
import { twJoin } from "tailwind-merge";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const font = Signika_Negative({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-signika-negative",
});

const progress = new ProgressBar({
  size: 2,
  color: "#16a34a",
  className: "bar-of-progress",
  delay: 100,
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={twJoin(font.className, "mx-auto w-full max-w-7xl")}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
