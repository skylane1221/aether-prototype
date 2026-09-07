import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { RetailExperience } from './RetailExperience';
import { retailIndustry } from '../../../data/industries/retail';
import { renderWithRouter } from '../../../test/test-utils';

describe('RetailExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RetailExperience industry={retailIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Retail Businesses/i).length).toBeGreaterThan(0);
    expect(screen.getByText(retailIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/Prevent inventory problems before they affect sales/i)
    ).toBeInTheDocument();

    // Challenges (8 Problems)
    expect(
      screen.getByText(/8 Core Challenges in Retail & Omnichannel Commerce/i)
    ).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Retail Friction Into Growth Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (11 Solutions)
    expect(screen.getByText(/11 Intelligent Solutions for Retail Operations/i)).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Request Custom Retail Architecture/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows switching products in RetailInventoryDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RetailExperience industry={retailIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(
      screen.getByText(/Simulate Product Inventory & Reorder Intelligence/i)
    ).toBeInTheDocument();

    // Select second product
    const hoodieBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Organic Cotton Hoodie'))!;
    expect(hoodieBtn).toBeInTheDocument();
    fireEvent.click(hoodieBtn);

    expect(screen.getAllByText(/AP-HD-L-BLK/i).length).toBeGreaterThan(0);
  });

  it('allows switching tabs in RetailBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RetailExperience industry={retailIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // At-Risk Products tab
    const riskTab = screen.getByRole('button', { name: /At-Risk Products/i });
    fireEvent.click(riskTab);
    expect(screen.getByText(/Critical Stockout & Overstock Vulnerabilities/i)).toBeInTheDocument();

    // Recommended Actions tab
    const actionsTab = screen.getByRole('button', { name: /Recommended Actions/i });
    fireEvent.click(actionsTab);
    expect(
      screen.getByText(/Prioritized Cognitive Prescriptions & 1-Click Execution/i)
    ).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RetailExperience industry={retailIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Additional Capabilities for Retail Enterprises/i)).toBeInTheDocument();
    expect(screen.getByText(/Omnichannel ERP & POS Connectors/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', {
      name: /Autonomous Supplier EDI & Reorder Mesh/i,
    });
    fireEvent.click(item1Btn);
    expect(
      screen.getByText(
        /Direct electronic data interchange \(EDI\) with manufacturer and distributor portals/i
      )
    ).toBeInTheDocument();
  });
});
