import { cn } from "@/lib/utils";
import React from "react";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { Details, PricingProps } from "./PriceSection";

type DetailsCardProps = Pick<
  PricingProps,
  "title" | "description" | "details" | "selected"
>;

export const DetailsCard = (props: DetailsCardProps) => {
  const { title, description, details, selected } = props;
  return (
    <div className="p-2">
      {/* head */}

      <div className="">
        <p
          className={cn(
            "text-2xl font-semibold pb-2",
            selected ? "text-primary" : "text-black"
          )}
        >
          {title}
        </p>
        <p className="text-neutral-500">{description}</p>
      </div>

      {details.map(({ items, title }, index) => (
        <div key={index} className="my-5 md:mb-14 lg:mb-20">
          <p className="text-base font-semibold pb-2 lg:hidden">{title}</p>

          <Card items={items} selected={selected} />
        </div>
      ))}
    </div>
  );
};

const Card = (props: { items: Details["items"]; selected: boolean }) => {
  const { items, selected } = props;
  return (
    <div className="flex items-center justify-between w-full">
      <div className="hidden md:block lg:hidden flex-1 gap-10 divide-y-[1px] divide-neutral-200">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 pl-0"
          >
            <p className="">{item.name}</p>
          </div>
        ))}
      </div>

      <div
        className={cn(
          "flex-1 border-2 rounded-lg bg-white gap-10 divide-y-[1px] divide-neutral-200",
          selected ? "border-primary" : "border-black"
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between md:justify-center p-3"
          >
            <p className="md:hidden">{item.name}</p>

            {item.value === true ? (
              <IoCheckmark className="text-2xl text-primary" />
            ) : null}
            {item.value === false ? (
              <IoClose className="text-2xl text-neutral-400" />
            ) : null}

            {typeof item.value !== "boolean" ? (
              <p className="">{item.value}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
