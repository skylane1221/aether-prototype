import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RestaurantForecastDemo } from './RestaurantForecastDemo';

describe('RestaurantForecastDemo', () => {
  it('renders historical sales baseline, scenario selector buttons, and preparation forecast', () => {
    render(<RestaurantForecastDemo />);

    expect(screen.getByText(/predictive-prep-forecast/i)).toBeInTheDocument();
    expect(screen.getByText(/Step 1: Historical Sales Baseline/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Tomorrow/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Weekend Rush/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Rainy Day/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Festival Period/i })).toBeInTheDocument();

    // Default covers for tomorrow
    expect(screen.getByText('240')).toBeInTheDocument();
  });

  it('switches operational scenario and recalculates demand multipliers and prep recommendations', () => {
    render(<RestaurantForecastDemo />);

    // Click Weekend Rush scenario
    const weekendBtn = screen.getByRole('button', { name: /Weekend Rush/i });
    fireEvent.click(weekendBtn);

    // Expected covers for weekend surge is 445
    expect(screen.getByText('445')).toBeInTheDocument();
    expect(screen.getByText(/1\.85x/i)).toBeInTheDocument();

    // Switch to Rainy Day
    const rainyBtn = screen.getByRole('button', { name: /Rainy Day/i });
    fireEvent.click(rainyBtn);

    // Expected delivery share for rainy day is 68%
    expect(screen.getByText('68%')).toBeInTheDocument();
  });

  it('toggles detail tabs between dish targets, inventory pull, and kitchen operations', () => {
    render(<RestaurantForecastDemo />);

    // Switch to Inventory Requirements tab
    const inventoryTab = screen.getByRole('button', { name: /Step 4: Inventory Requirements/i });
    fireEvent.click(inventoryTab);
    expect(
      screen.getByText(/Shift Inventory Depletion & Vendor Reorder Ledger/i)
    ).toBeInTheDocument();

    // Switch to Operational Actions tab
    const operationsTab = screen.getByRole('button', { name: /Step 5: Operational Actions/i });
    fireEvent.click(operationsTab);
    expect(screen.getAllByText(/Dispatched to Line KDS Tablet/i).length).toBeGreaterThan(0);
  });
});
