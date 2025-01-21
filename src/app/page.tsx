import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      {/* <hr />
      <hr />
      <Features />
      <hr />
      <ProductShowcase />
      <hr />
      <FAQs />
      <hr />
      <CallToAction />
      <hr />
      <Footer /> */}
    </>
  );
}
