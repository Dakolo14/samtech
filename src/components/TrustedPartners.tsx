export function TrustedPartners() {
  const TRUST_ITEMS = [
    {
      icon: (
        <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ikoyi Workshop",
      detail: "Shop N30, Art & Craft Market, Oba Elegushi Rd",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      title: "5.0 ★ Rating",
      detail: "Perfect Google customer satisfaction rating",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Precision Finishing",
      detail: "Anti-rust coating & premium structural integrity",
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-navy to-navy-deep border-b border-white/5">
      <div className="w-full px-6 lg:px-10 xl:px-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-gold/30 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-gray-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
