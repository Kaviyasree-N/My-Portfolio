/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  CheckCircle2,
  UserCheck,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-3">Project Not Found</h1>
        <p className="text-sm text-slate-400 mb-6">
          The requested project could not be found.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Projects', href: '/projects' },
            { label: project.title },
          ]}
        />

        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400 font-medium mb-3">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{project.contextTag}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Status: {project.status}
            </span>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-md border border-slate-700 transition-colors"
              >
                <Github size={13} />
                <span>Source Repository</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-md transition-colors"
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Overview
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed bg-slate-900/30 p-5 rounded-xl border border-slate-800/80">
            {project.shortDescription}
          </p>
        </section>

        {/* Detailed Sections */}
        <div className="space-y-8 mb-12">
          {/* Problem Statement */}
          <section className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <Target size={16} className="text-blue-400" />
              <span>Problem Statement</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          {/* Solution & Architecture */}
          <section className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <CheckCircle2 size={16} className="text-blue-400" />
              <span>Solution &amp; Approach</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </section>

          {/* Direct Role & Contribution */}
          <section className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <UserCheck size={16} className="text-blue-400" />
              <span>My Contribution</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.myContribution}
            </p>
          </section>

          {/* Technologies */}
          <section className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <Layers size={16} className="text-blue-400" />
              <span>Technologies &amp; Tools</span>
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors border border-slate-700/60"
          >
            <ArrowLeft size={14} />
            <span>All Projects</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors shadow-sm shadow-blue-500/20"
          >
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
