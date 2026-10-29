/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, Target, CheckCircle2, UserCheck } from 'lucide-react';
import { ProjectItem } from '../config/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b101c] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-400 font-medium mb-2">
          <span>{project.category}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">{project.contextTag}</span>
        </div>

        <h3 id="modal-project-title" className="text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <div className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 mb-6">
          Status: {project.status}
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              <Target size={15} className="text-blue-400" />
              Problem Statement
            </h4>
            <p className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-lg text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              <CheckCircle2 size={15} className="text-blue-400" />
              Solution &amp; Architecture
            </h4>
            <p className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-lg text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              <UserCheck size={15} className="text-blue-400" />
              My Contribution
            </h4>
            <p className="bg-slate-900/40 border border-slate-800/80 p-3.5 rounded-lg text-slate-300 leading-relaxed">
              {project.myContribution}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              <Layers size={15} className="text-blue-400" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Github size={15} />
                <span>View Repository</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
