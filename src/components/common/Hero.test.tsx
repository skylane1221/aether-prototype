import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { Hero } from './Hero';
import { renderWithRouter } from '../../test/test-utils';

describe('Hero Component', () => {
  it('renders title, subtitle, and badge correctly', () => {
    renderWithRouter(
      <Hero
        badge="Enterprise Engine"
        title="Transform Your Operations"
        subtitle="The autonomous operating system for modern business workflows."
      />
    );

    expect(screen.getByText('Enterprise Engine')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: /transform your operations/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText('The autonomous operating system for modern business workflows.')
    ).toBeInTheDocument();
  });

  it('renders primary and secondary CTA buttons and triggers callbacks', () => {
    const onPrimaryClick = vi.fn();
    const onSecondaryClick = vi.fn();

    renderWithRouter(
      <Hero
        title="Test Heading"
        subtitle="Test Subtitle"
        primaryAction={{
          label: 'Explore Industries',
          onClick: onPrimaryClick,
        }}
        secondaryAction={{
          label: 'Watch Demo',
          onClick: onSecondaryClick,
        }}
      />
    );

    const primaryBtn = screen.getByRole('button', { name: /explore industries/i });
    const secondaryBtn = screen.getByRole('button', { name: /watch demo/i });

    expect(primaryBtn).toBeInTheDocument();
    expect(secondaryBtn).toBeInTheDocument();

    fireEvent.click(primaryBtn);
    expect(onPrimaryClick).toHaveBeenCalledTimes(1);

    fireEvent.click(secondaryBtn);
    expect(onSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it('renders metrics stat pills and custom children slot', () => {
    renderWithRouter(
      <Hero
        title="Metrics Test"
        subtitle="Subtitle"
        metrics={[
          { value: '10', label: 'Industries Supported' },
          { value: '99.9%', label: 'Uptime SLA' },
        ]}
      >
        <div data-testid="custom-hero-child">Interactive Demo Preview</div>
      </Hero>
    );

    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Industries Supported')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('Uptime SLA')).toBeInTheDocument();
    expect(screen.getByTestId('custom-hero-child')).toBeInTheDocument();
  });
});
