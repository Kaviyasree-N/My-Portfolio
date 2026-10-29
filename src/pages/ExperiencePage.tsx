/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Briefcase,
  GitPullRequest,
  Users,
  Calendar,
  CheckCircle,
  MapPin,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const ExperiencePage: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  const typeIcons: Record<string, React.ElementType> = {
    Internship: Briefcase,
    Community: Users,
    'Open Source': GitPullRequest,
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Experience' }]} />

        {/* Page Header */}
        <header className="mb-10 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Work &amp; Involvements</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Community
          </h1>
          <p className="text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Product development internships, student-led technical community initiatives, and open-source contributions.
          </p>
        </header>

        {/* Timeline List */}
        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type] || Briefcase;
            return (
              <div
                key={index}
                className="relative pl-6 sm:pl-8 border-l border-slate-800 hover:border-blue-500/50 transition-colors"
              >
                {/* Timeline node */}
                <div className="absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#080c14] border border-slate-700 text-blue-400">
                  <Icon size={15} />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-blue-400 font-medium mb-1">
                        <span>{exp.type}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white">
                        {exp.role}
                      </h2>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700/60 self-start sm:self-auto">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Collaboration Context Callout */}
                  {exp.collaborationNotice && (
                    <div className="my-3 py-2.5 px-3.5 rounded-lg bg-blue-950/30 border border-blue-900/40 text-xs text-blue-300/90 leading-relaxed">
                      <strong>Context:</strong> {exp.collaborationNotice}
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 my-4">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle size={15} className="text-blue-400/80 shrink-0 mt-1" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Domain Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-800/50 text-slate-300 border border-slate-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
