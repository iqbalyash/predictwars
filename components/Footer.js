import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-[#0a1628] py-8 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <a href="/" className="relative block h-6 w-24 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]">
            <Image
              src="/Predict-wars-Logo.png"
              alt="PredictWars"
              fill
              className="object-contain object-left"
              sizes="96px"
            />
          </a>
          <p>© PredictWars.com</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/explore-conflict-predictions" className="hover:text-white transition-colors">
            Explore Conflict Predictions
          </a>
          <a href="/explore-global-risk-index" className="hover:text-white transition-colors">
            Global Risk Index
          </a>
          <a href="/explore-geopolitical-forecasting" className="hover:text-white transition-colors">
            Geopolitical Forecasting
          </a>
          <a href="/deep-geopolitical-analysis" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="/updates" className="hover:text-white transition-colors">
            Latest Updates
          </a>
          <a href="/learn-forecasting-methods" className="hover:text-white transition-colors">
            Forecasting Methods
          </a>
          <a href="/early-warning-signals" className="hover:text-white transition-colors">
            Early Warning
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="/disclaimer" className="hover:text-white transition-colors">
            Disclaimer
          </a>
          <a href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

