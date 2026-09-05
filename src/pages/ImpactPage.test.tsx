import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { ImpactPage } from './ImpactPage';
import { renderWithRouter } from '../test/test-utils';

describe('ImpactPage', () => {
  it('renders hero title and impact thesis section', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<ImpactPage />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Why Should a Business Care About/i)).toBeInTheDocument();
    expect(screen.getByText(/Aether\?/i)).toBeInTheDocument();

    // Verify pillar metrics & concepts
    expect(screen.getByText(/Where Aether Delivers Measurable Impact/i)).toBeInTheDocument();
  });

  it('renders benchmark comparisons and allows interactive ROI estimation', () => {
    renderWithRouter(<ImpactPage />);

    // Check scenario estimator presence
    expect(screen.getByText(/Estimate Potential Time & Value Recovered/i)).toBeInTheDocument();

    // Test industry select interaction in scenario estimator
    const automotiveBtn = screen.getByRole('button', { name: 'Automotive' });
    expect(automotiveBtn).toBeInTheDocument();

    fireEvent.click(automotiveBtn);
    expect(screen.getByText(/Automotive Scenario/i)).toBeInTheDocument();
  });
});
