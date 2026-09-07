import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { DemosPage } from './DemosPage';
import { renderWithRouter } from '../test/test-utils';

describe('DemosPage (Interactive Sandbox Hub)', () => {
  it('renders hero title, badges, and all 10 industry selection buttons', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<DemosPage />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Simulate Aether Across/i)).toBeInTheDocument();
    expect(screen.getByText(/All 10 Enterprise Verticals/i)).toBeInTheDocument();

    const industries = [
      'Real Estate',
      'Restaurants',
      'Gyms',
      'Salons',
      'Cafes',
      'Retail',
      'Hotels',
      'Healthcare',
      'Automotive',
      'Education',
    ];

    industries.forEach((name) => {
      expect(screen.getByRole('button', { name: new RegExp(name, 'i') })).toBeInTheDocument();
    });
  });

  it('switches industry scenarios and resets execution state on selection', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<DemosPage />, {
      contextValue: { openSolutionModal },
    });

    // Default is Real Estate
    expect(screen.getByText(/Instant Inbound Buyer Qualification/i)).toBeInTheDocument();

    // Switch to Healthcare
    const healthcareBtn = screen.getByRole('button', { name: /healthcare/i });
    fireEvent.click(healthcareBtn);

    // Verify Healthcare scenario loads
    expect(
      screen.getByText(/Specialist Cancellation Gap Recovery & Pre-Visit Intake/i)
    ).toBeInTheDocument();

    // Switch to Automotive
    const automotiveBtn = screen.getByRole('button', { name: /automotive/i });
    fireEvent.click(automotiveBtn);

    // Verify Automotive scenario loads
    expect(
      screen.getByText(/Brake Wear Telematics Alert, Bay Scheduling & Parts Staging/i)
    ).toBeInTheDocument();
  });

  it('runs live AI simulation through analyzing to executed state and allows reset', async () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<DemosPage />, {
      contextValue: { openSolutionModal },
    });

    // Step 2 Run Simulation button
    const runButton = screen.getByRole('button', { name: /Run Aether/i });
    expect(runButton).toBeInTheDocument();

    fireEvent.click(runButton);

    // Transition to analyzing state
    expect(screen.getAllByText(/Analyzing/i).length).toBeGreaterThan(0);

    // Wait for simulation execution to finish and Reset Demo button to appear
    const resetButton = await screen.findByRole(
      'button',
      { name: /Reset Demo/i },
      { timeout: 3000 }
    );
    expect(resetButton).toBeInTheDocument();

    // Verify 6-stage telemetry cards are rendered in executed state
    expect(screen.getByText(/1\. INPUT/i)).toBeInTheDocument();
    expect(screen.getByText(/2\. AETHER ANALYZES/i)).toBeInTheDocument();
    expect(screen.getByText(/3\. INSIGHT/i)).toBeInTheDocument();
    expect(screen.getByText(/4\. RECOMMENDATION/i)).toBeInTheDocument();
    expect(screen.getByText(/5\. ACTION/i)).toBeInTheDocument();
    expect(screen.getByText(/6\. RESULT/i)).toBeInTheDocument();

    fireEvent.click(resetButton);

    // Should return to idle state with Run Aether button
    expect(screen.getByRole('button', { name: /Run Aether/i })).toBeInTheDocument();
  });

  it('triggers custom sandbox request drawer when primary CTA is clicked', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<DemosPage />, {
      contextValue: { openSolutionModal },
    });

    const ctaButton = screen.getByRole('button', { name: /Request Custom Sandbox/i });
    fireEvent.click(ctaButton);

    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });
});
