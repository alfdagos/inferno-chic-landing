import Hero from "@/components/cflm/Hero";
import Manifesto from "@/components/cflm/Manifesto";
import Details from "@/components/cflm/Details";
import Expectations from "@/components/cflm/Expectations";
import DressCode from "@/components/cflm/DressCode";
import FinalCTA from "@/components/cflm/FinalCTA";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Manifesto />
      <Details />
      <Expectations />
      <DressCode />
      <FinalCTA />
    </main>
  );
};

export default Index;
