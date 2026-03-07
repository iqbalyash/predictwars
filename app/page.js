import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export const dynamic = "force-static";

export const metadata = {
  title: "Learn How to Predict Global Conflicts and Geopolitical Events",
  description:
    "PredictWars helps you learn geopolitical forecasting and global conflict prediction. Explore early warning signs, prediction markets, and risk dashboards.",
  alternates: { canonical: "https://www.predictwars.com" },
  openGraph: {
    title: "Learn How to Predict Global Conflicts and Geopolitical Events",
    description:
      "Geopolitical forecasting and conflict prediction. Trending tensions, risk maps, and prediction market insights.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn How to Predict Global Conflicts and Geopolitical Events",
    description: "Geopolitical forecasting and conflict prediction. Early warning signs, prediction markets, and risk analysis.",
  },
};

/* Simplified world map SVG for hero background */
function WorldMapBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M150 120 Q200 80 280 100 L320 180 Q300 220 250 200 L150 120Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M320 100 L450 90 L520 160 L480 220 L380 200 L320 160 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M520 80 L700 70 L780 140 L750 200 L620 220 L520 180 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M100 250 L280 240 L350 320 L320 400 L180 380 L100 300 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M380 260 L550 250 L650 320 L620 400 L480 420 L380 360 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M680 260 L880 250 L920 340 L860 420 L720 400 L680 320 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M120 420 L300 410 L380 480 L320 500 L180 480 L120 440 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M400 440 L600 430 L700 500 L620 500 L480 480 L400 460 Z"
        stroke="#38bdf8"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

/* Risk map SVG - stylized regions */
function RiskMapSvg() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden"
      aria-hidden
    >
      <defs>
        <linearGradient id="riskHigh" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="riskMed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="riskLow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="#0f2744" />
      <path d="M50 80 L200 60 L280 120 L250 180 L100 160 Z" fill="url(#riskHigh)" opacity="0.9" stroke="#ef4444" strokeWidth="1" />
      <path d="M300 50 L500 40 L580 100 L520 180 L380 160 Z" fill="url(#riskMed)" opacity="0.9" stroke="#f97316" strokeWidth="1" />
      <path d="M600 60 L750 50 L780 130 L720 200 L600 180 Z" fill="url(#riskLow)" opacity="0.9" stroke="#22c55e" strokeWidth="1" />
      <path d="M80 220 L250 200 L320 280 L280 360 L120 340 Z" fill="url(#riskMed)" opacity="0.9" stroke="#f97316" strokeWidth="1" />
      <path d="M340 240 L520 230 L600 300 L560 380 L400 360 Z" fill="url(#riskLow)" opacity="0.9" stroke="#22c55e" strokeWidth="1" />
      <path d="M620 250 L780 240 L800 320 L740 380 L620 360 Z" fill="url(#riskHigh)" opacity="0.9" stroke="#ef4444" strokeWidth="1" />
      <path d="M100 380 L280 370 L340 400 L300 400 L140 400 Z" fill="url(#riskLow)" opacity="0.9" stroke="#22c55e" strokeWidth="1" />
      <path d="M360 390 L560 380 L640 400 L580 400 L400 400 Z" fill="url(#riskMed)" opacity="0.9" stroke="#f97316" strokeWidth="1" />
    </svg>
  );
}

const TRENDING = [
  { title: "Israel–Iran Tensions", desc: "Regional escalation risk and diplomatic strain.", risk: 72, level: "high", href: "/trending-conflicts#israel-iran" },
  { title: "China–Taiwan", desc: "Cross-strait military and political dynamics.", risk: 58, level: "rising", href: "/trending-conflicts#china-taiwan" },
  { title: "Russia–NATO", desc: "Eastern European security and alliance posture.", risk: 65, level: "high", href: "/trending-conflicts#russia-nato" },
  { title: "Pakistan–Afghanistan", desc: "Border security and regional instability.", risk: 48, level: "medium", href: "/trending-conflicts#pakistan-afghanistan" },
  { title: "Pakistan–India", desc: "Kashmir and historical tensions.", risk: 52, level: "medium", href: "/trending-conflicts#pakistan-india" },
];

const SIGNALS = [
  { label: "Military buildup", desc: "Troop movements, exercises, mobilization.", icon: "🛡️" },
  { label: "Economic sanctions", desc: "Trade restrictions, financial pressure.", icon: "📉" },
  { label: "Diplomatic tensions", desc: "Rhetoric, breakdowns, expulsions.", icon: "⚡" },
  { label: "Strategic alliances", desc: "Security pacts, alliance shifts.", icon: "🤝" },
];

