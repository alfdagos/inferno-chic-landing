import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const SoldOutModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-void border border-blood/25 max-w-sm sm:max-w-md p-0 overflow-hidden rounded-none shadow-[0_0_80px_-10px_hsl(0_95%_42%_/_0.45)] sm:rounded-none">
        {/* Top blood accent bar */}
        <div className="h-[3px] w-full bg-blood-grad" />

        <div className="px-8 pb-10 pt-8 sm:px-12 text-center space-y-5">
          {/* Overline */}
          <p className="font-logo text-blood/55 text-[9px] tracking-[0.4em] uppercase">
            CFLM · SUMMER MMXXVI
          </p>

          {/* Main title */}
          <DialogTitle className="font-logo text-blood glow-text text-[2.6rem] sm:text-5xl tracking-[0.1em] uppercase leading-tight">
            Siamo<br />SOLD OUT!!
          </DialogTitle>

          {/* Diamond divider */}
          <div className="flex items-center gap-3 justify-center">
            <div className="flex-1 h-px bg-blood/25" />
            <div className="w-1.5 h-1.5 bg-blood/60 rotate-45 shrink-0" />
            <div className="flex-1 h-px bg-blood/25" />
          </div>

          {/* Themed subtitle */}
          <DialogDescription className="font-display text-ivory/70 text-sm sm:text-[0.95rem] leading-relaxed italic">
            Il numero è completo.<br />
            L&apos;inferno ha raggiunto la capienza massima.
          </DialogDescription>

          {/* Info body */}
          <p className="font-body text-ivory/45 text-xs leading-relaxed">
            Le iscrizioni in lista sono ufficialmente sospese.<br />
            Chi non è già dentro, rimane fuori.
          </p>

          <p className="font-display text-blood/50 text-xs italic">
            Ci vediamo al prossimo girone.
          </p>

          {/* CTA button */}
          <button
            onClick={() => setOpen(false)}
            className="cta-aggressive mt-1 px-8 py-2.5 border border-blood/55 text-blood font-logo text-[10px] tracking-[0.35em] uppercase hover:bg-blood hover:border-blood hover:text-white transition-colors duration-300"
          >
            OK, GASATEVI!
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SoldOutModal;
