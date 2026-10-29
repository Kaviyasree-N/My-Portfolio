/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Terminal,
  Globe,
  Server,
  Wrench,
  Sparkles,
  Code2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const SkillsPage: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ElementType> = {
    'Programming Languages': Terminal,
    'Web Development': Globe,
    'Backend & Databases': Server,
    'Tools & Workflow': Wrench,
    'AI & Data Concepts': Sparkles,
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Skills' }]} />

        {/* Page Header */}
        <div className="mb-12 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            An honest overview of my technical skills across programming languages, web development, backend systems, developer tools, and machine learning fundamentals.
          </p>
        </div>

        {/* Vertically Stacked Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <section
                key={category.title}
                className="pt-2 first:pt-0"
                aria-labelledby={`skill-cat-${idx}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h2
                      id={`skill-cat-${idx}`}
                      className="text-xl font-bold text-white tracking-tight"
                    >
                      {category.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-3xl leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Grid for this Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {category.skills.map((skill) => {
                    const isFoundational = skill.level === 'Foundational';
                    return (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 transition-colors flex flex-col justify-between gap-3"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-100">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap shrink-0 ${
                              isFoundational
                                ? 'bg-blue-950/80 text-blue-300 border border-blue-800/60'
                                : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {skill.note && (
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Subtle divider between sections */}
                {idx < skillCategories.length - 1 && (
                  <div className="mt-12 border-b border-slate-800/60" aria-hidden="true" />
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
