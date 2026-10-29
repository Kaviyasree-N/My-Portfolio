/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Building2,
  GraduationCap,
  MapPin,
  Award,
  BookOpen,
  Code2,
  Users,
  Cpu,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface LayoutContext {
  openResume: () => void;
}

export const HomePage: React.FC = () => {
  const { openResume } = useOutletContext<LayoutContext>();
  const [imageError, setImageError] = useState(false);
  const { profile, education } = PORTFOLIO_DATA;

  const corePillars = [
    {
      icon: BookOpen,
      title: 'Strong Foundations First',
      text: 'Prioritizing solid data structures, algorithm problem-solving in C++ and Java, and clean programming principles over superficial trends.',
    },
    {
      icon: Code2,
      title: 'Hands-on Project Building',
      text: 'Consolidating theoretical learning by architecting and developing practical prototypes, from machine learning systems to event platforms.',
    },
    {
      icon: Users,
      title: 'Community & Peer Collaboration',
      text: 'Actively participating in technical student chapters, collaborative internship teams, and open-source contributions.',
    },
    {
      icon: Cpu,
      title: 'Broad Technical Curiosity',
      text: 'Exploring backend services, relational schema design in PostgreSQL, and practical machine learning fundamentals.',
    },
  ];

  const academicCoursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++, Java)',
    'Database Management Systems (PostgreSQL)',
    'Operating Systems Fundamentals',
    'Computer Networks & Protocols',
    'Internet of Things Architectures',
  ];

  return (
    <div className="relative">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Introduction & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Introduction Label */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500" aria-hidden="true" />
                <span>{profile.role}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl mb-5 text-balance">
                {profile.heroHeading}
              </h1>

              {/* Authentic Descriptive Introduction */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                {profile.introduction}
              </p>

              {/* Actions: Primary CTA, About Anchor, Resume & Contact */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20 gap-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#about-me"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 rounded-lg transition-colors cursor-pointer"
                >
                  <span>About Me</span>
                </a>

                <button
                  type="button"
                  onClick={openResume}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-transparent hover:border-slate-800 rounded-lg transition-colors gap-1.5 cursor-pointer"
                >
                  <FileText size={15} className="text-slate-400" />
                  <span>Resume</span>
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 py-2 px-1 hover:underline underline-offset-4 gap-1"
                >
                  <span>Connect with Me</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Institutional Context */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 size={14} className="text-slate-400" />
                  {profile.institution}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-slate-400" />
                  Class of {profile.graduationYear}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-slate-400" />
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Right Column: Visual Portrait Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                <div className="p-2 sm:p-2.5 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl shadow-black/40">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950">
                    {!imageError ? (
                      <img
                        src={profile.avatarImage}
                        alt={profile.avatarAlt}
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-2xl mb-3">
                          KS
                        </div>
                        <p className="text-sm font-semibold text-white">{profile.fullName}</p>
                        <p className="text-xs text-slate-400 mt-1">{profile.shortRole}</p>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>

                  <div className="pt-3 pb-1 px-2 flex items-center justify-between text-xs text-slate-400">
                    <div>
                      <span className="font-medium text-slate-200">{profile.fullName}</span>
                      <span className="block text-[11px] text-slate-400">{profile.institution}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-950/70 text-blue-300 border border-blue-800/50">
                      B.E. CSE &apos;29
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ABOUT ME SECTION
          ========================================================================= */}
      <section id="about-me" className="py-16 border-t border-slate-800/80 bg-[#080c14]/40 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
              <UserCheck size={14} />
              <span>Background &amp; Learning Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              About Me
            </h2>
          </div>

          <div className="space-y-4 text-base text-slate-300 leading-relaxed">
            <p>
              I am currently pursuing a Bachelor of Engineering in Computer Science and Engineering at{' '}
              <strong className="text-white font-semibold">{profile.institution}</strong> in Chennai. My journey into technology started with a simple motivation: understanding how things work beneath the surface and turning structured problem-solving into dependable software.
            </p>
            <p>
              I spend my time strengthening core fundamentals through deliberate coding practice, exploring data structures and algorithms in C++ and Java, learning web protocols and REST patterns, and building applications with modern frontend libraries and backend services.
            </p>
            <p>
              I value clear communication, honest collaboration, and disciplined version control. In internships and student technical communities, I make it a point to understand project requirements thoroughly, solicit feedback early, and document my work cleanly so teams can build on it seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. EDUCATION SECTION
          ========================================================================= */}
      <section id="education" className="py-16 border-t border-slate-800/80 bg-[#080c14]/70 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
              <GraduationCap size={15} />
              <span>Academic Qualifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Education
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Academic qualifications, coursework foundation, and school honors.
            </p>
          </div>

          <div className="space-y-6">
            {/* Chennai Institute of Technology Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
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

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700/60 self-start sm:self-auto shrink-0">
                  <span>Class of 2029 (2025 – 2029)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs text-slate-400 block font-medium">Academic Score:</span>
                <span className="text-sm font-semibold text-blue-300 font-mono">
                  CGPA: 8.60 / 10
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800/60 text-xs text-slate-300 space-y-2">
                <strong className="text-slate-200 block">Core Coursework &amp; Academic Focus:</strong>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {academicCoursework.map((course) => (
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

            {/* Chennai Girls Higher Secondary School Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                    Secondary &amp; Higher Secondary
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Chennai Girls Higher Secondary School
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <MapPin size={13} className="text-slate-400" />
                    <span>Chennai, Tamil Nadu</span>
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="text-xs text-slate-400 block font-medium">Performance / Aggregate:</span>
                <span className="text-sm font-semibold text-blue-300 font-mono">
                  Class XII: 94.8% · SSLC: 90.4%
                </span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-amber-200 text-xs">
                <Award size={15} className="text-amber-400 shrink-0" />
                <span className="font-medium">School Topper — Class XII, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ADDITIONAL ABOUT CONTENT: APPROACH & KEY FOCUS AREAS
          ========================================================================= */}
      <section className="py-16 border-t border-slate-800/80 bg-[#080c14]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Subsection: Approach to Engineering & Learning (4 Pillars) */}
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
                <Cpu size={14} />
                <span>Core Engineering Pillars</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Approach to Engineering &amp; Learning
              </h2>
            </div>

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
          </div>

          {/* Subsection: Key Focus Areas */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/30 border border-slate-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-400" />
              <span>Key Focus Areas &amp; Current Goals</span>
            </h3>
            <ul className="space-y-3">
              {profile.aboutSummary.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-blue-400 mt-0.5 shrink-0">·</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
