/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

export const FeatureSection = (props: Props) => {
  return (
    <div className="px-5 lg:px-10 pt-20 flex items-center justify-center flex-col lg:[&>div:nth-child(even)]:flex-row-reverse">
      {items.map((item, index) => (
        <CardRow key={index} {...item} />
      ))}
    </div>
  );
};

interface CardRowProps {
  label: string;
  title: string;
  description: string;
  image: string;
  imageSmall: string;
  imageIllu: string;
}
const CardRow = (props: CardRowProps) => {
  const { description, image, label, title, imageSmall,imageIllu } = props;
  return (
    <div className="flex flex-col lg:flex-row justify-between my-10 w-[90%]">
      <div className="relative max-w-full lg:max-w-sm space-y-3">
        <img src={imageIllu} alt="" className="absolute -top-10 left-32" />
        <p className="font-medium text-gray-600 text-center lg:text-start">
          {label}
        </p>

        <h1 className="text-3xl lg:text-5xl font-semibold text-center lg:text-start">
          {title}
        </h1>

        <p className="max-w-full lg:max-w-xs text-center lg:text-start">
          {description}
        </p>
      </div>
      <div className="lg:w-[50%] flex items-center justify-center mt-5 lg:mt-0">
        <img src={image} alt="" className="hidden lg:block" />
        <img src={imageSmall} alt="" className="lg:hidden w-[60%]" />
      </div>
    </div>
  );
};

const items = [
  {
    label: "IDEATION",
    title: "People-first ideas that you’ve never thought of.",
    description:
      "Knowing what to write next is half of the challenge. Reword uses an understanding of your audience to come up with novel content ideas.",
    image: "/svgs/ideation.svg",
    imageSmall: "/svgs/ideation-small.svg",
    imageIllu: "/svgs/bulb.svg",
  },
  {
    label: "RESEARCH",
    title: "Explore your topic without leaving the editor.",
    description:
      "Winning articles begin with great research, which is why Reword brings cited insights straight to your writers, so that they know what to write.",
    image: "/svgs/research.svg",
    imageSmall: "/svgs/research-small.svg",
    imageIllu: "/svgs/flying-star.svg",
  },
  {
    label: "OPTIMISATION",
    title: "Write for your readers, not the algorithms.",
    description:
      "Use your AI-powered topical model to detect topical blindspots in your content that are holding your performance back.",
    image: "/svgs/optimisation.svg",
    imageSmall: "/svgs/optimisation-small.svg",
    imageIllu: "/svgs/checkmark.svg",
  },
];
