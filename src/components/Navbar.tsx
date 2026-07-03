"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";

const NAV_LINKS = ["About", "Services", "Portfolio", "Methodology"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lockedScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      lockedScrollY.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      const wasOpen = menuOpen;
      const scrollY = lockedScrollY.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      if (wasOpen) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-[#0f172a]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav
        className="flex w-full items-center justify-between gap-4 px-6 py-4 lg:px-10"
        aria-label="Main navigation"
      >
        <a href="/" className="shrink-0">
          <Logo variant="light" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-base font-medium transition-colors hover:text-green-hover ${
                  scrolled ? "text-cream" : "text-white/95"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-green px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-hover lg:inline-flex"
          >
            Contact Us
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/95 text-[#0f172a] transition hover:bg-white lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-[#020617]/55 backdrop-blur-[1px] transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute left-0 top-0 h-dvh w-[78vw] max-w-xs rounded-r-3xl border-r border-white/10 bg-gradient-to-b from-[#071225] via-[#0a1628] to-[#0f172a] px-5 pb-8 pt-6 shadow-2xl shadow-black/50 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-start justify-between border-b border-white/10 pb-5">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                Navigation
              </span>
              <p className="mt-3 text-xl font-semibold text-white">Samtech Venture</p>
              <p className="mt-1 text-xs text-white/60">Precision. Finishing. Integrity.</p>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                 className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-6 space-y-2.5">
            {NAV_LINKS.map((link, index) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-medium text-cream transition hover:border-white/20 hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white/80">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    {link}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-green px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green/25 transition hover:bg-green-hover"
          >
            Contact Us
          </a>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">Support</p>
            <a href="#contact" className="mt-2 block text-sm font-medium text-white/85">
              Need help? Speak to our team
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
