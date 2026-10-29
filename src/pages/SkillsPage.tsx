/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Terminal,
  Globe,
  Server,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { skillCategories } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ElementType> = {
    'Programming Languages': Terminal,
    'Web Development': Globe,
    'Backend & Databases': Server,
    'Tools & Workflow': Wrench,
    'AI & Data Concepts': Sparkles,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Skills' }]} />

        {/* Page Header */}
        <div className="mb-10 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Technical Stack</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Technologies
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Programming languages, web technologies, databases, and development tools I work with.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 border border-slate-800 rounded-lg mb-8 max-w-fit">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat.title
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Terminal;
            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                      <Icon size={18} />
                    </div>
                    <h2 className="text-base font-bold text-white">
                      {category.title}
                    </h2>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/60 flex items-start justify-between gap-3"
                      >
                        <div>
                          <span className="text-sm font-semibold text-slate-200 block">
                            {skill.name}
                          </span>
                          {skill.note && (
                            <span className="block text-[11px] text-slate-400 mt-0.5">
                              {skill.note}
                            </span>
                          )}
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap shrink-0 mt-0.5 bg-slate-800 text-slate-300 border border-slate-700/60">
                          {skill.level}
                        </span>
                      </div>
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
