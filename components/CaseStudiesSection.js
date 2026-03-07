"use client";

import { useState } from "react";
import Image from "next/image";

function CaseStudyImage({ title, src }) {
  if (!src) {
    return (
      <div
        className="w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80"
        style={{ aspectRatio: "1200/630" }}
        aria-hidden
      >
        <div className="flex h-full items-center justify-center">
          <span className="text-slate-500 font-medium">{title}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "1200/630" }}>
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 896px) 100vw, 896px"
      />
    </div>
  );
}

function RiskBadge({ level }) {
  const styles = {
    high: "bg-red-500/20 text-red-400 border-red-500/40",
    rising: "bg-orange-500/20 text-orange-400 border-orange-500/40",
    moderate: "bg-amber-500/20 text-amber-400 border-amber-500/40",
  };
  const label = { high: "High risk", rising: "Rising tension", moderate: "Moderate risk" }[level];
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles[level]}`}>
      {label}
    </span>
  );
}

const CASE_STUDIES = [
  {
    id: "russia-ukraine",
    title: "Russia–Ukraine conflict",
    image: "/Russia-Ukrain.jpeg",
    riskLevel: "high",
    content: (
      <>
        <p className="text-slate-400 text-sm leading-relaxed">
          The Russia–Ukraine conflict has been a major focus for geopolitical forecasters since the full-scale invasion
          of 2022. Analysts tracked military buildup, diplomatic rhetoric, and economic pressure in the months before
          escalation. Prediction markets and expert assessments shifted as tensions increased, illustrating how
          early warning signals can inform conflict probability estimates.
        </p>
        <h4 className="text-base font-semibold text-white mt-6 mb-2">What forecasters got right</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Many analysts identified elevated risk from troop concentrations, rhetoric, and breakdowns in dialogue. The
          case highlights the importance of combining military, diplomatic, and economic indicators when assessing
          geopolitical risk.
        </p>
      </>
    ),
  },
  {
    id: "israel-iran",
    title: "Israel–Iran tensions",
    image: "/Israel-Iran.jpeg",
    riskLevel: "high",
    content: (
      <>
        <p className="text-slate-400 text-sm leading-relaxed">
          Israel–Iran tensions represent a long-running case study in regional rivalry, proxy conflict, and nuclear
          concerns. Forecasters monitor missile activity, strikes and counterstrikes, naval posture, and the state of
          nuclear negotiations to estimate the probability of direct confrontation or broader regional escalation.
        </p>
        <h4 className="text-base font-semibold text-white mt-6 mb-2">Indicators analysts watch</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Diplomatic statements, military exercises, and third-party mediation efforts are among the signals used to
          assess whether tensions are stabilizing or rising. This case underscores how pattern recognition and
          multi-factor analysis support conflict prediction.
        </p>
      </>
    ),
  },
  {
    id: "pakistan-india",
    title: "Pakistan–India tensions",
    image: "/Pakistan-India.jpeg",
    riskLevel: "moderate",
    content: (
      <>
        <p className="text-slate-400 text-sm leading-relaxed">
          Pakistan–India relations are shaped by the Kashmir dispute, the Line of Control, and historical military
          confrontations. Geopolitical analysts track ceasefire violations, military deployments, and diplomatic
          engagement to estimate the risk of escalation between the two nuclear-armed states.
        </p>
        <h4 className="text-base font-semibold text-white mt-6 mb-2">Forecasting lessons</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          The case illustrates how recurring patterns—border incidents, rhetoric, and third-party diplomacy—inform
          conflict probability. Combining these signals helps analysts distinguish short-term spikes from structural
          shifts in risk.
        </p>
      </>
    ),
  },
  {
    id: "pakistan-afghanistan",
    title: "Pakistan–Afghanistan developments",
    image: "/Pakistan-Afganistan.jpeg",
    riskLevel: "moderate",
    content: (
      <>
        <p className="text-slate-400 text-sm leading-relaxed">
          Pakistan–Afghanistan relations have been a focus for conflict forecasters due to border security, militant
          activity, and the Taliban-led government in Kabul. Analysts monitor cross-border incidents, refugee flows,
          and bilateral dialogue to assess regional stability and conflict risk.
        </p>
        <h4 className="text-base font-semibold text-white mt-6 mb-2">Key signals</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Counterterrorism operations, militant group positioning, and diplomatic engagement provide indicators of
          whether tensions are escalating or stabilizing. The case highlights the role of non-state actors and
          border dynamics in geopolitical risk assessment.
        </p>
      </>
    ),
  },
  {
    id: "middle-east-uncertainty",
    title: "Middle East uncertainty",
    riskLevel: "rising",
    content: (
      <>
        <p className="text-slate-400 text-sm leading-relaxed">
          The Middle East remains one of the most complex regions for geopolitical forecasting. Regional rivalries,
          proxy conflicts, energy interests, and alliance shifts create a fluid landscape where analysts combine
          military, diplomatic, and economic indicators to estimate conflict probability across multiple flashpoints.
        </p>
        <h4 className="text-base font-semibold text-white mt-6 mb-2">Why it matters for forecasting</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          No single indicator suffices; forecasters rely on pattern recognition across several crises and ongoing
          tensions. This case study underscores the value of combining multiple signals and historical comparison
          when assessing geopolitical risk.
        </p>
      </>
    ),
  },
];

export default function CaseStudiesSection() {
  const [expandedId, setExpandedId] = useState(CASE_STUDIES[0].id);

  return (
    <section
      id="case-studies"
      className="border-t border-slate-700/50 px-4 py-14 sm:py-18 md:px-6 lg:px-8"
      aria-labelledby="case-studies-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="case-studies-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-2">
          Case Studies in Geopolitical Conflict Prediction
        </h2>
        <p className="text-slate-400 text-sm mb-10">
          How forecasters anticipated escalation and how analysts use these cases to refine conflict probability
          estimates.
        </p>

        <div className="space-y-4">
          {CASE_STUDIES.map((study) => {
            const isExpanded = expandedId === study.id;
            return (
              <article
                key={study.id}
                id={study.id}
                className="pw-card-hover rounded-2xl border border-slate-600/50 bg-[#132238] shadow-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : study.id)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex flex-wrap items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isExpanded}
                  aria-controls={`${study.id}-content`}
                  id={`${study.id}-button`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{study.title}</h3>
                    <RiskBadge level={study.riskLevel} />
                  </div>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-500 text-slate-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`${study.id}-content`}
                  role="region"
                  aria-labelledby={`${study.id}-button`}
                  className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pw-glass border-t border-slate-600/50 px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                      <div className="max-w-4xl">
                        <CaseStudyImage title={study.title} src={study.image} />
                        <div className="mt-6">{study.content}</div>
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
