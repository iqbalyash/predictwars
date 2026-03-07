import Link from "next/link";
import TrendingConflictsSection from "@/components/TrendingConflictsSection";

export const dynamic = "force-static";

export const metadata = {
  title: "Trending Global Conflicts | PredictWars Conflict Risk Analysis",
  description:
    "Analysis of trending global conflicts: Israel–Iran, China–Taiwan, Russia–NATO, Pakistan–Afghanistan, Pakistan–India. Risk levels and forecasting indicators.",
  openGraph: {
    title: "Trending Global Conflicts | PredictWars",
    description:
      "Conflict risk analysis for Israel–Iran, China–Taiwan, Russia–NATO, Pakistan–Afghanistan, and Pakistan–India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trending Global Conflicts | PredictWars",
    description: "Analysis of trending global conflicts and conflict probability by region.",
  },
  alternates: { canonical: "https://www.predictwars.com/trending-conflicts" },
};

export default function TrendingConflictsPage() {
  return (
    <div className="pw-home min-h-screen">
      <section
        className="relative overflow-hidden border-b border-slate-700/50 px-4 py-16 sm:py-20 md:py-24"
        aria-labelledby="page-title"
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 id="page-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trending Global Conflicts
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Regions analysts are watching for conflict probability. Expand each card for detailed analysis and risk
            indicators.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore-conflict-predictions"
              className="pw-btn-glossy rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
            >
              Explore Conflict Predictions
            </Link>
            <Link
              href="/explore-global-risk-index#overview"
              className="pw-btn-glossy rounded-xl border border-slate-500 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              View Global Risk Index
            </Link>
          </div>
        </div>
      </section>

      <TrendingConflictsSection />
    </div>
  );
}
