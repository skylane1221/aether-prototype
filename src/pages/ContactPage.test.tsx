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

  it('displays validation errors when submitting with empty required fields', () => {
    const { container } = renderWithRouter(<ContactPage />);

    // Trigger form submit
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    fireEvent.submit(form!);

    // Validation errors should be displayed
    expect(
      screen.getByText(/Please describe your operational challenge or bottleneck\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Please provide your name\./i)).toBeInTheDocument();
    expect(
      screen.getByText(/Please specify your company or organization name\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Please provide your work email address\./i)).toBeInTheDocument();
  });

  it('completes the full intake form submission and allows resetting to build another solution', async () => {
    renderWithRouter(<ContactPage />);

    // Select Gyms & Fitness
    const gymBtn = screen.getByRole('button', { name: /gyms & fitness/i });
    fireEvent.click(gymBtn);

    // Fill in textarea and inputs
    const challengeInput = screen.getByPlaceholderText(/e\.g\. Members stop attending/i);
    fireEvent.change(challengeInput, {
      target: {
        value:
          'Members churn after 60 days without visiting and front desk lacks automated check-in alerts.',
      },
    });

    const nameInput = screen.getByPlaceholderText(/Marcus Vance/i);
    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });

    const orgInput = screen.getByPlaceholderText(/Acme Holdings/i);
    fireEvent.change(orgInput, { target: { value: 'Pulse Fitness Labs' } });

    const emailInput = screen.getByPlaceholderText(/marcus@company\.com/i);
    fireEvent.change(emailInput, { target: { value: 'alex.morgan@pulsefitness.com' } });

    // Submit form
    const submitBtn = screen.getByRole('button', { name: /explore what aether could do/i });
    fireEvent.click(submitBtn);

    // Verify confirmation screen
    expect(
      await screen.findByText(/Your business challenge has been captured\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Alex Morgan/i)).toBeInTheDocument();
    expect(screen.getByText(/Pulse Fitness Labs/i)).toBeInTheDocument();

    // Verify Describe Another Challenge reset action
    const resetBtn = screen.getByRole('button', { name: /Describe Another Challenge/i });
    expect(resetBtn).toBeInTheDocument();
    fireEvent.click(resetBtn);

    // Back to form
    expect(screen.getByText(/Tell us what you are trying to solve/i)).toBeInTheDocument();
  });
});
