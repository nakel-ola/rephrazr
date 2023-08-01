import {
  Augmentation,
  CTASection,
  FeatureSection,
  Footer,
  HeroSection,
  LittleThingsSection,
  Navbar,
} from "@/features/home";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <FeatureSection />
      <Augmentation />
      <LittleThingsSection />
      <CTASection />
      <Footer />
    </Fragment>
  );
}
