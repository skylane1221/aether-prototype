import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_NAV_ITEMS } from '../../data/navigation';
import { Button } from '../ui/Button';
import { ChevronDown, Menu, X, ArrowRight, Layers } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface NavbarProps {
  onRequestSolution: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestSolution }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsIndustriesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-aether-bg/85 backdrop-blur-md border-b border-aether-border/80 py-3.5 shadow-sm'
          : 'bg-transparent border-b border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-950 border border-aether-border-bright flex items-center justify-center relative overflow-hidden group-hover:border-sky-500/50 transition-colors shadow-inner-bevel">
            <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Layers className="w-4 h-4 text-sky-400 relative z-10" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-text-primary">AETHER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsIndustriesDropdownOpen(true)}
                  onMouseLeave={() => setIsIndustriesDropdownOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5',
                      isActive
                        ? 'text-text-primary bg-slate-800/40 font-semibold'
                        : 'text-text-secondary hover:text-text-primary hover:bg-slate-800/30'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200 text-text-muted',
                        isIndustriesDropdownOpen && 'rotate-180 text-text-primary'
                      )}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {isIndustriesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] animate-fade-in">
                      <div className="bg-aether-card border border-aether-border rounded-xl p-3 shadow-card-hover card-gradient-surface">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-aether-border-subtle mb-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                            Demonstration Industries
                          </span>
                          <Link
                            to="/industries"
                            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                          >
                            <span>View All 10</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className="p-2.5 rounded-lg hover:bg-slate-800/60 transition-colors group flex flex-col"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-text-primary group-hover:text-sky-400 transition-colors">
                                  {subItem.label}
                                </span>
                              </div>
                              {subItem.description && (
                                <span className="text-xs text-text-muted line-clamp-1 mt-0.5">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-text-primary bg-slate-800/40 font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-slate-800/30'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={onRequestSolution}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Request Solution
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={onRequestSolution}
            className="text-xs px-2.5"
          >
            Request
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-slate-800/60 border border-aether-border"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-aether-border bg-aether-bg/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="py-2 border-y border-aether-border-subtle my-1">
                    <div className="flex items-center justify-between px-3 py-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        {item.label}
                      </span>
                      <Link to="/industries" className="text-xs text-sky-400 font-medium">
                        All 10
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="px-3 py-2 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-slate-800/60"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-text-primary bg-slate-800/60 font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-slate-800/30'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-aether-border">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={onRequestSolution}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request Solution
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
