/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  Code,
  Terminal,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const { profile, socialProfiles, codingPractice } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    status: 'idle' | 'opened_client' | 'copied_draft';
    text: string;
  }>({ status: 'idle', text: '' });

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a message with at least 10 characters.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    // Launch default email client
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Kaviya,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    const mailtoUrl = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;

    setSubmissionFeedback({
      status: 'opened_client',
      text: `Your mail client was launched to send this directly to ${profile.email}. You can also copy the draft below.`,
    });
  };

  const handleCopyDraft = () => {
    const draft = `To: ${profile.email}\nSubject: [Portfolio Inquiry] ${formData.subject}\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(draft);
    setSubmissionFeedback({
      status: 'copied_draft',
      text: 'Message draft copied to clipboard! You can paste it into Gmail, Outlook, or any webmail.',
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Connect & Contact' }]} />

        {/* Page Header */}
        <header className="mb-12 pb-6 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Connect &amp; Contact
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I am open to internship opportunities, collaborative projects, hackathons, and conversations about software engineering.
          </p>
        </header>

        {/* =========================================================================
            SECTION 1: CONNECT WITH ME
            ========================================================================= */}
        <section className="mb-16" aria-labelledby="section-connect">
          <h2 id="section-connect" className="text-xl font-bold text-white mb-2">
            Connect with Me
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Find me on professional networks, explore my code repositories, or send an email.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kaviya-sree-n-a6293b380/"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Linkedin size={20} />
                </div>
                <ExternalLink size={15} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Professional Network</span>
                <span className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  LinkedIn
                </span>
                <span className="text-xs font-mono text-slate-400 block mt-1 truncate">
                  @kaviya-sree-n-a6293b380
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Kaviyasree-N"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Github size={20} />
                </div>
                <ExternalLink size={15} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Code Repositories</span>
                <span className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  GitHub
                </span>
                <span className="text-xs font-mono text-slate-400 block mt-1 truncate">
                  @Kaviyasree-N
                </span>
              </div>
            </a>

            {/* Direct Email */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400">
                  <Mail size={20} />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Direct Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-base font-bold text-white hover:text-blue-300 transition-colors block truncate"
                >
                  Email
                </a>
                <span className="text-xs font-mono text-slate-400 block mt-1 truncate">
                  {profile.email}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: CODING PROFILES & PRACTICE
            ========================================================================= */}
        <section className="mb-16" aria-labelledby="section-coding">
          <h2 id="section-coding" className="text-xl font-bold text-white mb-2">
            Coding Profiles &amp; Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Ongoing competitive programming practice and algorithmic problem solving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {codingPractice.map((cp) => (
              <a
                key={cp.platform}
                href={cp.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {cp.platform === 'LeetCode' ? <Code size={20} /> : <Terminal size={20} />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                          {cp.platform}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          @{cp.username}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60">
                        {cp.metricValue}
                      </span>
                      <ExternalLink size={15} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {cp.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-blue-400 font-medium">
                  <span>View {cp.platform} Profile</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SEND A MESSAGE
            ========================================================================= */}
        <section aria-labelledby="section-message">
          <h2 id="section-message" className="text-xl font-bold text-white mb-2">
            Send a Message
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Fill in the details below to dispatch a message directly to my email address.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4 max-w-3xl"
          >
            {/* Name & Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Name <span className="text-blue-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  aria-invalid={!!formErrors.name}
                />
                {formErrors.name && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Email <span className="text-blue-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  aria-invalid={!!formErrors.email}
                />
                {formErrors.email && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {formErrors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                Subject <span className="text-blue-400">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Internship Opportunity / Technical Project"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                aria-invalid={!!formErrors.subject}
              />
              {formErrors.subject && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {formErrors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                Message <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your note or project description here..."
                className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-y"
                aria-invalid={!!formErrors.message}
              />
              {formErrors.message && (
                <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {formErrors.message}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors gap-2 cursor-pointer shadow-sm shadow-blue-500/20"
              >
                <Send size={14} />
                <span>Send via Email Client</span>
              </button>

              {formData.message.trim().length > 0 && (
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors gap-2 cursor-pointer"
                >
                  <Copy size={14} />
                  <span>Copy Full Draft</span>
                </button>
              )}
            </div>

            {/* Honest Feedback Note */}
            {submissionFeedback.status !== 'idle' ? (
              <div className="mt-4 p-3.5 rounded-lg bg-blue-950/40 border border-blue-900/60 text-xs text-blue-200">
                <p className="leading-relaxed">{submissionFeedback.text}</p>
              </div>
            ) : (
              <p className="text-[11px] text-slate-500 pt-1">
                Note: This form opens your default email client with a pre-filled message draft to guarantee direct, reliable message delivery without third-party email routing.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};
