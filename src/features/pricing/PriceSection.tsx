import SliderToggle from "@/components/SliderToggle";
import React, { useState } from "react";
import { DetailsCard } from "./DetailsCard";
import PricingCard from "./PricingCard";
import { PricingLabel } from "./PricingLabel";

type Props = {};

export type Details = {
  title: string;
  items: {
    name: string;
    value: string | boolean;
  }[];
};

export type PricingProps = {
  title: string;
  description: string;
  selected: boolean;
  pricing: {
    price: string;
    yearPrice: string;
    duration?: string;
    label: string;
  };
  features: string[];
  details: Details[];
};

const items: PricingProps[] = [
  {
    title: "Starter",
    description: "All your essential business finances, taken care of.",
    selected: false,
    pricing: {
      price: "$0",
      yearPrice: "$0",
      label: "14 day free trial",
    },
    features: [
      "1 project",
      "Train your own AI",
      "Unlimited AI assistance",
      "Create or optimise up to 4 articles",
      "Write in 20+ languages",
      "Upgrade at any time",
      "Cancel at any time",
    ],
    details: [
      {
        title: "Catered for business",
        items: [
          {
            name: "Tax Savings",
            value: true,
          },
          {
            name: "Easy to use accounting",
            value: true,
          },
          {
            name: "Multi-accounts",
            value: "3 accounts",
          },
          {
            name: "Invoicing",
            value: "3 invoices",
          },
          {
            name: "Exclusive offers",
            value: false,
          },
          {
            name: "6 months free advisor",
            value: false,
          },
          {
            name: "Mobile and web access",
            value: false,
          },
        ],
      },
      {
        title: "Other perks",
        items: [
          {
            name: "24/7 customer support",
            value: true,
          },
          {
            name: "Instant notifications",
            value: true,
          },
          {
            name: "Budgeting tools",
            value: true,
          },
          {
            name: "Digital receipts",
            value: true,
          },
          {
            name: "Pots to separate money",
            value: false,
          },
          {
            name: "Free bank transfers",
            value: false,
          },
          {
            name: "Business debit card",
            value: false,
          },
        ],
      },
    ],
  },
  {
    title: "Scale",
    selected: true,
    description: "The best financial services for your thriving business.",
    pricing: {
      price: "$48",
      yearPrice: "$38",
      duration: "Mo",
      label: "14 day free trial",
    },
    features: [
      "Up to 3 projects",
      "Train your own AI",
      "Unlimited AI assistance",
      "40 new drafts included",
      "3 writer seats included",
      "Collaborative editing",
      "Write in 20+ languages",
    ],
    details: [
      {
        title: "Catered for business",
        items: [
          {
            name: "Tax Savings",
            value: true,
          },
          {
            name: "Easy to use accounting",
            value: true,
          },
          {
            name: "Multi-accounts",
            value: "Unlimited accounts",
          },
          {
            name: "Invoicing",
            value: "Unlimited accounts",
          },
          {
            name: "Exclusive offers",
            value: true,
          },
          {
            name: "6 months free advisor",
            value: true,
          },
          {
            name: "Mobile and web access",
            value: true,
          },
        ],
      },
      {
        title: "Other perks",
        items: [
          {
            name: "24/7 customer support",
            value: true,
          },
          {
            name: "Instant notifications",
            value: true,
          },
          {
            name: "Budgeting tools",
            value: true,
          },
          {
            name: "Digital receipts",
            value: true,
          },
          {
            name: "Pots to separate money",
            value: true,
          },
          {
            name: "Free bank transfers",
            value: true,
          },
          {
            name: "Business debit card",
            value: true,
          },
        ],
      },
    ],
  },
  {
    title: "Growth",
    description: "Convenient features to take your business to the next level.",
    selected: false,
    pricing: {
      price: "$80",
      yearPrice: "$64",
      duration: "Mo",
      label: "14 day free trial",
    },
    features: [
      "Unlimited projects",
      "Train your own AI",
      "Unlimited AI assistance",
      "100 new drafts included",
      "Unlimited writer seats",
      "Collaborative editing",
      "Write in 20+ languages",
    ],
    details: [
      {
        title: "Catered for business",
        items: [
          {
            name: "Tax Savings",
            value: true,
          },
          {
            name: "Easy to use accounting",
            value: true,
          },
          {
            name: "Multi-accounts",
            value: "7 accounts",
          },
          {
            name: "Invoicing",
            value: "10 invoices",
          },
          {
            name: "Exclusive offers",
            value: true,
          },
          {
            name: "6 months free advisor",
            value: true,
          },
          {
            name: "Mobile and web access",
            value: false,
          },
        ],
      },
      {
        title: "Other perks",
        items: [
          {
            name: "24/7 customer support",
            value: true,
          },
          {
            name: "Instant notifications",
            value: true,
          },
          {
            name: "Budgeting tools",
            value: true,
          },
          {
            name: "Digital receipts",
            value: true,
          },
          {
            name: "Pots to separate money",
            value: true,
          },
          {
            name: "Free bank transfers",
            value: false,
          },
          {
            name: "Business debit card",
            value: false,
          },
        ],
      },
    ],
  },
];

export const PriceSection = (props: Props) => {
  const [selected, setSelected] = useState("Monthly");
  return (
    <div className="my-10 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center space-x-5">
        <SliderToggle
          labels={["Monthly", "Yearly"]}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-10 mt-8 w-[90%]  lg:w-[85%]">
        {items.map((item, index) => (
          <PricingCard key={index} {...item} isMonthly={selected === "Monthly"}  />
        ))}
      </div>

      <div className=" w-[90%] lg:w-[90%] mt-28">
        <div className="h-[1px] w-full bg-black/40 "></div>

        <div className="hidden lg:grid grid-cols-4 gap-5 ">
          <span className=""></span>
          <span className=""></span>
          <span className="bg-primary h-[2px] w-full"></span>
          <span className=""></span>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5 w-[90%] lg:w-[90%]">
        <PricingLabel
          labels={items[0].details.map((detail) => ({
            title: detail.title,
            items: detail.items.map((item) => item.name),
          }))}
        />
        {items.map((item, index) => (
          <DetailsCard
            key={index}
            title={item.title}
            description={item.description}
            details={item.details}
            selected={item.selected}
          />
        ))}
      </div>
    </div>
  );
};
