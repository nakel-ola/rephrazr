import { NeuButton } from "@/components/NeuButton";
import { cx } from "class-variance-authority";
import { Google } from "iconsax-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = {
  isSign?: boolean;
  isReset?: boolean;
};

export const CardContainer = (props: PropsWithChildren<Props>) => {
  const { isSign = false, isReset = false, children } = props;
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8 mb-5">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {isSign && !isReset && (
          <>
            <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-black">
              Sign in to Rephrazr
            </h2>

            <p className="mt-2 text-center text-sm text-black">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/auth/sign_up"
                className="font-semibold leading-6 text-primary hover:text-primary/80"
              >
                Sign up
              </Link>
            </p>
          </>
        )}

        {!isSign && !isReset && (
          <>
            <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-black">
              Start writing with Rephrazr
            </h2>

            <p className="mt-2 text-center text-sm text-black">
              Already have an account?{" "}
              <Link
                href="/auth/sign_in"
                className="font-semibold leading-6 text-primary hover:text-primary/80"
              >
                Sign in
              </Link>
            </p>
          </>
        )}
        {isReset && (
          <>
            <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-black">
              Reset your password
            </h2>

            <p className="mt-2 text-center text-sm text-black">
              Changed your mind?{" "}
              <Link
                href="/auth/sign_up"
                className="font-semibold leading-6 text-primary hover:text-primary/80"
              >
                Back to login
              </Link>
              .
            </p>
          </>
        )}
      </div>
      <div
        className={cx(
          "my-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-black  rounded-xl shadow-[3px_3px_0px_black] bg-white p-5 ",
          isReset ? "" : "divide-y-[1.5px] divide-gray-light"
        )}
      >
        {!isReset && (
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
