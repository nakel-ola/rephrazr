/* eslint-disable @next/next/no-img-element */
import React from "react";
import { twJoin } from "tailwind-merge";

type Props = {};

export const LittleThingsSection = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col mt-24">
      <p className="font-medium text-gray-600 text-center lg:text-start">
        THOSE TINY DETAILS
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center ">
        All you require for people <br /> centric article writing.
      </h1>

      <div className="grid gap-10 lg:grid-cols-2 max-w-sm lg:max-w-5xl px-5 my-10">
        {features.slice(0, 2).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3 max-w-sm lg:max-w-5xl px-5">
        {features.slice(2).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

type CardProps = {
  image: string;
  label: string;
  title: string;
  description: string;
};

const Card = (props: CardProps) => {
  const { description, image, label, title } = props;
  return (
    <div className={twJoin("border-2 border-black p-8 rounded-2xl")}>
      <img src={image} alt="" className="" />

      <p className="text-sm mt-5 text-primary font-bold">{label}</p>
      <p className="text-xl font-medium">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

const features = [
  {
    image: "/svgs/seo.svg",
    label: "SEO",
    title: "Tailored for readers, recognized by search engines.",
    description:
      "Rephrazr prioritizes people-first, crafting captivating, reader-friendly articles appreciated by both readers and algorithms.",
  },
  {
    image: "/svgs/comments.svg",
    label: "COMMENTS",
    title: "Practical guidance for articles that excel in performance.",
    description:
      "Leverage your AI assistant's insightful comments on your articles, empowering you to address issues and elevate your content's quality, regardless of the subject matter.",
  },
  {
    image: "/svgs/mistakes.svg",
    label: "MISTAKES",
    title: "Enhanced readability and resolved grammar errors.",
    description:
      "Correct errors swiftly. Reword fine-tunes your articles, freeing you to prioritize essentials.",
  },
  {
    image: "/svgs/teammates.svg",
    label: "TEAMMATES",
    title: "Elevate the entire team with their AI assistant.",
    description:
      "Rephrazr prioritizes collaboration, not replacement. Empower your team with personal AI assistance.",
  },
  {
    image: "/svgs/integration.svg",
    label: "INTEGRATIONS",
    title: "Seamlessly integrate into your content stack.",
    description:
      "Link your current CMS and maintain content repository with 2-way synchronization.",
  },
];
