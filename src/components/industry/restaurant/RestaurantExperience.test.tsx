import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { RestaurantExperience } from './RestaurantExperience';
import { restaurantIndustry } from '../../../data/industries/restaurant';
import { renderWithRouter } from '../../../test/test-utils';

describe('RestaurantExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RestaurantExperience industry={restaurantIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Restaurants & Food Businesses/i).length).toBeGreaterThan(
      0
    );
    expect(screen.getByText(restaurantIndustry.heroHeadline)).toBeInTheDocument();
    expect(screen.getAllByText(/Food Waste Reduction/i).length).toBeGreaterThan(0);

    // Operational Paradigm
    expect(
      screen.getByText(/How Aether Eliminates Food Waste & Kitchen Bottlenecks/i)
    ).toBeInTheDocument();

    // Challenges (8 Problems)
    expect(screen.getByText(/8 Core Challenges in Restaurant Operations/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Demand Uncertainty/i).length).toBeGreaterThan(0);

    // Opportunities
    expect(
      screen.getByText(/Transforming Kitchen Drag Into Margin Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (10 Solutions)
    expect(screen.getByText(/10 Intelligent Solutions for Restaurants/i)).toBeInTheDocument();

    // Impact
    expect(
      screen.getByText(/Qualitative & Quantitative Impact in Restaurants/i)
    ).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Request Custom Restaurant Architecture/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows switching scenarios in RestaurantForecastDemo within Experience', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RestaurantExperience industry={restaurantIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Step 1: Historical Sales Baseline/i)).toBeInTheDocument();

    // Click Weekend Scenario
    const weekendBtn = screen.getByRole('button', { name: /Weekend Rush/i });
    fireEvent.click(weekendBtn);

    expect(screen.getByText(/\+85% Surge/i)).toBeInTheDocument();
  });

  it('allows switching tabs in RestaurantBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RestaurantExperience industry={restaurantIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Kitchen Ticket Velocity tab
    const kitchenTab = screen.getByRole('button', { name: /Kitchen Ticket Velocity/i });
    fireEvent.click(kitchenTab);
    expect(screen.getByText(/Average Ticket Time/i)).toBeInTheDocument();

    // Menu Profitability Matrix tab
    const menuTab = screen.getByRole('button', { name: /Menu Profitability Matrix/i });
    fireEvent.click(menuTab);
    expect(screen.getByText(/Menu Profitability Matrix/i)).toBeInTheDocument();

    // Multi-Outlet Sync tab
    const outletTab = screen.getByRole('button', { name: /Multi-Outlet Sync/i });
    fireEvent.click(outletTab);
    expect(screen.getByText(/Powai High Street \(Flagship\)/i)).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RestaurantExperience industry={restaurantIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(
      screen.getByText(/Additional Capabilities for Food & Beverage Operations/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Kitchen Display System \(KDS\) Pacing/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Supplier & Vendor EDI Automation/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/Dynamic par level adjustments/i)).toBeInTheDocument();
  });
});
