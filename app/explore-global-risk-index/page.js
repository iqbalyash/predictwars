import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Explore Global Risk Index | Geopolitical Conflict Probability",
  description:
    "Understand geopolitical risk levels worldwide and how analysts estimate the probability of global conflicts. PredictWars Global Risk Index explains risk indicators and high-risk regions.",
  openGraph: {
    title: "Explore Global Risk Index | PredictWars",
    description:
      "Geopolitical risk levels and conflict probability. Military activity, diplomacy, economic pressure, and strategic alliances explained.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Global Risk Index | PredictWars",
    description:
      "Geopolitical risk index: where tensions are rising and how analysts estimate global conflict probability.",
  },
  alternates: { canonical: "https://www.predictwars.com/explore-global-risk-index" },
};

function WorldMapHeroBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      viewBox="0 0 1200 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M120 100 Q220 60 320 90 L400 170 Q380 220 300 200 L120 100Z"
        stroke="#38bdf8"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M420 80 L580 70 L680 150 L640 230 L500 220 L420 160 Z"
        stroke="#38bdf8"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M700 60 L920 50 L1000 140 L960 230 L780 250 L700 180 Z"
        stroke="#38bdf8"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M80 280 L280 260 L380 360 L340 450 L160 430 L80 340 Z"
        stroke="#ef4444"
        strokeWidth="1"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M400 270 L620 250 L720 340 L680 440 L500 460 L400 380 Z"
        stroke="#f97316"
        strokeWidth="1"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M740 280 L960 260 L1060 360 L1000 460 L800 480 L740 380 Z"
        stroke="#eab308"
        strokeWidth="1"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M100 480 L320 460 L400 530 L340 630 L140 600 L100 520 Z"
        stroke="#22c55e"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M440 500 L680 480 L780 560 L720 630 L500 630 L440 560 Z"
        stroke="#38bdf8"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

const RISK_INDICATORS = [
  {
    title: "Military Activity",
    description: "Troop movements, exercises, and military posture near borders or disputed areas are key signals analysts use to assess conflict probability.",
    icon: "🛡️",
    barColor: "bg-red-500",
  },
  {
    title: "Diplomatic Relations",
    description: "The state of talks, expulsions, and official statements between governments helps gauge whether tensions are escalating or stabilizing.",
    icon: "⚖️",
    barColor: "bg-orange-500",
  },
  {
    title: "Economic Pressure",
    description: "Sanctions, trade restrictions, and financial measures between states often accompany or precede geopolitical instability.",
    icon: "📊",
    barColor: "bg-amber-500",
  },
  {
    title: "Strategic Alliances",
    description: "New defense pacts and shifts in alliances can alter regional balance and influence the likelihood of conflict.",
    icon: "🔗",
    barColor: "bg-orange-500",
  },
];

const HIGH_RISK_REGIONS = [
  {
    title: "Middle East",
    description: "Regional rivalries, proxy dynamics, and strategic interests keep the Middle East among the most monitored regions for geopolitical risk. Analysts track military activity, diplomatic efforts, and economic pressure.",
    level: "High",
    levelColor: "text-red-400",
    barColor: "bg-red-500",
  },
  {
    title: "East Asia",
    description: "Strategic competition, territorial disputes, and military posture make East Asia a focus for conflict risk analysis. Naval and air activity are closely watched.",
    level: "Medium–High",
    levelColor: "text-orange-400",
    barColor: "bg-orange-500",
  },
  {
    title: "Eastern Europe",
    description: "Security alliances, military deployments, and diplomatic relations shape risk assessments in Eastern Europe. Defense spending and treaty developments are key indicators.",
    level: "Medium",
    levelColor: "text-amber-400",
    barColor: "bg-amber-500",
  },
];

const RELATED_CARDS = [
  { title: "Explore Conflict Predictions", href: "/explore-conflict-predictions", description: "How analysts predict global conflicts." },
  { title: "Early Warning Signs of War", href: "/early-warning-signals", description: "Patterns that often precede escalation." },
  { title: "Geopolitical Forecasting", href: "/explore-geopolitical-forecasting", description: "How experts interpret global signals." },
  { title: "Case Studies", href: "/deep-geopolitical-analysis", description: "In-depth conflict prediction analysis." },
];

