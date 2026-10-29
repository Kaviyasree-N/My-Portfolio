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
  Github,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface LayoutContext {
  openResume: () => void;
}

export const HomePage: React.FC = () => {
  const { openResume } = useOutletContext<LayoutContext>();
  const [imageError, setImageError] = useState(false);
  const { profile, projects, skillCategories, experiences } = PORTFOLIO_DATA;

  // Selected featured projects for homepage teaser
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  // Top skill teasers
  const programmingSkills = skillCategories.find((c) => c.title === 'Programming Languages')?.skills || [];
  const webSkills = skillCategories.find((c) => c.title === 'Web Development')?.skills || [];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Introduction & CTAs */}
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

              {/* Actions: Primary CTA, Secondary CTA, Resume & Contact */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20 gap-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 rounded-lg transition-colors"
                >
                  <span>About Me</span>
                </Link>

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
                  <span>Get in Touch</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              {/* Quick Institutional Context */}
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

          {/* Factual Highlight Strip */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {profile.highlights.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="block text-sm font-semibold text-slate-200">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="py-16 border-t border-slate-800/60 bg-[#080c14]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-400 block mb-1">
                Selected Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors self-start sm:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="text-blue-400 font-medium">{project.category}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-300 border border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>Read Details</span>
                    <ArrowRight size={13} />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white"
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience Snapshot */}
      <section className="py-16 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Skills Snapshot */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-blue-400 block mb-0.5">
                    Skills
                  </span>
                  <h3 className="text-lg font-bold text-white">Technical Stack</h3>
                </div>
                <Link
                  to="/skills"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>Full Skillset</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <span className="text-xs font-semibold text-slate-200 block mb-1">
                    Programming Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {programmingSkills.map((s) => (
                      <span key={s.name} className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-900/40">
                        {s.name} ({s.level})
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <span className="text-xs font-semibold text-slate-200 block mb-1">
                    Web &amp; Interfaces
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {webSkills.map((s) => (
                      <span key={s.name} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Recent Experience Highlight */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-blue-400 block mb-0.5">
                    Experience
                  </span>
                  <h3 className="text-lg font-bold text-white">Recent Involvements</h3>
                </div>
                <Link
                  to="/experience"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>All Experiences</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              <div className="space-y-3 pt-2">
                {experiences.slice(0, 2).map((exp, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-slate-200">{exp.role}</span>
                      <span className="font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-slate-400 mb-1">{exp.organization}</p>
                    <p className="text-slate-300 line-clamp-1">{exp.bulletPoints[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
