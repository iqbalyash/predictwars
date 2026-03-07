import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Early Warning Signals | How Analysts Predict Conflicts | PredictWars",
  description:
    "How analysts use early warning signals to predict conflicts. Military activity, diplomatic developments, economic pressure, and strategic alliances explained.",
  openGraph: {
    title: "Early Warning Signals | PredictWars",
    description:
      "Early warning signals of conflict: military, diplomatic, economic, and alliance indicators analysts monitor.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Early Warning Signals | PredictWars",
    description: "How analysts use signals to predict geopolitical conflicts. Military, diplomatic, economic, alliance indicators.",
  },
  alternates: { canonical: "https://www.predictwars.com/early-warning-signals" },
};

function HeroBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M120 80 L320 60 L400 140 L320 220 L120 200 Z" stroke="#38bdf8" strokeWidth="1" fill="none" />
      <path d="M450 60 L680 50 L760 130 L680 210 L450 200 Z" stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.8" />
      <path d="M720 70 L920 60 L1000 150 L920 230 L720 220 Z" stroke="#f97316" strokeWidth="1" fill="none" opacity="0.8" />
      <path d="M80 260 L280 240 L360 320 L280 400 L80 380 Z" stroke="#eab308" strokeWidth="1" fill="none" opacity="0.8" />
      <path d="M400 280 L600 260 L700 340 L620 400 L400 380 Z" stroke="#38bdf8" strokeWidth="1" fill="none" />
    </svg>
  );
}

const SIGNAL_CARDS = [
  {
    title: "Military Activity",
    description: "Troop deployments, exercises, naval activity, and defense programs are among the strongest indicators analysts use to assess conflict probability.",
    icon: "🛡️",
    accent: "red",
  },
  {
    title: "Diplomatic Developments",
    description: "Negotiations, treaties, and political communication between states provide insight into whether tensions are escalating or stabilizing.",
    icon: "⚖️",
    accent: "orange",
  },
  {
    title: "Economic Pressure",
    description: "Sanctions, trade restrictions, and financial measures between countries often accompany or precede geopolitical escalation.",
    icon: "📊",
    accent: "amber",
  },
  {
    title: "Strategic Alliances",
    description: "Defense pacts and alliance shifts can alter the regional balance of power and influence the likelihood of conflict.",
    icon: "🔗",
    accent: "orange",
  },
];

export default function EarlyWarningSignalsPage() {
  return (
    <div className="pw-home min-h-screen">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-700/50 px-4 py-16 sm:py-20 md:py-24"
        aria-labelledby="page-title"
      >
        <HeroBackground />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 id="page-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Early Warning Signals
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            How analysts identify patterns and signals that may indicate rising geopolitical conflict risk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore-conflict-predictions"
              className="pw-btn-glossy rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Explore Conflict Predictions
            </Link>
            <Link
              href="/learn-forecasting-methods"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Learn Forecasting Methods
            </Link>
            <Link
              href="/trending-conflicts"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Trending Conflicts
            </Link>
          </div>
        </div>
      </section>

      {/* Section: How Analysts Use These Signals */}
      <section
        id="how-analysts-use-signals"
        className="border-b border-slate-700/50 px-4 py-12 sm:py-16 md:px-6 lg:px-8"
        aria-labelledby="section-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="section-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-10">
            How Analysts Use These Signals
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                How Analysts Use These Signals to Predict Conflicts
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Geopolitical conflicts rarely occur without warning. In many cases, early signals appear months or
                  even years before tensions escalate into military confrontation. Analysts, researchers, and
                  geopolitical experts study these signals carefully to understand how international tensions are
                  developing. Organizations such as the{" "}
                  <a
                    href="https://www.crisisgroup.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    International Crisis Group
                  </a>{" "}
                  and the{" "}
                  <a
                    href="https://www.un.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    United Nations
                  </a>{" "}
                  publish regular reports on conflict risk and early warning that complement our analysis.
                </p>
                <p>
                  By monitoring patterns in political developments, military activity, economic policies, and
                  diplomatic relations, analysts attempt to estimate the probability of geopolitical conflicts.
                </p>
                <p>
                  These early warning signals help experts identify regions where geopolitical tensions may increase
                  and where future conflicts may become more likely.
                </p>
              </div>
            </div>

            <div className="pw-glass rounded-2xl border border-slate-600/50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Identifying Patterns Before Conflicts Occur
              </h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  One of the most important techniques used by geopolitical analysts is pattern recognition.
                  Historical conflicts often follow recognizable patterns that appear before escalation occurs.
                </p>
                <p>
                  Researchers study past geopolitical crises to understand which indicators were present before
                  tensions increased.
                </p>
              </div>
            </div>

            {/* Icon cards: four signals */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SIGNAL_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="pw-card-hover pw-glass rounded-2xl border border-slate-600/50 p-6 shadow-xl"
                >
                  <span className="text-3xl" aria-hidden>
                    {card.icon}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.description}</p>
                  <div
                    className={`mt-4 h-1 w-12 rounded-full ${
                      card.accent === "red" ? "bg-red-500" : card.accent === "orange" ? "bg-orange-500" : "bg-amber-500"
                    }`}
                    aria-hidden
                  />
                </div>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-white">Monitoring Military Activity</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Military developments are one of the strongest indicators used in geopolitical forecasting. Analysts
                  monitor troop deployments, military exercises, naval activity, and defense modernization programs.
                </p>
              </div>
              <div className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-white">Evaluating Diplomatic Developments</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Diplomatic relations provide insight into international stability. Analysts examine negotiations,
                  treaties, and political communication between countries.
                </p>
              </div>
              <div className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-white">Analyzing Economic Pressure</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Economic developments such as sanctions, trade restrictions, and financial pressure can escalate
                  geopolitical tensions.
                </p>
              </div>
              <div className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] p-6 shadow-xl">
                <h3 className="text-lg font-semibold text-white">Understanding Strategic Alliances</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  Alliances and defense agreements between countries can shift geopolitical balance and influence
                  global stability.
                </p>
              </div>
            </div>

            <div className="pw-glass rounded-2xl border border-slate-600/50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Combining Multiple Signals</h3>
              <p className="text-slate-300 leading-relaxed">
                Analysts combine military, political, economic, and diplomatic indicators to estimate geopolitical
                risks and identify early warning signs of conflict.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-slate-700/50 px-4 py-12 md:px-6 lg:px-8" aria-labelledby="related-title">
        <div className="mx-auto max-w-6xl">
          <h2 id="related-title" className="text-xl font-bold text-white sm:text-2xl mb-6">
            Related Analysis
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/explore-conflict-predictions"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Explore conflict predictions →
            </Link>
            <Link
              href="/learn-forecasting-methods"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Geopolitical forecasting methods →
            </Link>
            <Link
              href="/explore-global-risk-index"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Global conflict risk index →
            </Link>
            <Link
              href="/explore-geopolitical-forecasting"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Geopolitical forecasting →
            </Link>
            <Link href="/trending-conflicts" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              Trending Conflicts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
