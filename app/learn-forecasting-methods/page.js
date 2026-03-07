import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Learn Forecasting Methods | How Experts Predict Global Conflicts",
  description:
    "How analysts predict global conflicts and geopolitical events using forecasting models and indicators. PredictWars explains geopolitical forecasting methods and data-driven analysis.",
  openGraph: {
    title: "Learn Forecasting Methods | PredictWars",
    description:
      "Geopolitical forecasting: historical patterns, military monitoring, political analysis, and data-driven models explained.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Forecasting Methods | PredictWars",
    description:
      "How experts predict global conflicts using forecasting methods and geopolitical indicators.",
  },
  alternates: { canonical: "https://www.predictwars.com/learn-forecasting-methods" },
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
        stroke="#38bdf8"
        strokeWidth="1.2"
        fill="none"
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

const FORECASTING_METHODS = [
  {
    title: "Historical Pattern Analysis",
    description: "Experts study how past conflicts and crises unfolded to identify recurring triggers, timelines, and escalation patterns that may signal future risk.",
    icon: "📈",
    accent: "sky",
  },
  {
    title: "Military Activity Monitoring",
    description: "Troop movements, exercises, and equipment deployments are tracked to assess whether tensions are rising or stabilizing in key regions.",
    icon: "🛡️",
    accent: "red",
  },
  {
    title: "Political and Diplomatic Analysis",
    description: "Statements, negotiations, and diplomatic relations between states provide signals about the direction of geopolitical tensions.",
    icon: "⚖️",
    accent: "orange",
  },
  {
    title: "Economic and Sanctions Analysis",
    description: "Trade flows, sanctions, and financial pressure between countries often precede or accompany geopolitical escalation and are closely monitored.",
    icon: "📊",
    accent: "orange",
  },
  {
    title: "Open Source Intelligence",
    description: "Publicly available data—news, satellite imagery, shipping data, and social media—is combined to build a picture of global developments.",
    icon: "🔍",
    accent: "sky",
  },
  {
    title: "Data-Driven Forecasting Models",
    description: "Structured models combine multiple indicators to estimate conflict probability and help analysts compare scenarios across regions.",
    icon: "📐",
    accent: "sky",
  },
];

const RELATED_CARDS = [
  { title: "Explore Conflict Predictions", href: "/explore-conflict-predictions", description: "How analysts predict global conflicts." },
  { title: "Global Risk Index", href: "/explore-global-risk-index", description: "Geopolitical risk levels by region." },
  { title: "Early Warning Signs of War", href: "/early-warning-signals", description: "Patterns that often precede escalation." },
  { title: "War Probability Analysis", href: "/updates", description: "Structured approaches to conflict risk." },
];

export default function LearnForecastingMethodsPage() {
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
            Learn Forecasting Methods
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            How Experts Predict Global Conflicts and Geopolitical Events
          </p>
          <p className="mt-4 text-lg text-slate-400">
            Geopolitical forecasting uses structured methods and indicators to estimate the probability of conflict and
            major international events. This page explains how analysts combine data and expertise to understand global
            risks.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
              View Global Risk Index
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main content */}
      <section
        id="main-content"
        className="border-b border-slate-700/50 px-4 py-12 sm:py-16"
        aria-labelledby="main-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="main-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Learn Forecasting Methods: How Experts Predict Global Conflicts and Geopolitical Events
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Predicting global conflicts and geopolitical events requires more than speculation. Analysts, researchers,
              and intelligence experts use structured forecasting methods to study political developments, military
              movements, economic signals, and historical patterns.
            </p>
            <p className="leading-relaxed">
              These forecasting methods help experts estimate the probability of geopolitical conflicts, identify early
              warning signs of war, and analyze how international tensions may evolve.
            </p>
            <p className="leading-relaxed">
              At PredictWars, the goal is to help readers understand the frameworks analysts use to forecast global
              events.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Is Geopolitical Forecasting */}
      <section
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-12 sm:py-16"
        aria-labelledby="what-is-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="what-is-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            What Is Geopolitical Forecasting?
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Geopolitical forecasting is the practice of using structured methods to estimate the likelihood of
              international events, including conflicts, crises, and major policy shifts. Analysts combine political,
              economic, and military indicators to build a picture of where tensions are rising and where stability may
              hold.
            </p>
            <p className="leading-relaxed">
              No single indicator is enough. Experts cross-reference diplomatic developments, military posture, economic
              pressure, and historical patterns to form a view of conflict probability. This multi-factor approach helps
              distinguish short-term noise from signals that may point to escalation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Forecasting Methods */}
      <section
        className="border-b border-slate-700/50 px-4 py-14 sm:py-18"
        aria-labelledby="methods-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="methods-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Forecasting Methods
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FORECASTING_METHODS.map((item) => (
              <div
                key={item.title}
                className="pw-card-hover pw-glass rounded-2xl border border-slate-600/50 p-6 shadow-xl"
              >
                <span className="text-3xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                <div
                  className={`mt-4 h-1 w-12 rounded-full ${
                    item.accent === "sky" ? "bg-sky-500" : item.accent === "red" ? "bg-red-500" : "bg-orange-500"
                  }`}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Collective Intelligence */}
      <section
        className="border-b border-slate-700/50 bg-[#0f2744]/40 px-4 py-12 sm:py-16"
        aria-labelledby="collective-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="collective-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Collective Intelligence and Prediction
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Prediction markets and collective forecasting allow many participants to contribute estimates of
              geopolitical outcomes. When aggregated, these views often reflect a combined assessment of probability that
              can complement expert analysis.
            </p>
            <p className="leading-relaxed">
              Such platforms do not replace traditional intelligence or academic research. They offer an additional
              signal—how informed crowds and traders are pricing risk—which analysts can use alongside political,
              military, and economic indicators to refine their view of global conflict probability.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Why Forecasting Methods Matter */}
      <section
        className="border-b border-slate-700/50 px-4 py-12 sm:py-16"
        aria-labelledby="why-matters-title"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="why-matters-title" className="mb-8 text-3xl font-bold text-white sm:text-4xl">
            Why Forecasting Methods Matter
          </h2>
          <div className="space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Learning how geopolitical forecasting works helps readers interpret news and analysis with more context.
              Instead of reacting to single events in isolation, you can see how indicators fit into broader frameworks
              for assessing conflict risk.
            </p>
            <p className="leading-relaxed">
              Understanding these methods also makes it easier to evaluate which sources and analysts are using
              structured reasoning versus speculation. That clarity supports better-informed views on global conflicts
              and international stability.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Related Resources */}
      <section
        className="border-b border-slate-700/50 px-4 py-14 sm:py-18"
        aria-labelledby="related-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="related-title" className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Related Resources
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
