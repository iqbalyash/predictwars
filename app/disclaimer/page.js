import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Disclaimer | PredictWars",
  description:
    "PredictWars disclaimer: informational and educational content only. No financial, investment, legal, or political advice.",
  openGraph: { title: "Disclaimer | PredictWars", type: "website" },
};

export default function DisclaimerPage() {
  return (
    <div className="pw-home min-h-screen">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <article className="space-y-8">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Disclaimer
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Last updated: March 2026
            </p>
          </header>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              The information provided on PredictWars.com is for informational and educational purposes only. The
              content published on this website focuses on geopolitical analysis, global conflict trends, and
              forecasting methods used by analysts and researchers.
            </p>
            <p>
              PredictWars does not provide financial, investment, legal, or political advice. Any analysis,
              forecasts, or probability estimates mentioned on this website are based on publicly available
              information and analytical interpretation.
            </p>
            <p>
              We do not guarantee the accuracy, completeness, or reliability of any information published on
              this website.
            </p>
            <p>
              PredictWars is not responsible for any decisions or actions taken by users based on the
              information available on this website.
            </p>
          </div>

          <p className="pt-4 text-sm text-slate-400">
            For questions about this disclaimer, please see our{" "}
            <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline">
              contact page
            </Link>
            .
          </p>
        </article>
      </main>
    </div>
  );
}
