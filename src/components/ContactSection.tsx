"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "Laser-Cut Gate",
  "Structural Frame",
  "Bespoke Railing",
  "Custom Furniture",
];

export function ContactSection() {
  const [projectType, setProjectType] = useState("Laser-Cut Gate");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-cream py-16 sm:py-24 text-[#0f172a] border-t border-slate-100">
      <div className="w-full px-6 lg:px-10 xl:px-16 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Workshop Details & Map Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green">
                VISIT THE WORKSHOP
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Get a Custom Quote
              </h2>
              <span className="mt-4 block h-1.5 w-16 bg-green" />
              <p className="mt-6 text-base text-gray-muted leading-relaxed">
                Whether you have complete architectural CAD blueprints or a simple hand-drawn sketch, our metal artisans are ready to bring your project parameters to life.
              </p>
            </div>

            {/* Spec info card */}
            <div className="mt-8 space-y-6 border-l-2 border-green/30 pl-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-green">Workshop Location</h4>
                <p className="mt-1.5 text-sm text-navy font-semibold leading-relaxed">
                  Shop N30, International Art & Craft Market,<br />
                  Oba Elegushi Rd, Ikoyi, Lagos, Nigeria
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-green">Direct Support</h4>
                <p className="mt-1.5 text-sm text-navy font-semibold">
                  samtechventure12@gmail.com <br />
                  +234-706-566-4426
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/2347065664426?text=Hello%20Samtech%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20a%20${encodeURIComponent(projectType)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#20ba5a] shadow-lg shadow-[#25d366]/20"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.202-1.364a9.923 9.923 0 004.804 1.23h.006c5.507 0 9.99-4.479 9.991-9.986.002-2.67-1.037-5.18-2.93-7.073A9.923 9.923 0 0012.012 2zm5.792 13.918c-.318.893-1.849 1.702-2.545 1.8-1.04.148-2.527-.47-5.467-1.688-3.08-1.278-5.01-4.417-5.163-4.622-.153-.205-1.22-1.626-1.22-3.1 0-1.474.773-2.197 1.05-2.496.277-.299.608-.374.808-.374h.576c.18 0 .438-.07.683.526.252.61.862 2.097.937 2.247.075.15.125.324.025.524-.1.2-.15.324-.3.499-.15.175-.315.39-.45.524-.15.15-.307.312-.132.61.175.3.774 1.278 1.66 2.07.15.137.33.242.502.321.438.384.887.414 1.182.23.295-.184.888-1.033 1.137-1.385.25-.35.499-.299.83-.175.334.125 2.115 1.05 2.48 1.23.366.18.61.27.7.425.09.155.09.897-.228 1.79z" />
              </svg>
              WhatsApp Selected Spec
            </a>
          </div>

          {/* Right Column: Spec Builder Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl border border-green/20 bg-green/5 p-10 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green text-white text-xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-navy">Specification Received</h3>
                <p className="mt-2 text-sm text-gray-muted">Our project engineers will contact you at your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-muted mb-3">
                    1. Select Project Scope
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProjectType(type)}
                        className={`rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border transition-all ${
                          projectType === type
                            ? "bg-green border-green text-white shadow-sm"
                            : "bg-slate-50 border-slate-200 text-navy hover:border-slate-300"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-muted mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-green focus:bg-white focus:ring-1 focus:ring-green/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-muted mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-green focus:bg-white focus:ring-1 focus:ring-green/30"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-muted mb-2">
                    2. Describe Dimensions & Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy outline-none transition focus:border-green focus:bg-white focus:ring-1 focus:ring-green/30"
                    placeholder="E.g., gate dimensions 6x2m, steel handrail details, rust-proofing requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-green px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-green-hover shadow-md shadow-green/10"
                >
                  Submit Spec Sheet
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
