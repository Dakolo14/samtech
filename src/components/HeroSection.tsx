"use client";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16 lg:pt-36 bg-navy">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
          alt="Metal fabrication workshop background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/80 to-navy/50 z-[1]" />
      </div>

      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="relative z-20 w-full px-6 lg:px-10 xl:px-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Premium Typography & Details */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green w-fit mb-6">
              <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
              Ikoyi, Lagos — 5.0 ★ Craftsmanship
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Bespoke Metalwork & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-emerald-400">
                Steel Engineering
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-base font-medium text-gray-light sm:text-lg lg:text-xl leading-relaxed">
              Operating from Oba Elegushi Art & Craft Market, we design and construct premium architectural details, heavy structural frameworks, and custom ornamental metal designs for luxury properties.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-green px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-green-hover shadow-lg shadow-green/20"
              >
                Request a Quote
              </a>
              <a
                href="https://wa.me/2347065664426?text=Hello%20Samtech%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20fabrication%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/10"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
          
          {/* Right Column: Blueprint-styled Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 shadow-2xl backdrop-blur-sm overflow-hidden">
              
              {/* Grid Overlay inside the card */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Premium metal gate installation"
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                />
                
                {/* Floating Meta tags */}
                <div className="absolute top-4 left-4 bg-navy/85 border border-white/10 rounded-xl px-3 py-2 text-[10px] uppercase font-mono tracking-widest text-cream">
                  <span className="text-green font-bold">PROJECT:</span> BANANA ISLAND GATE
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-navy/90 border border-white/10 rounded-xl p-3 flex justify-between items-center text-[10px] font-mono text-cream">
                  <div>
                    <p className="text-gray-light text-[9px]">MATERIAL</p>
                    <p className="font-semibold text-green">GALVANIZED STEEL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-light text-[9px]">FINISH</p>
                    <p className="font-semibold text-gold">MATTE ANTI-RUST</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
