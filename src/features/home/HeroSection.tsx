/* eslint-disable @next/next/no-img-element */
import { NeuButton } from "@/components/NeuButton";
import React from "react";
// import { IoLogo} from "react-icons/io5"
import AniJson from "@/data/hero-lottie-ani.json";
import { replaceColor, replaceLottieColors } from "@/lib/replaceLottieColor";
import { Player } from "@lottiefiles/react-lottie-player";
import { Google } from "iconsax-react";
import { getColors } from "lottie-colorify";

type Props = {};

export const HeroSection = (props: Props) => {
  return (
    <div className="relative pt-20 flex items-center justify-center flex-col">
      <div className="relative w-full  flex items-center justify-center flex-col">
        <img
          src="/svgs/star.svg"
          alt=""
          className="absolute h-7 lg:h-fit top-[70%] left-[6%]"
        />
        <img
          src="/svgs/cup.svg"
          alt=""
          className="absolute top-[80%] right-[15%] h-7 lg:h-fit"
        />
        <h1 className="text-4xl font-bold tracking-tight sm:text-7xl text-center ">
          Write articles that{" "}
          <span
            className="text-primary"
            style={{
              backgroundImage: "url(/svgs/squiggle-line.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 95%",
              backgroundSize: "10.3125rem",
            }}
          >
            perform
          </span>{" "}
          <br /> with an editor that thinks.
        </h1>

        <p className="mt-5 text-center">
          Reword helps your team collaborate ethically with AI, so that <br />{" "}
          you can write outstanding articles for your readers.
        </p>

        <div className="mt-10 flex items-center justify-center flex-col lg:flex-row  gap-8">
          <NeuButton className="flex">
            <Google variant="Broken" className="mr-2" />
            Start free with Google
          </NeuButton>
          <NeuButton variant="outline">Start free with email</NeuButton>
        </div>
      </div>

      <div className="mt-16 p-2 max-w-sm lg:max-w-5xl">
        <img src="/svgs/hero-image.svg" alt="" className="lg:hidden" />

        <Player
          autoplay
          loop
          src={replaceLottieColors(
            [
              ["#fff4ed", "#dcfce7"],
              ["#ff6702", "#16a34a"],
              ["#ff6701", "#16a34a"],
              ["#f4954a", "#16a34a"],
            ],
            AniJson
          )}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};