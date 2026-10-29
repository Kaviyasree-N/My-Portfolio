/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { ResumeModal } from '../ResumeModal';

export const AppLayout: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      <ScrollToTop />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
      <main className="flex-1">
        <Outlet context={{ openResume: () => setIsResumeOpen(true) }} />
      </main>

      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};
