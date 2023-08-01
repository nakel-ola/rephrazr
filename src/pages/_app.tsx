import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Signika_Negative } from "next/font/google";
import { twJoin } from "tailwind-merge";

const font = Signika_Negative({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-signika-negative",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={twJoin(font.className, "page-max-width")}>
      <Component {...pageProps} />
    </div>
  );
}
