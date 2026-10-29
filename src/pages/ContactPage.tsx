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
  MessageSquare,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../config/portfolioData';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const { profile, codingProfiles } = PORTFOLIO_DATA;

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

    // Build real mailto link
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

  const linkedinProfile = codingProfiles.find((p) => p.platform === 'LinkedIn');
  const githubProfile = codingProfiles.find((p) => p.platform === 'GitHub');

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        {/* Page Header */}
        <header className="mb-12 pb-8 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">
            <span>Direct Outreach</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Have a project or opportunity in mind?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I&apos;m open to internship opportunities, collaborative projects, hackathons, and conversations about technology.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
              <div>
                <h2 className="text-base font-bold text-white mb-2">
                  Contact Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I typically respond to internship inquiries, hackathon invites, and technical correspondence within 24 to 48 hours.
                </p>
              </div>

              {/* Primary Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <span className="block text-[11px] text-slate-400">Direct Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors truncate block"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5 text-slate-400">
                  <MapPin size={15} className="text-blue-400 shrink-0" />
                  <span>{profile.location} (IST / UTC +5:30)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Clock size={15} className="text-blue-400 shrink-0" />
                  <span>Undergraduate Student Availability: Part-time / Summer 2026 Internships</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-5 border-t border-slate-800/80 flex flex-col gap-3">
                {linkedinProfile && (
                  <a
                    href={linkedinProfile.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-950/40 border border-slate-800/80 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin size={16} className="text-blue-400" />
                      <span>Connect on LinkedIn</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">@{linkedinProfile.username}</span>
                  </a>
                )}

                {githubProfile && (
                  <a
                    href={githubProfile.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-950/40 border border-slate-800/80 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github size={16} className="text-slate-400" />
                      <span>View GitHub Profile</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">@{githubProfile.username}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Genuine Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4"
            >
              <h2 className="text-base font-bold text-white mb-1">
                Send a Direct Message
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                Fill in the details below to dispatch a message directly to my inbox via your preferred mail client.
              </p>

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
                  placeholder="e.g. Internship Opportunity / Technical Collaboration"
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
                  placeholder="Write your inquiry or project details here..."
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

              {/* Honest Submission Status Feedback */}
              {submissionFeedback.status !== 'idle' && (
                <div className="mt-4 p-3.5 rounded-lg bg-blue-950/40 border border-blue-900/60 text-xs text-blue-200">
                  <p className="leading-relaxed">{submissionFeedback.text}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
