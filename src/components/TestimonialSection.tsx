const TESTIMONIALS = [
  {
    quote:
      "Samtech delivered our custom laser-cut security gates ahead of schedule. The matte-black finishing is flawless and has held up perfectly against the coastal Lagos humidity.",
    author: "Chinedu Okafor",
    role: "Developer, Oakwood Residences",
    stars: 5,
  },
  {
    quote:
      "Their team was extremely precise with the structural steel framework for our building expansion in Ikoyi. Strict adherence to blueprints and timely delivery.",
    author: "Tunde Folawiyo",
    role: "Project Manager, Folawiyo & Partners",
    stars: 5,
  },
  {
    quote:
      "The custom curved handrails they fabricated for our Banana Island residential project are pure art. Exceptional metal craftsmanship and premium client care.",
    author: "Funmi Elegushi",
    role: "Lead Interior Designer, Premium Spaces",
    stars: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-100">
      <div className="w-full px-6 lg:px-10 xl:px-16 mx-auto">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-green">
            CLIENT FEEDBACK
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Trusted by Architects & Homeowners
          </h2>
          <span className="mt-4 block h-1.5 w-16 bg-green mx-auto" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <article
              key={index}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Gold Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4.5 w-4.5 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-base text-navy/85 italic leading-relaxed mb-6 flex-grow">
                “{item.quote}”
              </p>

              {/* Author details */}
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-navy text-sm sm:text-base">
                    {item.author}
                  </p>
                  <p className="text-xs text-gray-muted mt-0.5">
                    {item.role}
                  </p>
                </div>
                <span className="text-4xl text-green/10 font-serif leading-none">”</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
