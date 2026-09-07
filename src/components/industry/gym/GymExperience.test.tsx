import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { GymExperience } from './GymExperience';
import { gymIndustry } from '../../../data/industries/gym';
import { renderWithRouter } from '../../../test/test-utils';

describe('GymExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<GymExperience industry={gymIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Gyms & Fitness Centers/i).length).toBeGreaterThan(0);
    expect(screen.getByText(gymIndustry.heroHeadline)).toBeInTheDocument();
    expect(screen.getAllByText(/Member Retention/i).length).toBeGreaterThan(0);

    // Operational Paradigm
    expect(
      screen.getByText(/How Aether Eliminates Member Drop-Off & Maximizes LTV/i)
    ).toBeInTheDocument();

    // Challenges (7 Problems)
    expect(screen.getByText(/7 Core Challenges in Fitness Operations/i)).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Gym Friction Into Membership Velocity Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (9 Solutions)
    expect(screen.getByText(/9 Intelligent Solutions for Gyms & Studios/i)).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Request Custom Gym Solution/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows interacting with GymMemberRetentionDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<GymExperience industry={gymIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(
      screen.getByText(/Member Retention & Inactivity Interception Engine/i)
    ).toBeInTheDocument();

    // Select second member Marcus Vance
    const marcusBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Marcus Vance'))!;
    expect(marcusBtn).toBeInTheDocument();
    fireEvent.click(marcusBtn);

    expect(screen.getByText(/Free Weights & Strength Zone/i)).toBeInTheDocument();
  });

  it('allows switching tabs in GymBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<GymExperience industry={gymIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Churn Archetypes tab
    const churnTab = screen.getByRole('button', { name: /Churn Archetypes/i });
    fireEvent.click(churnTab);
    expect(screen.getByText(/Critical Inactivity/i)).toBeInTheDocument();

    // Class Capacity Yield tab
    const classTab = screen.getByRole('button', { name: /Class Capacity Yield/i });
    fireEvent.click(classTab);
    expect(
      screen.getByText(/Studio Class Utilization & Dynamic Standby Fills/i)
    ).toBeInTheDocument();

    // Trainer Monetization tab
    const trainerTab = screen.getByRole('button', { name: /Trainer Monetization/i });
    fireEvent.click(trainerTab);
    expect(screen.getByText(/Coach Vikram \(Strength\)/i)).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<GymExperience industry={gymIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Modular Fitness Integrations/i)).toBeInTheDocument();
    expect(screen.getByText(/Turnstile & Mobile App Telemetry/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Trainer Commission & Billing Mesh/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/Split-rate commission rules/i)).toBeInTheDocument();
  });
});
