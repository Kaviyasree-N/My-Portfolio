/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../config/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Connect & Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 Zones */}
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Zone 1: Brand Wordmark / Monogram */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            aria-label="Kaviya Sree N Portfolio Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
              KS
            </span>
            <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">
              {PORTFOLIO_DATA.profile.fullName}
            </span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isRoot = link.path === '/';
              const isActive = isRoot
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 text-sm ${
                    isActive
                      ? 'text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Resume & Connect) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/70 hover:bg-slate-700 hover:text-white border border-slate-700/60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText size={13} className="text-slate-400" />
              <span>Resume</span>
            </button>
            <Link
              to="/contact"
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                location.pathname === '/contact'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'text-white bg-blue-600 hover:bg-blue-500 shadow-sm shadow-blue-500/20'
              }`}
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0b101c]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isRoot = link.path === '/';
              const isActive = isRoot
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <FileText size={15} className="text-slate-400" />
                <span>View &amp; Download Resume</span>
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
