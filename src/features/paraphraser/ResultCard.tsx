import React from "react";

type Props = {
  text: string;
};
export const ResultCard = (props: Props) => {
  const { text } = props;
  return (
    <div className="flex w-full h-[300px] lg:h-full overflow-y-scroll p-2">
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
};
