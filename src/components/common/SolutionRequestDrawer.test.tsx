import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { SolutionRequestDrawer } from './SolutionRequestDrawer';
import { renderWithRouter } from '../../test/test-utils';

describe('SolutionRequestDrawer', () => {
  it('does not render content when isOpen is false', () => {
    const onClose = vi.fn();
    renderWithRouter(<SolutionRequestDrawer isOpen={false} onClose={onClose} />);

    expect(screen.queryByText(/What type of business are you/i)).not.toBeInTheDocument();
  });

  it('renders modal with industry choices, improvement priorities, and form inputs when isOpen is true', () => {
    const onClose = vi.fn();
    renderWithRouter(<SolutionRequestDrawer isOpen={true} onClose={onClose} />);

    expect(screen.getByText(/What type of business are you/i)).toBeInTheDocument();
    expect(screen.getByText(/What would you like to improve/i)).toBeInTheDocument();
    expect(screen.getByText(/Tell us about your challenge/i)).toBeInTheDocument();

    // Verify industry options exist
    expect(screen.getByRole('button', { name: /real estate/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /restaurants & food/i })).toBeInTheDocument();
  });

  it('validates required fields and displays validation error messages on invalid submit', () => {
    const onClose = vi.fn();
    const { container } = renderWithRouter(
      <SolutionRequestDrawer isOpen={true} onClose={onClose} />
    );

    // Trigger form submit
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    fireEvent.submit(form!);

    // Validation errors should appear
    expect(
      screen.getByText(/Please describe your operational challenge or bottleneck\./i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Please provide your name\./i)).toBeInTheDocument();
    expect(screen.getByText(/Please specify your organization name\./i)).toBeInTheDocument();
    expect(screen.getByText(/Please provide your work email address\./i)).toBeInTheDocument();
  });

  it('allows filling the form, toggling priorities, submitting, and viewing generated architecture confirmation', async () => {
    const onClose = vi.fn();
    renderWithRouter(<SolutionRequestDrawer isOpen={true} onClose={onClose} />);

    // Select Healthcare
    const healthcareBtn = screen.getByRole('button', { name: /healthcare & clinics/i });
    fireEvent.click(healthcareBtn);

    // Toggle improvement priority
    const priorityBtn = screen.getByRole('button', { name: /improve sales\/conversion/i });
    fireEvent.click(priorityBtn);

    // Fill in textarea and text inputs
    const challengeTextarea = screen.getByPlaceholderText(/e\.g\. Paper intake delays/i);
    fireEvent.change(challengeTextarea, {
      target: {
        value:
          'Patient intake clipboards take 20 minutes and lead to schedule delays throughout the day.',
      },
    });

    const nameInput = screen.getByPlaceholderText(/Marcus Vance/i);
    fireEvent.change(nameInput, { target: { value: 'Dr. John Doe' } });

    const orgInput = screen.getByPlaceholderText(/Acme Holdings/i);
    fireEvent.change(orgInput, { target: { value: 'Apex Medical Center' } });

    const emailInput = screen.getByPlaceholderText(/marcus@company\.com/i);
    fireEvent.change(emailInput, { target: { value: 'john.doe@apexmedical.com' } });

    // Submit form
    const submitButton = screen.getByRole('button', { name: /Explore What Aether Could Do/i });
    fireEvent.click(submitButton);

    // Wait for submission animation and confirmation state
    expect(
      await screen.findByText(/Your business challenge has been captured\./i)
    ).toBeInTheDocument();

    // Verify confirmation details
    expect(screen.getByText(/Apex Medical Center/i)).toBeInTheDocument();
    expect(screen.getByText(/Dr\. John Doe/i)).toBeInTheDocument();

    // Verify Describe Another Challenge returns to form
    const anotherBtn = screen.getByRole('button', { name: /Describe Another Challenge/i });
    expect(anotherBtn).toBeInTheDocument();
    fireEvent.click(anotherBtn);

    // Should return to the form
    expect(screen.getByText(/What type of business are you/i)).toBeInTheDocument();
  });
});
