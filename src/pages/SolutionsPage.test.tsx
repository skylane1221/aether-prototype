import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { SolutionsPage } from './SolutionsPage';
import { renderWithRouter } from '../test/test-utils';

describe('SolutionsPage', () => {
  it('renders hero title and core solution categories', () => {
    renderWithRouter(<SolutionsPage />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    // Verify category headings
    expect(screen.getAllByText('AI Intelligence').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Customer Intelligence').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Operational Intelligence').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Workflow Automation').length).toBeGreaterThan(0);
  });

  it('allows clicking category filter pill to filter solutions', () => {
    renderWithRouter(<SolutionsPage />);

    const categoryBtn = screen.getByRole('button', { name: 'Workflow Automation' });
    expect(categoryBtn).toBeInTheDocument();

    fireEvent.click(categoryBtn);
    expect(screen.getAllByText('Workflow Automation').length).toBeGreaterThan(0);
  });
});
