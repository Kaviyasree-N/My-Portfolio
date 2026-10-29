/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  BookOpen,
  Code2,
  Users,
  Cpu,
  CheckCircle2,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const AboutPage: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: BookOpen,
      title: 'Strong Foundations First',
      text: 'Prioritizing solid data structures, algorithm problem-solving in C++, and clean programming principles over superficial trends.',
    },
    {
      icon: Code2,
      title: 'Hands-on Project Building',
      text: 'Consolidating theoretical learning by architecting and developing real prototypes, from health access tools to logistics systems.',
    },
    {
      icon: Users,
      title: 'Community & Peer Collaboration',
      text: 'Actively participating in the GSX Chennai student chapter, collaborative internships, and open-source contributions.',
    },
    {
      icon: Cpu,
      title: 'Broad Technical Curiosity',
      text: 'Exploring backend services, relational schema design in PostgreSQL, and practical machine learning fundamentals.',
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Me' }]} />

        {/* Page Header */}
        <header className="mb-10 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Background</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            About Me
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            My academic journey, development interests, and approach to building practical technology solutions.
          </p>
        </header>

        {/* Direct Authentic Narrative */}
        <div className="space-y-6 text-slate-300 leading-relaxed text-base mb-12">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-200 text-lg font-medium leading-relaxed">
            &ldquo;{profile.introduction}&rdquo;
          </div>

          <div className="space-y-4 text-slate-300">
            <p>
              I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at{' '}
              <strong className="text-white font-semibold">{profile.institution}</strong> in Chennai. My journey into technology started with a simple motivation: understanding how things work beneath the surface and turning structured problem-solving into dependable software.
            </p>
            <p>
              I spend my time strengthening core fundamentals through coding practice, exploring data structures in C++, learning web protocols and REST patterns, and working with backend services in Python and Django.
            </p>
            <p>
              I value clear communication, honest collaboration, and disciplined version control. In internships and community teams, I make it a point to understand project requirements thoroughly, solicit feedback early, and document my work cleanly.
            </p>
          </div>
        </div>

        {/* Academic Details Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <GraduationCap className="text-blue-400" size={22} />
            <span>Academic Background</span>
          </h2>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                  Undergraduate Degree
                </span>
                <h3 className="text-lg font-bold text-white">
                  Bachelor of Engineering — Computer Science &amp; Engineering
                </h3>
                <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                  <Building2 size={15} className="text-slate-400" />
                  <span>Chennai Institute of Technology</span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                  <MapPin size={13} className="text-slate-400" />
                  <span>Affiliated with Anna University · Chennai, Tamil Nadu, India</span>
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700/60 self-start sm:self-auto">
                <Calendar size={13} />
                <span>Class of 2029</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-2">
              <strong className="text-slate-200 block">Core Coursework &amp; Academic Focus:</strong>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming (C++)',
                  'Database Management Systems (PostgreSQL)',
                  'Operating Systems Fundamentals',
                  'Computer Networks & Protocols',
                  'Internet of Things Architectures',
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 font-mono text-[11px]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Engineering Growth */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5">
            Approach to Engineering &amp; Learning
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <Icon size={20} className="text-blue-400 mb-3" />
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Learning Priorities List */}
        <section className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Key Focus Areas
          </h3>
          <ul className="space-y-3">
            {profile.aboutSummary.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
