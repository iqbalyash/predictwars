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

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-700/50 bg-[#0a1628]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]">
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
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-300 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

