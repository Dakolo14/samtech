const SERVICES = [
  {
    title: "Non-Destructive Testing",
    description:
      "Advanced ultrasonic, radiographic, and magnetic particle inspection for critical assets.",
  },
  {
    title: "Valve Maintenance",
    description:
      "Precision overhaul, calibration, and lifecycle management for industrial valve systems.",
  },
  {
    title: "Pipeline Support",
    description:
      "End-to-end pipeline integrity, commissioning, and emergency response across the region.",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-cream py-16 sm:py-20" id="services">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10 xl:px-16">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-sm font-light uppercase tracking-widest text-red">
            Core Services
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">
            What We Deliver
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-[28px] border border-navy/10 bg-white p-5 text-sm leading-relaxed text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-6"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red/10"
                aria-hidden="true"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-red" />
              </div>
              <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm text-gray-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
