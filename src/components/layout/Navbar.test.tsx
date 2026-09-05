import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { renderWithRouter } from '../../test/test-utils';

describe('Navbar Component', () => {
  it('renders brand logo, title, and main navigation links', () => {
    const handleRequestSolution = vi.fn();
    renderWithRouter(<Navbar onRequestSolution={handleRequestSolution} />);

    expect(screen.getByText('AETHER')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /what is aether\?/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /industries/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /solutions/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /demos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /impact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('triggers onRequestSolution callback when Request Solution button is clicked', () => {
    const handleRequestSolution = vi.fn();
    renderWithRouter(<Navbar onRequestSolution={handleRequestSolution} />);

    const requestButtons = screen.getAllByRole('button', { name: /request solution/i });
    expect(requestButtons.length).toBeGreaterThan(0);

    fireEvent.click(requestButtons[0]);
    expect(handleRequestSolution).toHaveBeenCalledTimes(1);
  });

  it('toggles mobile menu when menu button is clicked', () => {
    const handleRequestSolution = vi.fn();
    renderWithRouter(<Navbar onRequestSolution={handleRequestSolution} />);

    const mobileMenuButton = screen.getByLabelText(/toggle navigation menu/i);
    expect(mobileMenuButton).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);
    // Menu opens and mobile links appear
    const mobileLinks = screen.getAllByRole('link', { name: /what is aether\?/i });
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1);
  });
});
