/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
    <footer className="border-t border-slate-800/80 bg-[#060910] text-slate-400 text-xs py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-slate-400">
            &copy; {currentYear} {profile.fullName}. Computer Science Engineering Student, Chennai Institute of Technology.
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            {githubProfile && (
              <a
                href={githubProfile.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
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
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>

            <span className="w-px h-3.5 bg-slate-800" aria-hidden="true" />

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
