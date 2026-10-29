/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Award,
  Trophy,
  GraduationCap,
  Calendar,
  Building2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const AchievementsPage: React.FC = () => {
  const { certifications, competitions } = PORTFOLIO_DATA;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Achievements & Certifications' }]} />

        {/* Page Header */}
        <header className="mb-12 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Credentials &amp; Honors</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Achievements &amp; Certifications
          </h1>
          <p className="text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Professional certifications, academic course diplomas, technical competition prizes, and academic honors.
          </p>
        </header>

        {/* =========================================================================
            SECTION 1: CERTIFICATIONS
            ========================================================================= */}
        <section className="mb-16" aria-labelledby="section-certifications">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
              <Award size={20} />
            </div>
            <div>
              <h2
                id="section-certifications"
                className="text-2xl font-bold text-white tracking-tight"
              >
                Certifications
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <span className="text-xs text-blue-400 block font-medium">
                        {item.issuer}
                      </span>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    {item.badgeText && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 shrink-0">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-400 font-mono text-[11px]">
                    Status: {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: COMPETITIONS & RECOGNITION
            ========================================================================= */}
        <section aria-labelledby="section-competitions">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
              <Trophy size={20} />
            </div>
            <div>
              <h2
                id="section-competitions"
                className="text-2xl font-bold text-white tracking-tight"
              >
                Competitions &amp; Recognition
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {competitions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-medium mb-2">
                    <span>{item.eventOrContext}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {item.institution && (
                    <p className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                      <Building2 size={13} className="text-slate-500 shrink-0" />
                      <span>{item.institution}</span>
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {item.recognition}
                  </p>
                </div>

                {item.award && (
                  <div className="pt-3 mt-2 border-t border-slate-800/60 text-xs">
                    <span className="text-slate-400 font-medium">Award: </span>
                    <span className="text-slate-200 font-semibold">{item.award}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