export default function Home() {
  const latestPosts = posts.slice(0, 4);

  return (
    <div className="pw-home min-h-screen">
      {/* 1. HERO */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <WorldMapBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]" />
        {/* Glowing hotspots */}
        <div className="absolute left-[15%] top-[35%] h-4 w-4 rounded-full bg-red-500/80 animate-pw-glow blur-md" />
        <div className="absolute right-[25%] top-[30%] h-3 w-3 rounded-full bg-amber-500/70 animate-pw-glow blur-sm" style={{ animationDelay: "0.5s" }} />
        <div className="absolute left-[45%] bottom-[30%] h-3 w-3 rounded-full bg-red-500/60 animate-pw-glow blur-sm" style={{ animationDelay: "1s" }} />
        <div className="absolute right-[15%] bottom-[25%] h-4 w-4 rounded-full bg-amber-500/70 animate-pw-glow blur-md" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Learn How to Predict Global Conflicts and Geopolitical Events
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Geopolitical forecasting uses data, early warning indicators, and prediction markets to estimate the probability of global conflicts. Understand how analysts track tensions and assess risk.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore-conflict-predictions"
              className="pw-btn-glossy rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Explore Conflict Predictions
            </Link>
            <Link
              href="/explore-global-risk-index"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Global Risk Index
            </Link>
            <Link
              href="/learn-forecasting-methods"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Learn Forecasting Methods
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRENDING GLOBAL CONFLICTS */}
      <section className="relative border-t border-slate-700/50 bg-[#0f2744] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Trending Global Conflicts
          </h2>
          <p className="mt-2 text-slate-400">Regions analysts are watching for conflict probability.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TRENDING.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="pw-card-hover group relative overflow-hidden rounded-2xl border border-slate-600/50 bg-[#132238] p-0 shadow-xl"
              >
                <div className="h-36 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-slate-600 group-hover:to-slate-700 transition-colors" />
                <div className="p-5">
                  <h3 className="font-bold text-white group-hover:text-sky-300 transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-2">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`text-2xl font-bold ${item.level === "high" ? "text-red-400" : item.level === "rising" ? "text-orange-400" : "text-amber-400"}`}>
                      {item.risk}%
                    </span>
                    <span className="text-xs font-medium text-slate-500">Risk</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                    <div
                      className={`h-full rounded-full ${item.level === "high" ? "bg-red-500" : item.level === "rising" ? "bg-orange-500" : "bg-amber-500"}`}
                      style={{ width: `${item.risk}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/trending-conflicts"
            className="mt-8 inline-block text-sm font-medium text-sky-400 hover:text-sky-300"
          >
            View full analysis with expandable details →
          </Link>
        </div>
      </section>
      <section className="border-t border-slate-700/50 bg-[#0a1628] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Global Conflict Risk Map
          </h2>
          <p className="mt-2 text-slate-400">Regional risk levels used in geopolitical forecasting.</p>
          <div className="mt-8 rounded-2xl border border-slate-600/50 bg-[#0f2744] p-4 md:p-6">
            <RiskMapSvg />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 border-t border-slate-600/50 pt-6">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-red-500" />
                <span className="text-sm text-slate-300">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-amber-500" />
                <span className="text-sm text-slate-300">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded bg-emerald-500" />
                <span className="text-sm text-slate-300">Low Risk</span>
              </div>
            </div>
          </div>
          <Link
            href="/explore-geopolitical-forecasting"
            className="mt-6 inline-block text-sm font-medium text-sky-400 hover:text-sky-300"
          >
            Explore geopolitical forecasting →
          </Link>
        </div>
      </section>

      {/* 4. EARLY WARNING SIGNALS */}
      <section className="border-t border-slate-700/50 bg-[#0f2744] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Early Warning Signals
          </h2>
          <p className="mt-2 text-slate-400">Indicators analysts monitor to assess conflict probability.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SIGNALS.map((item) => (
              <div
                key={item.label}
                className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl pw-glass"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-bold text-white">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/early-warning-signals#how-analysts-use-signals" className="mt-6 inline-block text-sm font-medium text-sky-400 hover:text-sky-300">
            How analysts use these signals →
          </Link>
        </div>
      </section>

      {/* 5. PREDICTION MARKET INSIGHTS */}
      <section className="border-t border-slate-700/50 bg-[#0a1628] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Prediction Market Insights
          </h2>
          <p className="mt-2 text-slate-400">How forecasting platforms estimate geopolitical event probability.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-2xl border border-slate-600/50 bg-[#132238] p-6 pw-glass">
              <p className="text-slate-300 leading-relaxed">
                Prediction markets let participants trade on the outcome of future events. Prices reflect the collective
                probability that an event will occur—such as conflict escalation or a diplomatic agreement. As news
                breaks, participants update their views and prices shift, providing a real-time view of how informed
                observers assess geopolitical risk.
              </p>
              <Link href="/updates" className="mt-4 inline-block font-medium text-sky-400 hover:text-sky-300">
                Prediction markets explained →
              </Link>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {["Conflict escalation (next 6mo)", "Diplomatic agreement", "Military incident"].map((label, i) => (
                <div key={label} className="rounded-xl border border-slate-600/50 bg-[#132238] p-4">
                  <p className="text-sm text-slate-400">{label}</p>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-sky-500"
                      style={{ width: `${[42, 28, 15][i]}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Implied probability</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEEP ANALYSIS ARTICLES */}
      <section className="border-t border-slate-700/50 bg-[#0f2744] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Deep Geopolitical Analysis
          </h2>
          <p className="mt-2 text-slate-400">In-depth editorial and case studies.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/deep-geopolitical-analysis#case-studies"
              className="pw-card-hover group relative overflow-hidden rounded-2xl border border-slate-600/50 bg-[#132238] shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/Case-studies-Global-Conflicts.png"
                  alt="Case studies in global conflict prediction and geopolitical analysis"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">Case Studies</h3>
                <p className="mt-2 text-slate-400">
                  How forecasters anticipated escalation and how prediction markets reacted to past crises.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-sky-400">Read analysis →</span>
              </div>
            </Link>
            <Link
              href="/updates"
              className="pw-card-hover group relative overflow-hidden rounded-2xl border border-slate-600/50 bg-[#132238] shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/Updates-Global-Conflicts.png"
                  alt="Latest updates on global conflicts and geopolitical forecasting"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">Updates & Analysis</h3>
                <p className="mt-2 text-slate-400">
                  Latest analytical posts on geopolitical forecasting and conflict prediction.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-sky-400">Read analysis →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LATEST FORECASTS */}
      <section className="border-t border-slate-700/50 bg-[#0a1628] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-slate-600/50">
            <div className="relative aspect-[21/9] w-full min-h-[160px] sm:min-h-[200px]">
              <Image
                src="/Updates-Global-Conflicts.png"
                alt="Latest geopolitical forecasts and conflict analysis"
                fill
                className="object-cover"
                sizes="100vw"
                priority={false}
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Latest Geopolitical Forecasts
          </h2>
          <p className="mt-2 text-slate-400">Recent analysis on global tensions and conflict probability.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/updates/${post.slug}`}
                className="pw-card-hover group rounded-2xl border border-slate-600/50 bg-[#132238] p-5 shadow-xl"
              >
                <h3 className="font-bold text-white line-clamp-2 group-hover:text-sky-300 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-slate-400">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-medium text-sky-400">Read more →</span>
              </Link>
            ))}
          </div>
          <Link href="/updates" className="mt-8 inline-block text-sm font-medium text-sky-400 hover:text-sky-300">
            View all updates
          </Link>
        </div>
      </section>

      {/* Related: internal SEO links */}
      <section className="border-t border-slate-700/50 px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold text-white sm:text-2xl mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/explore-global-risk-index" className="text-sm font-medium text-sky-400 hover:text-sky-300">Global Risk Index →</Link>
            <Link href="/learn-forecasting-methods" className="text-sm font-medium text-sky-400 hover:text-sky-300">Forecasting Methods →</Link>
            <Link href="/early-warning-signals" className="text-sm font-medium text-sky-400 hover:text-sky-300">Early Warning Signals →</Link>
            <Link href="/explore-conflict-predictions" className="text-sm font-medium text-sky-400 hover:text-sky-300">Conflict Predictions →</Link>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="border-t border-slate-700/50 bg-[#0f2744] px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Geopolitical Insights
          </h2>
          <p className="mt-3 text-slate-400">
            Subscribe for analysis on global conflict risk, prediction markets, and geopolitical forecasting.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            action="#"
          >
            <input
              type="email"
              placeholder="Your email"
              className="rounded-xl border border-slate-600 bg-[#132238] px-5 py-3.5 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 w-full sm:max-w-sm"
              aria-label="Email for newsletter"
            />
            <button
              type="button"
              className="pw-btn-glossy rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
