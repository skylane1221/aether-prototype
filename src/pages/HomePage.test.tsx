import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { HomePage } from './HomePage';
import { renderWithRouter } from '../test/test-utils';
import { INDUSTRIES } from '../data/industries';

describe('HomePage', () => {
  it('renders main hero heading, badges, and CTA buttons', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HomePage />, {
      contextValue: { openSolutionModal },
    });

    // Main hero heading
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Turn Business Problems Into/i)).toBeInTheDocument();
    expect(screen.getByText(/Intelligent Solutions./i)).toBeInTheDocument();

    // CTA buttons exist
    expect(screen.getByRole('button', { name: /explore industries/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /see aether in action/i })).toBeInTheDocument();
  });

  it('renders industry vertical cards and sections', () => {
    renderWithRouter(<HomePage />);

    // Section header
    expect(screen.getByText('10 Industry Applications')).toBeInTheDocument();

    // Check first 3 industries appear
    INDUSTRIES.slice(0, 3).forEach((ind) => {
      expect(screen.getAllByText(ind.name).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('allows interacting with the demo simulation selector', () => {
    renderWithRouter(<HomePage />);

    // Test demo section interactions
    const simulateButton = screen.getByRole('button', { name: /simulate/i });
    expect(simulateButton).toBeInTheDocument();

    fireEvent.click(simulateButton);
    expect(screen.getByText(/2. Aether Understands/i)).toBeInTheDocument();
  });
});
