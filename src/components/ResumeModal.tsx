/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, MapPin, Building2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, skillCategories, experiences, projects, achievements } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const resumeText = `
${profile.fullName}
${profile.role}
${profile.institution} | Graduation Year: ${profile.graduationYear}
Email: ${profile.email} | Location: ${profile.location}

PROFESSIONAL SUMMARY
${profile.introduction}

EDUCATION
Bachelor of Engineering - Computer Science and Engineering
${profile.institution} (2025 - 2029)

TECHNICAL SKILLS
- Programming: C++, Python
- Web: HTML5, CSS3, JavaScript, React (introductory)
- Backend & DB: Django, PostgreSQL, Node.js
- Tools: Git, GitHub, VS Code, Figma, Jira

KEY EXPERIENCE
1. Product Development Intern - CITBIF Internship Program (2026)
2. Core Team Member - GSX Chennai Chapter (2025 - Present)
3. Open Source Contributor - GirlScript Summer of Code 2026 (2 Merged PRs)

FEATURED PROJECTS
- ReFlow Access (Data-Driven Menstrual Health Systems)
- HaulAI (AI-Powered Freight Coordination - Hackathon)
- CITEVENT ERP (Event and Workflow Management)
- Applied Machine Learning & Predictive Modeling

CERTIFICATIONS
- Oracle AI Foundations Associate
- NPTEL Internet of Things (Elite + Silver)
- Python Essentials 1 & 2 (Python Institute)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0a0f1d] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-blue-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Print Resume"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Copy Summary"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="printable-resume" className="space-y-6 text-sm">
          {/* Header */}
          <div className="text-center sm:text-left pb-4 border-b border-slate-800/80">
            <h2 id="resume-title" className="text-2xl font-bold text-white tracking-tight">
              {profile.fullName}
            </h2>
            <p className="text-blue-400 font-medium text-xs sm:text-sm mt-0.5">
              {profile.role}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-3 text-xs text-slate-400 mt-2">
              <span className="flex items-center gap-1">
                <Building2 size={13} />
                {profile.institution}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Mail size={13} />
                {profile.email}
              </span>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Professional Profile
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-3 rounded-lg border border-slate-800/60">
              {profile.introduction}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Education
            </h3>
            <div className="bg-slate-900/30 p-3.5 rounded-lg border border-slate-800/60">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Bachelor of Engineering in Computer Science and Engineering
                  </h4>
                  <p className="text-xs text-slate-300">
                    {profile.institution} · Chennai, Tamil Nadu
                  </p>
                </div>
                <span className="text-xs font-mono text-blue-400">2025 – 2029</span>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded bg-slate-900/30 border border-slate-800/60">
                <strong className="text-slate-200 block mb-1">Programming:</strong>
                <span className="text-slate-400">C++ (Data Structures, Problem Solving), Python (Scripting, Foundations)</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/30 border border-slate-800/60">
                <strong className="text-slate-200 block mb-1">Web Development:</strong>
                <span className="text-slate-400">HTML5, CSS3, JavaScript, React (introductory exposure)</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/30 border border-slate-800/60">
                <strong className="text-slate-200 block mb-1">Backend &amp; Databases:</strong>
                <span className="text-slate-400">Django (introductory), PostgreSQL (relational schemas), Node.js (project-based)</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/30 border border-slate-800/60">
                <strong className="text-slate-200 block mb-1">Tools &amp; Concepts:</strong>
                <span className="text-slate-400">Git, GitHub, VS Code, Figma, Jira, Machine Learning fundamentals</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Experience &amp; Community
            </h3>
            <div className="space-y-2.5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/60 text-xs">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-white">{exp.role} — {exp.organization}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-1.5">{exp.bulletPoints[0]}</p>
                  <p className="text-slate-400 leading-relaxed">{exp.bulletPoints[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Projects
            </h3>
            <div className="space-y-2 text-xs">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-2.5 rounded bg-slate-900/30 border border-slate-800/60">
                  <span className="font-semibold text-slate-200">{proj.title}</span>
                  <span className="text-slate-400"> ({proj.category}): </span>
                  <span className="text-slate-300">{proj.shortDescription}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Certifications &amp; Milestones
            </h3>
            <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside">
              <li>Oracle AI Foundations Associate Certification</li>
              <li>NPTEL Internet of Things (Elite + Silver)</li>
              <li>Python Essentials 1 &amp; 2 (Python Institute &amp; Cisco)</li>
              <li>GirlScript Summer of Code 2026: 2 Merged Pull Requests</li>
            </ul>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Configurable in <code>src/config/portfolioData.ts</code></span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