export default function ExploreGlobalRiskIndexPage() {
  return (
    <div className="pw-home min-h-screen">
      {/* 1. Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-700/50 px-4 py-20 sm:py-28 md:py-32"
        aria-labelledby="hero-title"
      >
        <WorldMapHeroBackground />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Global Risk Index
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            Understanding the Probability of Global Conflicts
          </p>
          <p className="mt-4 text-lg text-slate-400">
            This page analyzes geopolitical tensions and global conflict risk indicators to help you understand where
            risks are rising and how analysts assess them.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore-conflict-predictions"
              className="pw-btn-glossy rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Explore Conflict Predictions
            </Link>
            <Link
              href="/learn-forecasting-methods#methods-title"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Learn Forecasting Methods
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Global Risk Index Overview */}
      <section
        id="overview"
        className="border-b border-slate-700/50 px-4 py-12 sm:py-16"
        aria-labelledby="overview-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="overview-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Global Risk Index Overview
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              The Global Risk Index helps readers understand where geopolitical tensions are rising and which regions may
              face a higher probability of conflict. Analysts around the world study political developments, military
              activity, economic pressure, and diplomatic relations to estimate global conflict risk. Data from the{" "}
              <a
                href="https://www.worldbank.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                World Bank
              </a>{" "}
              and reports from the{" "}
              <a
                href="https://www.un.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                United Nations
              </a>{" "}
              are among the sources used to inform such assessments.
            </p>
            <p className="leading-relaxed">
              PredictWars brings these signals together into a simplified framework that helps readers understand which
              regions are experiencing increasing geopolitical tension and why analysts are paying attention to them.
            </p>
            <p className="leading-relaxed">
              The goal of the Global Risk Index is not to predict wars with certainty but to highlight geopolitical risk
              indicators that may signal potential instability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Is a Global Risk Index */}
      <section
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-12 sm:py-16"
        aria-labelledby="what-is-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="what-is-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            What Is a Global Risk Index?
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              A global risk index analyzes geopolitical tensions using a set of indicators that experts associate with
              conflict probability. These typically include military activity, diplomatic relations, economic pressure,
              and strategic alliances.
            </p>
            <p className="leading-relaxed">
              By tracking these indicators across regions, analysts can estimate where tensions are stable, rising, or
              elevated. The result is a structured view of global conflict risk that helps policymakers, researchers,
              and the public stay informed about geopolitical stability.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Global Risk Indicators */}
      <section
        className="border-b border-slate-700/50 px-4 py-14 sm:py-18"
        aria-labelledby="indicators-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="indicators-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Global Risk Indicators
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RISK_INDICATORS.map((item) => (
              <div
                key={item.title}
                className="pw-card-hover pw-glass rounded-2xl border border-slate-600/50 p-6 shadow-xl"
              >
                <span className="text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                <div className="mt-4 h-1 w-12 rounded-full bg-slate-600">
                  <div className={`h-full w-full rounded-full ${item.barColor}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. High Risk Regions */}
      <section
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-14 sm:py-18"
        aria-labelledby="regions-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="regions-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            High Risk Regions
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {HIGH_RISK_REGIONS.map((region) => (
              <div
                key={region.title}
                className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{region.title}</h3>
                  <span className={`text-sm font-medium ${region.levelColor}`}>{region.level}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                  <div className={`h-full w-4/5 rounded-full ${region.barColor}`} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Global Risk Monitoring Matters */}
      <section
        className="border-b border-slate-700/50 px-4 py-12 sm:py-16"
        aria-labelledby="why-matters-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="why-matters-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Why Global Risk Monitoring Matters
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Analysts monitor geopolitical tensions and global stability to provide early context on where conflict
              risk may be increasing. This helps governments, international organizations, businesses, and the public
              make better-informed decisions.
            </p>
            <p className="leading-relaxed">
              A global risk index does not replace detailed intelligence or regional expertise. It offers a
              structured, easy-to-grasp view of conflict probability that complements deeper analysis and supports
              informed discussion about international security.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Related Analysis */}
      <section
        className="border-b border-slate-700/50 px-4 py-14 sm:py-18"
        aria-labelledby="related-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="related-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Related Analysis
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="pw-card-hover group block rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl transition"
              >
                <h3 className="font-semibold text-white group-hover:text-sky-400">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{card.description}</p>
                <span className="mt-3 inline-block text-sm font-medium text-sky-400 group-hover:underline">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section
        className="border-t border-slate-700/50 px-4 py-14 sm:py-18"
        aria-labelledby="newsletter-title"
      >
        <div className="mx-auto max-w-xl">
          <div className="pw-glass pw-card-hover rounded-2xl border border-slate-600/50 p-8 text-center shadow-xl sm:p-10">
            <h2 id="newsletter-title" className="text-2xl font-bold text-white sm:text-3xl">
              Get Weekly Geopolitical Risk Insights
            </h2>
            <p className="mt-3 text-slate-400">
              Stay informed with risk indicators and analysis delivered to your inbox.
            </p>
            <form action="#" className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-xl border border-slate-600 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:max-w-xs"
                autoComplete="email"
              />
              <button
                type="button"
                className="pw-btn-glossy rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
