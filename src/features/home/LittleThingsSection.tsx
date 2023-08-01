/* eslint-disable @next/next/no-img-element */
import React from "react";
import { twJoin } from "tailwind-merge";

type Props = {};

export const LittleThingsSection = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col mt-24">
      <p className="font-medium text-gray-600 text-center lg:text-start">
        THE LITTLE THINGS
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center ">
        Everything you need to write <br /> people-first articles.
      </h1>

      <div className="grid gap-10 lg:grid-cols-2 max-w-sm lg:max-w-5xl px-2 my-10">
        {features.slice(0, 2).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3 max-w-sm lg:max-w-5xl px-2">
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
  className: string;
};

const Card = (props: CardProps) => {
  const { description, image, label, title, className } = props;
  return (
    <div className={twJoin("border-2 border-black p-8 rounded-2xl")}>
      <img src={image} alt="" className="" />

      <p className="text-sm mt-5 text-primary font-medium">{label}</p>
      <p className="text-xl font-medium">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

const features = [
  {
    image: "/svgs/seo.svg",
    label: "SEO",
    title: "Optimised for readers, rewarded by search engines.",
    description:
      "Reword takes a people-first approach, to create highly readable, engaging articles that will be loved by your readers, and the algorithms.",
    className: "col-start-1 col-end-2",
  },
  {
    image: "/svgs/comments.svg",
    label: "COMMENTS",
    title: "Actionable advice to create articles that perform.",
    description:
      "Your AI assistant can leave comments on your articles, so that you can fix problems and level up your content, whatever the topic.",
    className: "col-start-2 col-end-2",
  },
  {
    image: "/svgs/mistakes.svg",
    label: "MISTAKES",
    title: "Readability and grammar mistakes, fixed.",
    description:
      "Fix any mistakes in seconds. Reword can perfect your articles for you, so that you can focus on what matters.",

    className: "col-start-1 col-end-1 row-start-2 row-end-2",
  },
  {
    image: "/svgs/teammates.svg",
    label: "TEAMMATES",
    title: "Level up your entire team with their assistant.",
    description:
      "Reword is focussed on collaboration, not replacement. Give your team the power of their own AI assistant.",
    className: "col-start-2 col-end-2 row-start-2 row-end-2",
  },
  {
    image: "/svgs/integration.svg",
    label: "INTEGRATIONS",
    title: "Integrate directly with your content stack.",
    description:
      "Connect with your existing CMS and keep your content repository in check with our 2-way synchronisation.",
    className: "col-start-3 col-end-3 row-start-2 row-end-2",
  },
];
