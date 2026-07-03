"use client";

import { Logo } from "./Logo";
import {
  complianceBadges,
  footerColumns,
  footerMoreLinks,
  offices,
} from "./footer-data";

function FooterLink({
  label,
  href = "#",
}: {
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-block text-sm text-cream/65 transition-colors hover:text-green-hover"
    >
      {label}
    </a>
  );
}

function ComplianceBadge({
  name,
  status,
  variant = "compliant",
}: {
  name: string;
  status: string;
  variant?: "compliant" | "progress";
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-[10px] font-bold text-cream/80">
        {name.slice(0, 2)}
      </span>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
        <span className="text-xs font-semibold text-cream">{name}</span>
        <span
          className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
            variant === "progress"
              ? "bg-cream/10 text-cream/80"
              : "bg-green/20 text-cream"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden rounded-t-[2.5rem] bg-green-dark text-cream 2xl:rounded-t-[3rem]">
      <div className="px-6 py-14 lg:px-10 lg:py-20 xl:px-16">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4 lg:gap-y-14">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold tracking-wide text-cream">{col.title}</h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink label={link.label} href={link.href} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream/10 pt-4">
          {footerMoreLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-cream/50 transition-colors hover:text-green-hover"
            >
              {link.label} →
            </a>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-8 border-t border-cream/10 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="w-full max-w-xl">
            <h3 className="text-lg font-bold text-cream">Subscribe</h3>
            <p className="mt-2 text-sm text-cream/60">
              Stay up to date with our recent architectural design completions and metalwork releases.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex w-full items-center rounded-full border border-cream/20 bg-[#111827] p-1.5 pl-5 focus-within:border-green/40">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="Email*"
                className="min-w-0 flex-1 bg-transparent text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition-colors hover:bg-green hover:text-cream"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-center gap-6 lg:justify-end">
            {['Instagram', 'LinkedIn', 'X'].map((network) => (
              <a
                key={network}
                href={network === 'Instagram' ? 'https://www.instagram.com/samtechventure12' : '#'}
                target={network === 'Instagram' ? '_blank' : undefined}
                rel={network === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="text-sm font-semibold text-cream/70 transition-colors hover:text-green-hover"
              >
                {network}
              </a>
            ))}
          </div>
        </div>


        <div
          className="pointer-events-none relative -mx-6 mt-16 select-none overflow-hidden pb-6 pt-8 sm:-mx-10 sm:mt-20 sm:pb-10"
          aria-hidden="true"
        >
          <p className="text-center font-extrabold tracking-[0.2m] text-white opacity-95 text-4xl sm:text-6xl lg:text-8xl xl:text-9xl uppercase select-none">
            SAMTECH VENTURE
          </p>
        </div>
      </div>
    </footer>
  );
}
