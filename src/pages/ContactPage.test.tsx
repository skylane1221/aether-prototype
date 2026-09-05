import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { ContactPage } from './ContactPage';
import { renderWithRouter } from '../test/test-utils';

describe('ContactPage (Solution Builder)', () => {
  it('renders hero title and industry selection options', () => {
    renderWithRouter(<ContactPage />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Don't Choose a Product/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Tell Aether Your Problem/i).length).toBeGreaterThan(0);

    // Verify industry options exist
    expect(screen.getByRole('button', { name: /real estate/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /restaurants & food/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /gyms & fitness/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /salons & beauty/i })).toBeInTheDocument();
  });

  it('allows selecting an industry and toggling transformation priorities', () => {
    renderWithRouter(<ContactPage />);

    // Select Restaurants & Food
    const restaurantBtn = screen.getByRole('button', { name: /restaurants & food/i });
    fireEvent.click(restaurantBtn);

    // Toggle an improvement priority
    const automatePriorityBtn = screen.getByRole('button', { name: /automate workflows/i });
    fireEvent.click(automatePriorityBtn);

    // Verify submit button exists
    expect(
      screen.getByRole('button', { name: /explore what aether could do/i })
    ).toBeInTheDocument();
  });
});
