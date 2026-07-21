import { useEffect } from "react";
import Hero from "@/components/cflm/Hero";
import Manifesto from "@/components/cflm/Manifesto";
import Gallery from "@/components/cflm/Gallery";
import Countdown from "@/components/cflm/Countdown";
import Details from "@/components/cflm/Details";
import Expectations from "@/components/cflm/Expectations";
import DressCode from "@/components/cflm/DressCode";
import FinalCTA from "@/components/cflm/FinalCTA";

const Index = () => {
  useEffect(() => {
    const scrollToId = (id: string, smooth = true) => {
      document.getElementById(id)?.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
      });
    };

    const runScroll = () => {
      const hashId = window.location.hash.replace("#", "");
      const pendingId = sessionStorage.getItem("cflm-scroll-target");
      const targetId = pendingId || hashId;

      if (!targetId) return;

      // Retry once after layout settles to make anchor navigation reliable.
      scrollToId(targetId);
      window.setTimeout(() => scrollToId(targetId), 250);

      if (pendingId) {
        sessionStorage.removeItem("cflm-scroll-target");
      }
    };

    runScroll();
    window.addEventListener("hashchange", runScroll);
    return () => window.removeEventListener("hashchange", runScroll);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Manifesto />
      <Gallery />
      <Countdown />
      <Details />
      <Expectations />
      <DressCode />
      <FinalCTA />
    </main>
  );
};

export default Index;
