import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Explore Geopolitical Forecasting | How Experts Predict Global Conflicts",
  description:
    "How analysts predict global conflicts and geopolitical risks. PredictWars explains forecasting indicators, risk levels, and key regions.",
  openGraph: {
    title: "Explore Geopolitical Forecasting | PredictWars",
    description:
      "Geopolitical forecasting: how experts predict global conflicts using indicators and risk analysis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Geopolitical Forecasting | PredictWars",
    description:
      "How analysts predict global conflicts and geopolitical risks. Forecasting indicators and key regions explained.",
  },
  alternates: { canonical: "https://www.predictwars.com/explore-geopolitical-forecasting" },
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

function ConflictRiskMap() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-600/50 shadow-xl"
      aria-labelledby="risk-map-title"
    >
      <defs>
        <linearGradient id="riskHigh" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="riskRising" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="riskModerate" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="riskStable" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect width="800" height="420" fill="#0f2744" />
      {/* Stylized regions - Middle East (High) */}
      <path
        d="M180 180 L320 160 L380 220 L340 280 L200 260 Z"
        fill="url(#riskHigh)"
        opacity="0.85"
        stroke="#ef4444"
        strokeWidth="1.5"
      />
      <text x="260" y="225" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">
        Middle East
      </text>
      {/* East Asia (Rising) */}
      <path
        d="M480 80 L620 70 L700 130 L660 200 L520 190 Z"
        fill="url(#riskRising)"
        opacity="0.85"
        stroke="#f97316"
        strokeWidth="1.5"
      />
      <text x="590" y="145" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">
        East Asia
      </text>
      {/* Eastern Europe (Moderate) */}
      <path
        d="M340 120 L500 100 L560 170 L520 240 L380 220 Z"
        fill="url(#riskModerate)"
        opacity="0.85"
        stroke="#eab308"
        strokeWidth="1.5"
      />
      <text x="430" y="175" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">
        Eastern Europe
      </text>
      {/* Korean Peninsula (Rising) */}
      <path
        d="M580 160 L660 150 L700 200 L660 250 L560 240 Z"
        fill="url(#riskRising)"
        opacity="0.85"
        stroke="#f97316"
        strokeWidth="1.5"
      />
      <text x="630" y="210" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">
        Korean Peninsula
      </text>
      {/* South China Sea (Moderate) */}
      <path
        d="M520 240 L640 220 L720 280 L680 340 L560 320 Z"
        fill="url(#riskModerate)"
        opacity="0.85"
        stroke="#eab308"
        strokeWidth="1.5"
      />
      <text x="620" y="290" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">
        South China Sea
      </text>
      {/* Other stable regions */}
      <path
        d="M80 280 L220 260 L280 320 L240 380 L100 360 Z"
        fill="url(#riskStable)"
        opacity="0.75"
        stroke="#22c55e"
        strokeWidth="1"
      />
      <path
        d="M620 320 L760 300 L800 360 L740 420 L600 400 Z"
        fill="url(#riskStable)"
        opacity="0.75"
        stroke="#22c55e"
        strokeWidth="1"
      />
    </svg>
  );
}

const INDICATORS = [
  {
    title: "Military Developments",
    description: "Troop movements, exercises, and military posture are key signals analysts use to assess conflict probability and regional tension.",
    icon: "🛡️",
    bar: "bg-red-500",
  },
  {
    title: "Diplomatic Relations",
    description: "The state of talks, summits, and official statements between governments helps gauge whether tensions are escalating or stabilizing.",
    icon: "⚖️",
    bar: "bg-orange-500",
  },
  {
    title: "Economic Competition",
    description: "Trade disputes, sanctions, and financial pressure between states often accompany or precede geopolitical escalation.",
    icon: "📊",
    bar: "bg-amber-500",
  },
  {
    title: "Strategic Alliances",
    description: "New defense pacts and shifts in alliances can alter regional balance and influence the likelihood of conflict.",
    icon: "🔗",
    bar: "bg-orange-500",
  },
];

