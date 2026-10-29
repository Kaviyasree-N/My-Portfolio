/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ProjectModal } from '../components/ProjectModal';

export const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { projects } = PORTFOLIO_DATA;

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'health', label: 'Healthcare & IoT' },
    { id: 'ai-logistics', label: 'AI & Logistics' },
    { id: 'campus-erp', label: 'Campus ERP' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'featured') return p.featured;
    if (activeCategory === 'health') return p.id.includes('reflow');
    if (activeCategory === 'ai-logistics') return p.id.includes('haulai');
    if (activeCategory === 'campus-erp') return p.id.includes('citevent');
    return true;
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Projects' }]} />

        {/* Page Header */}
        <div className="mb-10 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Software applications, prototypes, and concepts built through coursework, internships, and hackathons.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/60 border border-slate-800 rounded-lg mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:shadow-xl hover:shadow-black/30"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-3 text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-blue-400 font-medium">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="truncate">{project.contextTag}</span>
                  </div>
                  <span className="text-[11px] font-mono shrink-0 text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  <Link to={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h2>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Problem & Contribution */}
                <div className="space-y-2 mb-5 p-3.5 rounded-lg bg-slate-950/40 border border-slate-800/60 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Problem: </span>
                    <span className="text-slate-300">{project.problemStatement}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Contribution: </span>
                    <span className="text-slate-300">{project.myContribution}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-300 border border-slate-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Full Details</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    Quick Preview
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white transition-colors"
                      title="Open Live Demo"
                      aria-label={`Open Live Demo for ${project.title}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Quick Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
