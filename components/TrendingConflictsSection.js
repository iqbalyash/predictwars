"use client";

import { useState } from "react";
import Image from "next/image";

const CONFLICTS = [
  {
    id: "israel-iran",
    title: "Israel – Iran",
    image: "/Israel-Iran.jpeg",
    riskLevel: "high",
    riskLabel: "High risk",
    riskPercent: 72,
    content: (
      <>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Regional Rivalry and Proxy Dynamics</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Tensions between Israel and Iran are shaped by decades of regional rivalry, nuclear concerns, and proxy
          conflicts across the Middle East. Analysts monitor military postures, missile capabilities, and diplomatic
          statements to assess the risk of direct confrontation or escalation through third parties.
        </p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Military and Diplomatic Indicators</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Key indicators include strikes and counterstrikes, naval activity in regional waters, and the state of
          nuclear negotiations. Diplomatic breakdowns or a major security incident could increase the probability of
          broader regional conflict. PredictWars tracks these developments to help readers understand how analysts
          estimate escalation risk.
        </p>
      </>
    ),
  },
  {
    id: "china-taiwan",
    title: "China – Taiwan",
    image: "/China-Taiwan.jpeg",
    riskLevel: "rising",
    riskLabel: "Rising tension",
    riskPercent: 58,
    content: (
      <>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Cross-Strait Military and Political Dynamics</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          The relationship between China and Taiwan remains one of the most watched geopolitical flashpoints. Military
          exercises, air incursions, and political rhetoric are closely monitored as indicators of whether tensions are
          stabilizing or rising. Analysts assess the probability of conflict using data on military posture, economic
          interdependence, and international alignment.
        </p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">What Analysts Monitor</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Naval and air activity near the median line, leadership statements on sovereignty, and third-party security
          commitments (including arms sales and alliance statements) are among the signals used to estimate conflict
          risk. PredictWars explains how these indicators inform geopolitical forecasting in the region.
        </p>
      </>
    ),
  },
  {
    id: "russia-nato",
    title: "Russia – NATO",
    image: "/Russia-Ukrain.jpeg",
    riskLevel: "high",
    riskLabel: "High risk",
    riskPercent: 65,
    content: (
      <>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Eastern European Security and Alliance Posture</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Relations between Russia and NATO are defined by the war in Ukraine, alliance enlargement, and military
          deployments along the eastern flank. Analysts track troop levels, exercises, defense spending, and
          diplomatic dialogue to gauge the risk of further escalation or miscalculation.
        </p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Key Risk Factors</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Developments in Ukraine, NATO reinforcement in the Baltics and Poland, and Russian military posture are
          central to conflict probability assessments. Understanding these factors helps readers interpret how
          forecasting models and expert analysis estimate the stability of European security.
        </p>
      </>
    ),
  },
  {
    id: "pakistan-afghanistan",
    title: "Pakistan – Afghanistan",
    image: "/Pakistan-Afganistan.jpeg",
    riskLevel: "moderate",
    riskLabel: "Moderate risk",
    riskPercent: 48,
    content: (
      <>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Border Security and Regional Instability</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          The Pakistan–Afghanistan border remains a focus for analysts due to militant activity, refugee flows, and
          relations with the Taliban-led government in Kabul. Cross-border incidents, diplomatic engagement, and
          counterterrorism operations are monitored as indicators of regional stability and conflict risk.
        </p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Indicators Analysts Watch</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Border clashes, militant group positioning, and the state of bilateral dialogue help experts estimate the
          probability of escalation. PredictWars summarizes how these factors are used in geopolitical risk
          assessment for South Asia.
        </p>
      </>
    ),
  },
  {
    id: "pakistan-india",
    title: "Pakistan – India",
    image: "/Pakistan-India.jpeg",
    riskLevel: "moderate",
    riskLabel: "Moderate risk",
    riskPercent: 52,
    content: (
      <>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Kashmir and Historical Tensions</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Pakistan and India have a long history of territorial and political friction, with the Kashmir region and the
          Line of Control at the center of tensions. Analysts track ceasefire violations, military deployments, and
          diplomatic engagement to assess the risk of escalation between the two nuclear-armed states.
        </p>
        <h3 className="text-lg font-semibold text-white mt-6 mb-2">Conflict Probability Indicators</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Cross-border incidents, political rhetoric, and third-party mediation efforts are among the signals used to
          estimate conflict probability. Understanding these indicators helps readers grasp how geopolitical
          forecasters evaluate stability in South Asia.
        </p>
      </>
    ),
  },
];

function RiskBadge({ level, label }) {
  const styles = {
    high: "bg-red-500/20 text-red-400 border-red-500/40",
    rising: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    moderate: "bg-amber-500/20 text-amber-400 border-amber-500/40",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles[level]}`}
    >
      {label}
    </span>
  );
}

function ConflictImage({ src, title }) {
  if (!src) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80"
        style={{ aspectRatio: "1200/630" }}
        aria-hidden
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-slate-500 text-lg font-medium">{title}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "1200/630" }}>
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
      />
    </div>
  );
}

export default function TrendingConflictsSection() {
  const [expandedId, setExpandedId] = useState(CONFLICTS[0].id);

  return (
    <section
      className="border-t border-slate-700/50 px-4 py-14 sm:py-18 md:px-6 lg:px-8"
      aria-labelledby="trending-conflicts-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="trending-conflicts-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-2">
          Trending Global Conflicts
        </h2>
        <p className="text-slate-400 text-sm mb-10">
          Regions analysts are watching for conflict probability. Expand each card for detailed analysis.
        </p>

        <div className="space-y-4">
          {CONFLICTS.map((conflict) => {
            const isExpanded = expandedId === conflict.id;
            return (
              <article
                key={conflict.id}
                id={conflict.id}
                className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] shadow-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : conflict.id)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex flex-wrap items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`${conflict.id}-content`}
                  id={`${conflict.id}-button`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{conflict.title}</h3>
                    <RiskBadge level={conflict.riskLevel} label={conflict.riskLabel} />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 text-sm font-medium">{conflict.riskPercent}% risk</span>
                    <span
                      className={`inline-block h-8 w-8 rounded-full border border-slate-500 flex items-center justify-center text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </button>

                <div
                  id={`${conflict.id}-content`}
                  role="region"
                  aria-labelledby={`${conflict.id}-button`}
                  className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pw-glass border-t border-slate-600/50 px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                      <div className="max-w-4xl">
                        <ConflictImage src={conflict.image} title={conflict.title} />
                        <div className="mt-6">{conflict.content}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
