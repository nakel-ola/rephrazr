import React from "react";

type PricingLabelProps = {
  labels: {
    title: string;
    items: string[];
  }[];
};
export const PricingLabel = (props: PricingLabelProps) => {
  const { labels } = props;
  return (
    <div className="hidden lg:block p-2 pt-16">
      {labels.map(({ items, title }, index) => (
        <div key={index} className="mt-5 mb-14">
          <p className="text-base font-semibold pb-2">{title}</p>

          <div className="flex-1 gap-10 divide-y-[1px] divide-neutral-200">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 pl-0"
              >
                <p className="">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
