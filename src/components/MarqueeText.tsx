export function MarqueeText() {
  return (
    <section className="overflow-hidden border-t border-white/10 py-10">
      <div className="flex w-full items-center whitespace-nowrap px-6 lg:px-10 xl:px-16">
        <div className="marquee-track text-7xl font-bold uppercase tracking-[0.45em] text-transparent text-stroke sm:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
          {Array(4)
            .fill("QUALITY ENGINEERING")
            .map((text, idx) => (
              <span key={idx} className="mr-20">
                {text}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
