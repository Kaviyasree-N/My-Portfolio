/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-4">
        <span className="text-4xl font-mono font-bold text-blue-500">404</span>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has moved. Please return to the homepage or use the navigation above.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/20"
          >
            <Home size={14} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
