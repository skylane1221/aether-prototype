import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { CafeExperience } from './CafeExperience';
import { cafeIndustry } from '../../../data/industries/cafe';
import { renderWithRouter } from '../../../test/test-utils';

describe('CafeExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<CafeExperience industry={cafeIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Specialty Cafes & Coffee Bars/i).length).toBeGreaterThan(
      0
    );
    expect(screen.getByText(cafeIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/How Aether Perfects Rush Velocity & Product Quality/i)
    ).toBeInTheDocument();

    // Challenges (6 Problems)
    expect(screen.getByText(/Core Challenges in High-Velocity Cafes/i)).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Cafe Friction Into Counter Velocity Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (8 Solutions)
    expect(screen.getByText(/8 Intelligent Solutions for Cafes/i)).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Request Custom Cafe Solution/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows switching scenarios in CafeDemandDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<CafeExperience industry={cafeIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(
      screen.getByText(/Step 1: Historical Beverage & Pastry Sales Baseline/i)
    ).toBeInTheDocument();

    // Switch to Weekend Brunch scenario
    const weekendBtn = screen.getByRole('button', { name: /Saturday Artisan Brunch/i });
    fireEvent.click(weekendBtn);

    expect(screen.getAllByText(/Saturday Artisan Brunch/i).length).toBeGreaterThan(0);
  });

  it('allows switching tabs in CafeBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<CafeExperience industry={cafeIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Customer Habits tab
    const cadenceTab = screen.getByRole('button', { name: /Customer Habits/i });
    fireEvent.click(cadenceTab);
    expect(screen.getAllByText(/Signature Habit:/i).length).toBeGreaterThan(0);

    // Bean Freshness Roster tab
    const beanTab = screen.getByRole('button', { name: /Bean Freshness Roster/i });
    fireEvent.click(beanTab);
    expect(screen.getByText(/Active Roastery Beans & Degassing Window/i)).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<CafeExperience industry={cafeIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Modular Cafe & Roastery Integrations/i)).toBeInTheDocument();
    expect(screen.getByText(/High-Velocity Queue Pacing/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Local Roaster & Dairy Supply Mesh/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/Automated roast date tracking/i)).toBeInTheDocument();
  });
});
