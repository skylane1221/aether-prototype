import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SolutionRequestDrawer } from '../common/SolutionRequestDrawer';

export const Layout: React.FC = () => {
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-aether-bg text-text-primary flex flex-col relative selection:bg-sky-500/20 selection:text-white">
      {/* Background Technical Grid */}
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none opacity-60 z-0" />

      {/* Subtle Top Ambient Spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-sky-500/[0.04] via-indigo-500/[0.02] to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Skip to Content Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Global Navigation */}
      <Navbar onRequestSolution={() => setIsSolutionModalOpen(true)} />

      {/* Main Page Route Content */}
      <main id="main-content" className="flex-1 relative z-10 pt-20">
        <Outlet context={{ openSolutionModal: () => setIsSolutionModalOpen(true) }} />
      </main>

      {/* Global Enterprise Footer */}
      <Footer />

      {/* Global Solution Request Modal */}
      <SolutionRequestDrawer
        isOpen={isSolutionModalOpen}
        onClose={() => setIsSolutionModalOpen(false)}
      />
    </div>
  );
};
