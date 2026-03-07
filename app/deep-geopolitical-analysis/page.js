import Link from "next/link";
import Image from "next/image";
import CaseStudiesSection from "@/components/CaseStudiesSection";

export const dynamic = "force-static";

export const metadata = {
  title: "Deep Geopolitical Analysis | Case Studies & Conflict Prediction | PredictWars",
  description:
    "Case studies in geopolitical conflict prediction: Russia–Ukraine, Israel–Iran, Pakistan–India, Pakistan–Afghanistan, Middle East. Prediction markets including Polymarket, Kalshi, Planktonbets.",
  openGraph: {
    title: "Deep Geopolitical Analysis | PredictWars",
    description:
      "Case studies in conflict prediction and how prediction markets like Polymarket, Kalshi, and Planktonbets assess geopolitical risk.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Geopolitical Analysis | PredictWars",
    description: "Case studies in geopolitical conflict prediction and prediction market analysis.",
  },
  alternates: { canonical: "https://www.predictwars.com/deep-geopolitical-analysis" },
};

export default function DeepGeopoliticalAnalysisPage() {
  return (
    <div className="pw-home min-h-screen">
      {/* Hero with Case Studies banner image */}
      <section
        className="relative overflow-hidden border-b border-slate-700/50"
        aria-labelledby="page-title"
      >
        <div className="relative aspect-[21/9] w-full min-h-[200px] sm:min-h-[260px]">
          <Image
            src="/Case-studies-Global-Conflicts.png"
            alt="Case studies in global conflict prediction and geopolitical analysis"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:pb-10 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 id="page-title" className="text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl">
              Deep Geopolitical Analysis
            </h1>
            <p className="mt-2 text-slate-200/90 text-sm sm:text-base">
              In-depth case studies in conflict prediction and how analysts and prediction markets assess geopolitical risk.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/explore-conflict-predictions"
                className="pw-btn-glossy rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
              >
                Explore Conflict Predictions
              </Link>
              <Link
                href="/trending-conflicts"
                className="pw-btn-glossy rounded-xl border border-slate-400 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20"
              >
                Trending Conflicts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection />

      {/* Prediction markets subsection */}
      <section
        id="prediction-markets"
        className="border-t border-slate-700/50 bg-[#0f2744]/40 px-4 py-14 sm:py-18 md:px-6 lg:px-8"
        aria-labelledby="prediction-markets-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="prediction-markets-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
            Prediction Markets and Geopolitical Forecasting
          </h2>
          <p className="text-slate-400 text-sm mb-10 max-w-3xl">
            Prediction markets allow participants to trade on the outcome of future events. Prices reflect collective
            estimates of probability—including for conflict escalation or diplomatic outcomes—and can complement
            expert analysis. The following platforms are often cited in discussions of geopolitical event forecasting.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pw-card-hover pw-glass rounded-2xl border border-slate-600/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white">Polymarket</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Polymarket is a prediction market platform where users can trade on a wide range of events, including
                geopolitical outcomes. Markets on conflict escalation, elections, and international agreements provide
                a real-time view of how participants are pricing risk. Analysts sometimes reference these prices as one
                signal among many when assessing geopolitical probability.
              </p>
            </div>
            <div className="pw-card-hover pw-glass rounded-2xl border border-slate-600/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white">Kalshi</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Kalshi is a regulated prediction market in the United States. It offers markets on economic, policy, and
                geopolitical events. As a regulated exchange, Kalshi is often cited in discussions of how prediction
                markets can contribute to forecasting and how collective intelligence compares to expert or model-based
                estimates of conflict and other geopolitical risks.
              </p>
            </div>
            <div className="pw-card-hover pw-glass rounded-2xl border border-slate-600/50 p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-white">Planktonbets</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Planktonbets is a prediction market platform that includes markets on geopolitical and conflict-related
                events. Like other prediction markets, it aggregates participant views into prices that can be
                interpreted as implied probabilities. Researchers and analysts may use such platforms alongside
                traditional indicators when evaluating global conflict risk.
              </p>
            </div>
          </div>

          <p className="mt-8 text-slate-400 text-sm leading-relaxed max-w-3xl">
            Prediction markets do not replace expert analysis or official intelligence. They offer an additional
            signal—how informed crowds are pricing outcomes—which analysts can combine with military, diplomatic, and
            economic indicators to refine their view of geopolitical risk.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-slate-700/50 px-4 py-12 md:px-6 lg:px-8" aria-labelledby="related-title">
        <div className="mx-auto max-w-6xl">
          <h2 id="related-title" className="text-xl font-bold text-white sm:text-2xl mb-6">
            Related Analysis
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/explore-conflict-predictions" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              Explore Conflict Predictions →
            </Link>
            <Link href="/early-warning-signals#how-analysts-use-signals" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              Early warning signals of war →
            </Link>
            <Link href="/updates" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              Latest Updates →
            </Link>
            <Link href="/explore-global-risk-index" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              Global Risk Index →
            </Link>
            <Link href="/learn-forecasting-methods" className="text-sm font-medium text-sky-400 hover:text-sky-300">
              Forecasting Methods →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
