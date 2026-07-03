"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Blueprint Analysis & Material Grading",
    desc: "We analyze structural drawings and architect blueprints to calculate exact weight loads, selecting high-tensile carbon steel or premium marine-grade stainless steel accordingly.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Precision Miter Cutting & Prep",
    desc: "Every cut is executed under strict tolerances. Mitered joints and chamfered edges are prepared to guarantee flawless welding penetration and clean architectural corners.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fusion Arc & Argon Welding",
    desc: "Certified weld artisans apply continuous root passes, grinding down slag and inspecting each structural weld joint for micro-porosities and load-bearing integrity.",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Rust Primer & Polyurethane Finish",
    desc: "Every assembly is treated with multi-layer zinc-phosphate anti-rust coatings, followed by premium matte-black or satin gloss paint to withstand Lagos coastal humidity.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

export function AchievementsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="methodology" className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="w-full px-6 lg:px-10 xl:px-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Column: Title & Interactive Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green">
                WORKSHOP METHODOLOGY
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl leading-tight">
                Watch every precise cut <br />
                and weld click into place
              </h2>
              <span className="mt-4 block h-1.5 w-16 bg-green" />
            </div>

            {/* Accordion list */}
            <div className="mt-8 space-y-4">
              {STEPS.map((step, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-slate-150 pb-4 transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
                    >
                      <span className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? "text-green" : "text-navy group-hover:text-green"
                      }`}>
                        {step.title}
                      </span>
                      <span className={`text-xl font-bold transition-transform ${
                        isOpen ? "text-green rotate-45" : "text-gray-muted"
                      }`}>
                        +
                      </span>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-sm text-gray-muted leading-relaxed pr-8">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Dynamic Showcase Image */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
              <img
                src={STEPS[activeIndex].image}
                alt={STEPS[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-navy/80 border border-white/10 rounded-xl px-3 py-1.5 text-[9px] font-mono tracking-widest text-cream uppercase">
                STAGE {activeIndex + 1} DIRECT EVIDENCE
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
