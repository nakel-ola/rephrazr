/* eslint-disable @next/next/no-img-element */
import AniJson from "@/data/screen-lottie.ani.json";
import { replaceLottieColors } from "@/lib/replaceLottieColor";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

type Props = {};
export function Augmentation(props: Props) {
  const {} = props;

  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <p className="font-medium text-gray text-center lg:text-start">
        AUGMENTATION
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center ">
        Effortlessly collaborate with AI trained <br /> on your published{" "}
        <span
          className="text-primary bg-no-repeat [backgroundPosition:_50%_95%] [backgroundSize:_10.3125rem] bg-[url(/svgs/squiggle-line.svg)]"
        >
          articles.
        </span>{" "}
      </h1>

      <div className="relative max-w-sm lg:max-w-2xl px-5 mt-16 ">
        <img
          src="/svgs/spickes.svg"
          alt=""
          className="absolute -bottom-12 lg:-bottom-14 -right-0 h-16 lg:h-fit lg:-right-10 z-50"
        />
        <Player
          autoplay
          loop
          src={replaceLottieColors(
            [
              ["#ff6701", "#16a34a"],
              ["#ff6702", "#16a34a"],
            ],
            AniJson
          )}
          className="relative"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 max-w-[90%] lg:max-w-[80%] gap-5 lg:gap-10 mt-20">
        {items.map((item, index) => (
          <div key={index} className="">
            <p className="text-lg lg:text-2xl font-medium mb-5">{item.name}</p>
            <img src={item.image} alt="" className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    name: "Add natural internal links, with an AI that's mindful.",
    image: "/svgs/aug-1.svg",
  },
  {
    name: "Matchless intellect, shaped by your very own words.",
    image: "/svgs/aug-2.svg",
  },
  {
    name: "Harness commands for limitless achievements.",
    image: "/svgs/aug-3.png",
  },
];
