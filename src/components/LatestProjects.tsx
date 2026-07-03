const PROJECTS = [
  {
    title: "Luxury Residence Gate",
    location: "Ikoyi, Lagos",
    type: "Ornamental Metalwork",
    specs: {
      material: "Galvanized Carbon Steel",
      dimensions: "6.2m x 2.4m",
      finish: "Matte Black Weatherproof",
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Structural Frame",
    location: "Lekki Phase 1, Lagos",
    type: "Heavy Steel Engineering",
    specs: {
      material: "Universal I-Beams (Grade 50)",
      dimensions: "18m Heights Columns",
      finish: "Zinc Phosphate Anti-Rust Primer",
    },
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bespoke Spiral Railings",
    location: "Banana Island, Lagos",
    type: "Artisanal Handrails",
    specs: {
      material: "Hand-Rolled Wrought Iron",
      dimensions: "14.5 Linear Meters",
      finish: "Satin Black & Brushed Brass",
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
];

export function LatestProjects() {
  return (
    <section id="portfolio" className="bg-slate-50 py-16 sm:py-20">
      <div className="w-full px-6 lg:px-10 xl:px-16 mx-auto">
        <div className="mb-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green">
                OUR COMPLETED WORKS
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Creative Portfolio & Blueprints
              </h2>
              <span className="mt-4 block h-1.5 w-16 bg-green" />
            </div>
            <p className="max-w-xl text-base text-gray-muted leading-relaxed">
              Explore our recently completed custom fabrications. Every project shows our commitment to precise dimensions, clean joints, and architectural finishes.
            </p>
          </div>
        </div>

        {/* Blueprint Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="group relative rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with tag */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-navy/90 text-white border border-white/10 rounded-lg px-2.5 py-1 text-[10px] font-mono tracking-wider">
                  {project.type}
                </span>
              </div>

              {/* Title & Location */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy group-hover:text-green transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs font-medium text-gray-muted mb-4 flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {project.location}
                </p>
              </div>

              {/* Spec sheet drawer inside the card */}
              <div className="mt-4 bg-slate-50 rounded-2xl p-4 border border-slate-100 font-mono text-[11px] text-navy">
                <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-2">
                  <span className="text-gray-muted">MATERIAL</span>
                  <span className="font-semibold text-right text-slate-800">{project.specs.material}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/50 pb-2 mb-2">
                  <span className="text-gray-muted">SPECS</span>
                  <span className="font-semibold text-right text-slate-800">{project.specs.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-muted">COATING</span>
                  <span className="font-semibold text-right text-gold">{project.specs.finish}</span>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="https://wa.me/2347065664426?text=Hello%20Samtech%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20fabrication%20project."
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-green px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-green-hover shadow-sm"
              >
                Inquire About Specs
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
