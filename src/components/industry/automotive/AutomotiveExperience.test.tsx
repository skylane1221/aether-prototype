import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { AutomotiveExperience } from './AutomotiveExperience';
import { automotiveIndustry } from '../../../data/industries/automotive';
import { renderWithRouter } from '../../../test/test-utils';

describe('AutomotiveExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<AutomotiveExperience industry={automotiveIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Automotive & Car Service/i).length).toBeGreaterThan(0);
    expect(screen.getByText(automotiveIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/Predict maintenance needs and parts requirements/i)
    ).toBeInTheDocument();

    // Challenges (6 Problems)
    expect(
      screen.getByText(/Core Challenges in Automotive Service Operations/i)
    ).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Garage Drag Into Service Velocity Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (9 Solutions)
    expect(
      screen.getByText(/9 Intelligent Solutions for Auto Service & Dealerships/i)
    ).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Schedule Custom Dealership Demo/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows selecting vehicles in AutomotiveServiceDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<AutomotiveExperience industry={automotiveIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(
      screen.getByText(/Vehicle Service Prediction & Workshop Bay Allocation/i)
    ).toBeInTheDocument();

    // Select second vehicle
    const vehicleBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Honda City'))!;
    expect(vehicleBtn).toBeInTheDocument();
    fireEvent.click(vehicleBtn);

    expect(screen.getByText(/MAKGM6687NZ103982/i)).toBeInTheDocument();
  });

  it('allows switching tabs in AutomotiveBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<AutomotiveExperience industry={automotiveIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Master Technician Flag Efficiency tab
    const techTab = screen.getByRole('button', { name: /Master Technician Flag Efficiency/i });
    fireEvent.click(techTab);
    expect(screen.getByText(/Dan R\. \(BMW Master Tech\)/i)).toBeInTheDocument();

    // Parts Pre-Staging tab
    const partsTab = screen.getByRole('button', { name: /Parts Pre-Staging & Inventory Sync/i });
    fireEvent.click(partsTab);
    expect(screen.getByText(/Parts Pre-Staging & Inventory Synchronization/i)).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<AutomotiveExperience industry={automotiveIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Complete Auto Dealership Capability Grid/i)).toBeInTheDocument();
    expect(screen.getByText(/Dealer Management System \(DMS\) Connectors/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Digital Multi-Point Video Inspection/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/Mobile video upload/i)).toBeInTheDocument();
  });
});
