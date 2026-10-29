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
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const ExperiencePage: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  const typeIcons: Record<string, React.ElementType> = {
    Internship: Briefcase,
    'Open Source': GitPullRequest,
    Community: Users,
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Experience' }]} />

        {/* Page Header */}
        <header className="mb-12 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Work &amp; Involvements</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience &amp; Community
          </h1>
          <p className="text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Collaborative internship product development, open-source software contributions, and student-driven technical community coordination.
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
                <div className="absolute -left-[17px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#080c14] border border-slate-700 text-blue-400 shadow-sm">
                  <Icon size={15} />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-200">
                  {/* Top Bar: Role, Org, Location, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400 font-medium mb-1.5">
                        <span className="px-2 py-0.5 rounded bg-blue-950/70 border border-blue-800/50 text-[11px] font-mono">
                          {exp.type}
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin size={12} className="text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h2>
                      <p className="text-sm sm:text-base font-semibold text-slate-200 mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700/60 self-start sm:self-auto shrink-0">
                      <Calendar size={13} className="text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary Description if available */}
                  {exp.description && (
                    <div className="mb-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </div>
                  )}

                  {/* Collaboration Context Notice */}
                  {exp.collaborationNotice && (
                    <div className="my-3 py-2 px-3.5 rounded-lg bg-blue-950/25 border border-blue-900/40 text-xs text-blue-300/90 leading-relaxed">
                      <strong className="text-blue-200">Context: </strong>
                      {exp.collaborationNotice}
                    </div>
                  )}

                  {/* Key Contributions & Learning */}
                  <div className="my-4">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2.5">
                      Key Contributions &amp; Learning:
                    </span>
                    <ul className="space-y-2">
                      {exp.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Domain & Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
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
