import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Tabs } from '../components/ui/Tabs';
import { Modal } from '../components/ui/Modal';
import { IndustryCard } from '../components/common/IndustryCard';
import { realEstateIndustry } from '../data/industries/realEstate';

describe('Accessibility Audit & Interactive Semantics', () => {
  it('Navbar contains accessible landmark and ARIA expand attributes', () => {
    render(
      <MemoryRouter>
        <Navbar onRequestSolution={() => {}} />
      </MemoryRouter>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('Tabs component implements WAI-ARIA tablist and tab semantics', () => {
    const items = [
      { id: 'tab1', label: 'Overview' },
      { id: 'tab2', label: 'Details' },
    ];

    render(<Tabs items={items} activeId="tab1" onChange={() => {}} />);

    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
  });

  it('Modal component establishes proper dialog role and accessible title labelling', () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="System Diagnostic Modal"
        description="Live telemetry analysis"
      >
        <p>Modal content</p>
      </Modal>
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
    expect(dialog).toHaveAttribute('aria-describedby', 'modal-desc');

    const closeBtn = screen.getByRole('button', { name: /close dialog/i });
    expect(closeBtn).toBeInTheDocument();
  });

  it('IndustryCard provides an accessible name for screen readers', () => {
    render(
      <MemoryRouter>
        <IndustryCard industry={realEstateIndustry} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /explore aether solutions for real estate/i });
    expect(link).toBeInTheDocument();
  });

  it('Tabs component supports ArrowRight and ArrowLeft keyboard navigation', () => {
    const handleChange = vi.fn();
    const items = [
      { id: 'tab1', label: 'Overview' },
      { id: 'tab2', label: 'Details' },
      { id: 'tab3', label: 'Analytics' },
    ];

    render(<Tabs items={items} activeId="tab1" onChange={handleChange} />);

    const tablist = screen.getByRole('tablist');

    // Press ArrowRight to go to next tab
    fireEvent.keyDown(tablist, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenCalledWith('tab2');

    // Press ArrowLeft to wrap around to last tab
    fireEvent.keyDown(tablist, { key: 'ArrowLeft' });
    expect(handleChange).toHaveBeenCalledWith('tab3');
  });

  it('Modal component triggers onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Escape Test Modal">
        <p>Modal body</p>
      </Modal>
    );

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
