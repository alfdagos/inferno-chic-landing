import Hero from "@/components/cflm/Hero";
import Manifesto from "@/components/cflm/Manifesto";
import Gallery from "@/components/cflm/Gallery";
import Details from "@/components/cflm/Details";
import Expectations from "@/components/cflm/Expectations";
import DressCode from "@/components/cflm/DressCode";
import FinalCTA from "@/components/cflm/FinalCTA";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Manifesto />
      <Gallery />
      <Details />
      <Expectations />
      <DressCode />
      <FinalCTA />
    </main>
  );
};

export default Index;
