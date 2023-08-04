import React from "react";

type HeroSectionProps = {};

export const HeroSection = (props: HeroSectionProps) => {
  return (
    <div className="relative pt-20 flex items-center justify-center flex-col w-full">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-center mx-2">
        Begin your writing{" "}
        <span className="text-primary bg-no-repeat [backgroundPosition:_50%_95%] [backgroundSize:_10.3125rem] bg-[url(/svgs/squiggle-line.svg)]">
          journey
        </span>
        , <br /> choose a plan at a later time.
      </h1>

      {/* Begin your writing journey, choose a plan at a later time. */}

      <p className="mt-5 text-center mx-2">
        Rephrazr enables ethical AI-driven collaboration, empowering <br /> your
        team to produce exceptional articles for your readers
      </p>
    </div>
  );
};
