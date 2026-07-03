const SERVICES = [
  { 
    title: "Architectural & Structural Steel", 
    href: "#contact",
    desc: "Heavy-duty steel frameworks, columns, beams, metal roofing structures, and reinforcements."
  },
  { 
    title: "Bespoke Ornamental Metalwork", 
    href: "#contact",
    desc: "Premium laser-cut gates, luxury handrails/balustrades, spiral staircases, and window security grilles."
  },
  { 
    title: "Artisanal & Custom Furniture", 
    href: "#contact",
    desc: "Industrial metal-frame furniture, custom office partition frames, and artistic outdoor metal installations."
  },
  { 
    title: "Maintenance & On-site Welding", 
    href: "#contact",
    desc: "Precision repairs, structural reinforcing, and specialized alloy welding for industrial or residential clients."
  },
];

export function MarketSectors() {
  return (
    <section id="services" className="market-sectors relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <img
        className="market-bg"
        src="/slider2.jpg"
        alt="welding sparks and steel work background"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 lg:px-10 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
          <div className="lg:pr-4 flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold">OUR CAPABILITIES</h3>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Core Fabrication Services</h2>
            <div className="mt-3 h-1 w-10 bg-green" />
            <p className="mt-6 max-w-md text-white/80 leading-relaxed">
              We design and construct premium metal solutions combining exceptional structural strength with flawless artisanal finishing.
            </p>
            <a
              className="mt-6 self-start inline-flex items-center rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-green/20 transition hover:bg-green-hover"
              href="https://wa.me/2347065664426?text=Hello%20Samtech%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20fabrication%20project."
            >
              Get a Free Quote
            </a>
          </div>

          <div>
            <div className="service-grid grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SERVICES.map((svc) => {
                const renderIcon = (name: string) => {
                  switch (name) {
                    case "Architectural & Structural Steel":
                      return (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 3v18" />
                          <path d="M15 3v18" />
                          <path d="M3 9h18" />
                          <path d="M3 15h18" />
                        </svg>
                      );
                    case "Bespoke Ornamental Metalwork":
                      return (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M8 11h8" />
                          <path d="M12 7v8" />
                        </svg>
                      );
                    case "Artisanal & Custom Furniture":
                      return (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                          <path d="M4 18v3" />
                          <path d="M20 18v3" />
                          <path d="M12 4v14" />
                          <rect x="3" y="8" width="18" height="10" rx="1" />
                        </svg>
                      );
                    case "Maintenance & On-site Welding":
                      return (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      );
                    default:
                      return (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      );
                  }
                };

                return (
                  <div
                    key={svc.title}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-gold/30 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="mb-4">
                        {renderIcon(svc.title)}
                      </div>
                      <h4 className="text-lg font-bold leading-snug text-white sm:text-xl">
                        {svc.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-light leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
