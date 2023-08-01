import { NeuButton } from "@/components/NeuButton";
import { Google } from "iconsax-react";
import React from "react";

type Props = {};

export const CTASection = (props: Props) => {
  return (
    <div className="px-5 lg:px-10 py-20 w-full flex items-center justify-center">
      <div className="lg:w-[85%] min-h-[400px] text-center lg:text-left bg-primary rounded-xl shadow-[3px_3px_0px_black] border-2 border-neutral-700 flex items-center flex-col justify-center p-5">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl text-center">
          Initiate AI assistant <br /> training using Rephrazr.
        </h2>
        <p className="mt-6 text-lg leading-8 text-center text-gray-dark dark:text-gray-light max-w-lg text-white">
          Rephrazr integrates seamlessly, fostering collaborative AI to enhance
          articles for readers.
        </p>

        <div className="mt-10 flex items-center justify-center flex-col lg:flex-row  gap-8">
          <NeuButton className="flex bg-white text-black">
            <Google variant="Broken" className="mr-2 " />
            Start free with Google
          </NeuButton>
          <NeuButton variant="outline" className="border-white text-white">
            Start free with email
          </NeuButton>
        </div>
      </div>
    </div>
  );
};
