import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { SalonExperience } from './SalonExperience';
import { salonIndustry } from '../../../data/industries/salon';
import { renderWithRouter } from '../../../test/test-utils';

describe('SalonExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<SalonExperience industry={salonIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Salons & Beauty Businesses/i).length).toBeGreaterThan(0);
    expect(screen.getByText(salonIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/How Aether Automates Salon Rebooking & Eliminates No-Shows/i)
    ).toBeInTheDocument();

    // Challenges (6 Problems)
    expect(screen.getByText(/6 Core Challenges in Salon & Spa Operations/i)).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Salon Friction Into Chair Yield Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (9 Solutions)
    expect(screen.getByText(/9 Intelligent Solutions for Salons & Spas/i)).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Schedule Custom Salon Walkthrough/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows interacting with SalonRebookingDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<SalonExperience industry={salonIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Predictive Rebooking & Client Dossier Engine/i)).toBeInTheDocument();

    // Select second customer Ananya Mehta
    const ananyaBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Ananya Mehta'))!;
    expect(ananyaBtn).toBeInTheDocument();
    fireEvent.click(ananyaBtn);

    expect(screen.getByText(/Organic Root Touch-Up & Express Blowout/i)).toBeInTheDocument();
  });

  it('allows switching tabs in SalonBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<SalonExperience industry={salonIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // No-Show Interception tab
    const noShowTab = screen.getByRole('button', { name: /No-Show Interception & Safeguards/i });
    fireEvent.click(noShowTab);
    expect(screen.getByText(/No-Show Prediction & Cancellation Interception/i)).toBeInTheDocument();

    // Stylist Productivity tab
    const stylistTab = screen.getByRole('button', {
      name: /Stylist Productivity & Retention Yield/i,
    });
    fireEvent.click(stylistTab);
    expect(screen.getAllByText(/Elena \(Master Colorist\)/i).length).toBeGreaterThan(0);
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<SalonExperience industry={salonIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Complete Salon Intelligence Capability Grid/i)).toBeInTheDocument();
    expect(screen.getByText(/Treatment Cycle Intelligence/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Retail Product Recommendation Mesh/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/Post-color product guides/i)).toBeInTheDocument();
  });
});
