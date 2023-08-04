import {
  Augmentation,
  CTASection,
  FeatureSection,
  HeroSection,
  LittleThingsSection,
} from "@/features/home";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home | Rephrazr</title>
      </Head>
      <HeroSection />
      <FeatureSection />
      <Augmentation />
      <LittleThingsSection />
      <CTASection />
    </Fragment>
  );
}
