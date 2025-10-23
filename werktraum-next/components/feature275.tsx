"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { CanvasRevealEffect } from "@/components/aceternity/canvas-reveal-effect";

const Feature275 = () => {
  return (
    <section className="overflow-hidden bg-background min-h-screen flex items-center justify-center">
      <div className="container flex w-full flex-col items-center justify-center px-4 py-8">
        <h1 className="relative z-20 text-center font-sans text-5xl font-bold tracking-tighter lg:text-7xl text-foreground mb-4">
          Vom Plan zur Perfektion
        </h1>
        <p className="text-lg text-muted-foreground mx-auto max-w-2xl text-center lg:text-xl leading-relaxed mb-12">
          Ihr Raum, unsere Expertise.
          Professioneller Innenausbau, CAD-Planung und maßgeschneiderter Möbelbau in München und Bayern.
        </p>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <a href="/innenausbau">
            <Card
              defaultText="🏗️"
              revealText="Innenausbau"
              revealDesc="Von Gastronomie-Projekten bis zu Privaträumen. Hochwertige Lösungen für jeden Anspruch mit 20+ Jahren Erfahrung."
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
              hasRadialGradient
            />
          </a>
          <a href="/cad-planung">
            <Card
              defaultText="📐"
              revealText="CAD-Planung"
              revealDesc="Präzise 3D-Planungen und professionelle Vectorworks-Schulungen für perfekte Ergebnisse in jeder Dimension."
              animationSpeed={3}
              containerClassName="bg-slate-900"
              colors={[
                [59, 130, 246],
                [147, 197, 253],
              ]}
              dotSize={2}
              hasRadialGradient
            />
          </a>
          <a href="/tinyhouse">
            <Card
              defaultText="🏠"
              revealText="Tinyhouse-Projekte"
              revealDesc="Clevere Raumkonzepte für minimalistisches Leben mit maximaler Funktionalität und nachhaltigen Materialien."
              animationSpeed={3}
              containerClassName="bg-amber-900"
              colors={[[251, 191, 36]]}
              hasRadialGradient
            />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 text-lg"
          >
            Projekt starten
          </a>
          <a
            href="/referenzen"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 text-lg"
          >
            Referenzen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export { Feature275 };

const Card = ({
  defaultText,
  revealText,
  revealDesc,
  animationSpeed = 3,
  containerClassName = "bg-black",
  colors = [[255, 255, 255]],
  dotSize = 1,
  hasRadialGradient = false,
}: {
  defaultText: string;
  revealText: string;
  revealDesc: string;
  animationSpeed?: number;
  containerClassName?: string;
  colors?: number[][];
  dotSize?: number;
  hasRadialGradient?: boolean;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card bg-gray-800 border-2 border-border hover:border-primary/70 relative mx-auto flex h-[22rem] w-full items-center justify-center overflow-hidden rounded-3xl transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName={containerClassName}
              colors={colors}
              dotSize={dotSize}
            />
            {hasRadialGradient && (
              <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="text-muted-foreground absolute mx-auto flex w-full max-w-[10rem] flex-col items-center justify-center gap-5 text-center text-6xl leading-none tracking-tight transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {defaultText}
        </div>
        <div className="absolute relative z-10 mt-4 flex h-full flex-col justify-between border border-border p-7 tracking-tight text-foreground opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 rounded-lg bg-black/80 backdrop-blur-sm">
          <p className="text-2xl font-bold mb-4">{revealText}</p>
          <p className="text-base leading-relaxed">{revealDesc}</p>
        </div>
      </div>
    </div>
  );
};
