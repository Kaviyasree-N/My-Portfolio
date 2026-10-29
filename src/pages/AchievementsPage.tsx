/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Award,
  ExternalLink,
  Code,
  Terminal,
  Github,
  Linkedin,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const AchievementsPage: React.FC = () => {
  const { achievements, codingProfiles } = PORTFOLIO_DATA;

  const platformIcons: Record<string, React.ElementType> = {
    GitHub: Github,
    LeetCode: Code,
    CodeChef: Terminal,
    LinkedIn: Linkedin,
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Achievements & Certifications' }]} />

        {/* Page Header */}
        <header className="mb-10 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Certifications &amp; Practice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Achievements &amp; Certifications
          </h1>
          <p className="text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Course certifications, technical foundation credentials, and active competitive programming profiles.
          </p>
        </header>

        {/* Section 1: Certifications */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="text-blue-400" size={20} />
              <span>Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                        <Award size={18} />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">
                          {item.issuer}
                        </span>
                        <h3 className="text-base font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {item.badgeText && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800/60 shrink-0">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-slate-400 font-mono text-[11px]">
                    {item.period}
                  </span>

                  {item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      <span>Certificate Link</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500">Certificate on file</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Coding & Professional Profiles */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="text-blue-400" size={20} />
              <span>Coding Practice &amp; Developer Profiles</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Active repositories, competitive algorithmic practice, and professional networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {codingProfiles.map((item) => {
              const Icon = platformIcons[item.platform] || Terminal;
              return (
                <a
                  key={item.platform}
                  href={item.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 group-hover:bg-blue-600/20 text-slate-300 group-hover:text-blue-400 border border-slate-700/60 transition-colors">
                        <Icon size={20} />
                      </div>
                      <ExternalLink
                        size={15}
                        className="text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.platform}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 block mt-0.5">
                      @{item.username}
                    </span>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60">
                    <span className="text-[11px] text-slate-400 block">
                      {item.metricLabel}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 block mt-0.5">
                      {item.metricValue}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
