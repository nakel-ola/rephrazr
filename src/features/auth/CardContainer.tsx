import { NeuButton } from "@/components/NeuButton";
import { cx } from "class-variance-authority";
import { Google } from "iconsax-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = {
  isSign?: boolean;
  title: string;
  showGoogle?: boolean;
  link?: {
    title: string;
    href: string;
    label: string;
  };
};

export const CardContainer = (props: PropsWithChildren<Props>) => {
  const {
    isSign = false,
    children,
    title,
    link,
    showGoogle = true,
  } = props;
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8 mb-5">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-black">
          {title}
        </h2>

        {link && (
          <p className="mt-2 text-center text-sm text-black">
            {link.title}{" "}
            <Link
              href={link.href}
              className="font-semibold leading-6 text-primary hover:text-primary/80"
            >
              {link.label}
            </Link>
          </p>
        )}
      </div>
      <div
        className={cx(
          "my-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-black  rounded-xl shadow-[3px_3px_0px_black] bg-white p-5 ",
          showGoogle ? "divide-y-[1.5px] divide-gray-light" : ""
        )}
      >
        {showGoogle && (
          <div className="grid place-items-center pb-8">
            <NeuButton
              variant="outline"
              className="flex items-center justify-center w-[100%]"
            >
              <Google variant="Broken" className="mr-2" />

              {isSign ? "Sign in using Google" : "Sign up using Google"}
            </NeuButton>
          </div>
        )}

        <div className="">{children}</div>
      </div>
    </div>
  );
};