const MODELS = [
  {
    title: "Historical Analysis",
    description: "Experts study how past conflicts and crises unfolded to identify recurring patterns, triggers, and escalation dynamics that may signal future risk.",
    icon: "📈",
  },
  {
    title: "Data-Based Forecasting Models",
    description: "Structured models combine multiple indicators—military, economic, diplomatic—to estimate conflict probability and compare scenarios across regions.",
    icon: "📐",
  },
  {
    title: "Collective Intelligence",
    description: "Prediction markets and aggregated expert forecasts provide an additional signal on how informed participants assess geopolitical outcomes.",
    icon: "👥",
  },
];

const RELATED_CARDS = [
  { title: "Explore Conflict Predictions", href: "/explore-conflict-predictions", description: "How analysts predict global conflicts." },
  { title: "Global Risk Index", href: "/explore-global-risk-index#overview", description: "Geopolitical risk levels by region." },
  { title: "Learn Forecasting Methods", href: "/learn-forecasting-methods#methods-title", description: "Structured forecasting frameworks." },
  { title: "Early Warning Signs of War", href: "/early-warning-signals", description: "Patterns that often precede escalation." },
];

export default function ExploreGeopoliticalForecastingPage() {
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
            Explore Geopolitical Forecasting
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            How Experts Predict Global Conflicts and Geopolitical Events
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore-conflict-predictions"
              className="pw-btn-glossy rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Explore Conflict Predictions
            </Link>
            <Link
              href="/explore-global-risk-index#overview"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              View Global Risk Index
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Global Conflict Risk Map */}
      <section
        id="risk-map"
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-12 sm:py-16"
        aria-labelledby="risk-map-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="risk-map-title" className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            Global Conflict Risk Map
          </h2>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-slate-600/50 bg-[#132238]/80 px-6 py-4">
            <span className="text-sm font-medium text-slate-300">Risk levels:</span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-8 rounded bg-red-500" aria-hidden />
              <span className="text-sm text-slate-300">High Risk</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-8 rounded bg-orange-500" aria-hidden />
              <span className="text-sm text-slate-300">Rising Risk</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-8 rounded bg-amber-500" aria-hidden />
              <span className="text-sm text-slate-300">Moderate Risk</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-8 rounded bg-green-500" aria-hidden />
              <span className="text-sm text-slate-300">Stable</span>
            </span>
          </div>
          <ConflictRiskMap />
        </div>
      </section>

      {/* 3. Main content */}
      <section
        id="main-content"
        className="border-b border-slate-700/50 px-4 py-12 sm:py-16"
        aria-labelledby="main-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="main-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Geopolitical Forecasting Explained
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Geopolitical forecasting is the practice of analyzing global political, military, and economic
              developments to estimate future international events.
            </p>
            <p className="leading-relaxed">
              Forecasting global conflicts requires studying indicators such as diplomatic relations, military activity,
              economic policies, and historical patterns.
            </p>
            <p className="leading-relaxed">
              PredictWars explains how analysts interpret these signals to understand geopolitical risks.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Key Forecasting Indicators */}
      <section
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-14 sm:py-18"
        aria-labelledby="indicators-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="indicators-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Key Forecasting Indicators
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDICATORS.map((item) => (
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
                  <div className={`h-full w-full rounded-full ${item.bar}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Forecasting Models */}
      <section
        className="border-b border-slate-700/50 px-4 py-14 sm:py-18"
        aria-labelledby="models-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="models-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Forecasting Models
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {MODELS.map((item) => (
              <div
                key={item.title}
                className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl"
              >
                <span className="text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Forecasting Matters */}
      <section
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-12 sm:py-16"
        aria-labelledby="why-matters-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="why-matters-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Why Forecasting Matters
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Geopolitical forecasting helps readers understand global tensions and international stability in a
              structured way. Instead of reacting to headlines in isolation, you can see how events fit into broader
              patterns of conflict risk.
            </p>
            <p className="leading-relaxed">
              Understanding how analysts use indicators and models makes it easier to evaluate which sources offer
              rigorous analysis versus speculation. That clarity supports better-informed views on global conflicts and
              foreign policy.
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
              Get Weekly Geopolitical Forecast Insights
            </h2>
            <p className="mt-3 text-slate-400">
              Stay informed with forecasting analysis and risk indicators delivered to your inbox.
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
