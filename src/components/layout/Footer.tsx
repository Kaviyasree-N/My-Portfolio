/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { profile, socialProfiles } = PORTFOLIO_DATA;

  const linkedinProfile = socialProfiles.find((p) => p.platform === 'LinkedIn');
  const githubProfile = socialProfiles.find((p) => p.platform === 'GitHub');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
          {/* Quick navigation links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-400" aria-label="Footer Navigation">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
            <Link to="/achievements" className="hover:text-white transition-colors">Achievements</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Connect &amp; Contact</Link>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom row: Socials & copyright */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-500">
          <p className="text-slate-400">
            &copy; {currentYear} {profile.fullName}. Designed with clean typography and accessible standards.
          </p>

          <div className="flex items-center gap-4">
            {githubProfile && (
              <a
                href={githubProfile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
            )}
            {linkedinProfile && (
              <a
                href={linkedinProfile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
