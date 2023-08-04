import { HeroSection, PriceSection } from "@/features/pricing";
import Head from "next/head";
import React, { Fragment } from "react";

export default function Pricing() {
  return (
    <Fragment>
      <Head>
        <title>Pricing | Rephrazr</title>
      </Head>
      <HeroSection />
      <PriceSection />
    </Fragment>
  );
}
