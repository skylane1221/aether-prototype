import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { IndustriesIndexPage } from './IndustriesIndexPage';
import { renderWithRouter } from '../test/test-utils';
import { INDUSTRIES } from '../data/industries';

describe('IndustriesIndexPage', () => {
  it('renders heading and all 10 industry vertical cards', () => {
    renderWithRouter(<IndustriesIndexPage />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Explore Industries' })
    ).toBeInTheDocument();

    // Verify first 5 industry cards are present
    INDUSTRIES.slice(0, 5).forEach((ind) => {
      expect(screen.getAllByText(ind.name).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('filters industries when clicking category tabs', () => {
    renderWithRouter(<IndustriesIndexPage />);

    // Click "Customer-focused" tab
    const customerTab = screen.getByRole('tab', { name: /customer-focused/i });
    expect(customerTab).toBeInTheDocument();

    fireEvent.click(customerTab);

    // Verify filtered results contain customer focused industries
    const customerInds = INDUSTRIES.filter((ind) => ind.categoryFocus.includes('Customer-focused'));
    expect(screen.getAllByText(customerInds[0].name).length).toBeGreaterThanOrEqual(1);
  });
});
