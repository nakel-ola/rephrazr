import { CardContainer, Navbar } from "@/features/auth";
import React, { Fragment } from "react";
import { MoonLoader } from "react-spinners";

export default function VerifyEmail() {
  return (
    <Fragment>
      <Navbar />

      <CardContainer showGoogle={false} title="Verifying your email">
        <div className="grid place-items-center">
          <MoonLoader />
        </div>
      </CardContainer>
    </Fragment>
  );
}
