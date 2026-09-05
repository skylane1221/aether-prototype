import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Root', () => {
  it('renders the application root without crashing', () => {
    render(<App />);

    // Verify brand title exists in layout
    expect(screen.getAllByText('AETHER').length).toBeGreaterThanOrEqual(1);

    // Verify main navigation items
    expect(
      screen.getAllByRole('link', { name: /what is aether\?/i }).length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /industries/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /solutions/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /impact/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThanOrEqual(1);
  });
});
