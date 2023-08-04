import { NeuButton } from "@/components/NeuButton";
import { cx } from "class-variance-authority";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { PricingProps } from "./PriceSection";

type Props = Pick<
  PricingProps,
  "title" | "features" | "pricing" | "selected"
> & {
  isMonthly: boolean;
};
// type Props = {
//   title: string;
//   pricing: {
//     price: string;
//     duration?: string;
//     label: string;
//   };
//   features: string[];
//   selected?: boolean;

//   isMonthly: boolean;
// };

const PricingCard = (props: Props) => {
  const { title, pricing, features, selected = false, isMonthly } = props;
  return (
    <div
      className={cx(
        "border-2 p-5 pb-5 rounded-2xl bg-white",
        selected ? "border-primary" : "border-black"
      )}
    >
      <p className="text-2xl font-semibold pb-2">{title}</p>

      <div className="flex">
        <p className="font-semibold text-5xl">
          {isMonthly ? pricing.price : pricing.yearPrice}
        </p>

        <div className="flex flex-col pl-1">
          <p className="">{pricing?.duration}</p>
          <p className="mt-auto">{pricing.label}</p>
        </div>
      </div>

      <NeuButton
        className={cx("w-full my-5", selected ? "" : "shadow-none")}
        variant={selected ? "solid" : "outline"}
      >
        Buy this plan
      </NeuButton>

      <div className="space-y-5 my-3">
        {features.map((item, index) => (
          <div key={index} className="flex items-center px-2">
            <IoCheckmark className="text-xl" />

            <p className="ml-2">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
