"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/trending-conflicts", label: "Trending Conflicts" },
  { href: "/early-warning-signals", label: "Early Warning" },
  { href: "/deep-geopolitical-analysis", label: "Case Studies" },
  { href: "/explore-conflict-predictions", label: "Conflict Predictions" },
  { href: "/explore-global-risk-index", label: "Global Risk Index" },
  { href: "/explore-geopolitical-forecasting", label: "Geopolitical Forecasting" },
  { href: "/learn-forecasting-methods", label: "Forecasting Methods" },
  { href: "/updates", label: "Updates" },
];

function NavLinks({ onClick }) {
  return (
    <>
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="block rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset md:inline-block md:px-3 md:py-2"
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-700/50 bg-[#0a1628]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a
          href="/"
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
        >
          <span className="relative block h-8 w-[140px] sm:h-9 sm:w-[160px]">
            <Image
              src="/Predict-wars-Logo.png"
              alt="PredictWars"
              fill
              className="object-contain object-left"
              sizes="160px"
              priority
            />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex" aria-label="Main">
          <NavLinks />
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-600 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628] md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto overflow-x-hidden border-t border-slate-700/50 bg-[#0a1628] transition-[max-height] duration-200 ease-out md:hidden ${mobileOpen ? "max-h-[85vh]" : "max-h-0"}`}
        role="region"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-0 py-2 text-sm font-medium" aria-label="Main">
          <NavLinks onClick={() => setMobileOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
