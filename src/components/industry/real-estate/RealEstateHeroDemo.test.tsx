import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RealEstateHeroDemo } from './RealEstateHeroDemo';

describe('RealEstateHeroDemo', () => {
  it('renders sample prompts, query input, extracted parameters, and matched properties', () => {
    render(<RealEstateHeroDemo />);

    expect(screen.getByText(/natural-language-triage/i)).toBeInTheDocument();
    expect(screen.getByText(/Preset 01/i)).toBeInTheDocument();
    expect(screen.getByText(/Preset 02/i)).toBeInTheDocument();

    // Verify extracted parameter chips exist in default state
    expect(
      screen.getByText(/Aether Understands • Autonomous Entity Extraction/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/2 BHK/i)).toBeInTheDocument();
    expect(screen.getByText(/₹1.50 Cr/i)).toBeInTheDocument();

    // Verify property inventory cards exist
    expect(screen.getAllByText(/Hiranandani Castle Rock/i).length).toBeGreaterThan(0);
  });

  it('switches sample prompt preset and re-runs AI parameter extraction', async () => {
    render(<RealEstateHeroDemo />);

    // Switch to Preset 02
    const presetBtn = screen.getByRole('button', { name: /Load preset 2/i });
    fireEvent.click(presetBtn);

    // Click Parse & Match Inventory
    const runBtn = screen.getByRole('button', { name: /Parse & Match Inventory/i });
    fireEvent.click(runBtn);

    // Verify loading/analyzing state
    expect(screen.getByText(/Extracting.../i)).toBeInTheDocument();

    // Wait for analysis to finish
    await waitFor(
      () => {
        expect(
          screen.getByText(/Aether Understands • Autonomous Entity Extraction/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('allows shortlisting properties, opening showing scheduler modal, and confirming booking', () => {
    render(<RealEstateHeroDemo />);

    // Shortlist button on first property
    const shortlistBtns = screen.getAllByTitle(/Shortlist/i);
    expect(shortlistBtns.length).toBeGreaterThan(0);
    fireEvent.click(shortlistBtns[0]);

    // Schedule visit button
    const scheduleBtns = screen.getAllByRole('button', { name: /schedule visit/i });
    expect(scheduleBtns.length).toBeGreaterThan(0);
    fireEvent.click(scheduleBtns[0]);

    // Showing modal opens
    expect(screen.getByText(/Select Available Showing Window/i)).toBeInTheDocument();
    const confirmBtn = screen.getByRole('button', { name: /Confirm Booking & Issue Pass/i });
    expect(confirmBtn).toBeInTheDocument();

    // Confirm booking
    fireEvent.click(confirmBtn);
    expect(screen.getByText(/Site Visit Confirmed!/i)).toBeInTheDocument();
    expect(screen.getByText(/Digital Gate Pass Token/i)).toBeInTheDocument();
  });

  it('opens property dossier modal and property comparison matrix modal', () => {
    render(<RealEstateHeroDemo />);

    // Click View Dossier on first property
    const viewDossierBtns = screen.getAllByRole('button', { name: /View Dossier/i });
    expect(viewDossierBtns.length).toBeGreaterThan(0);
    fireEvent.click(viewDossierBtns[0]);

    // Modal opens
    expect(screen.getByText(/Key Architectural Highlights/i)).toBeInTheDocument();
    expect(screen.getByText(/Aether Matching Rationale/i)).toBeInTheDocument();

    // Close dossier modal
    const closeBtn = screen.getByRole('button', { name: 'Close dialog' });
    fireEvent.click(closeBtn);

    // Click Compare Properties
    const compareBtn = screen.getByRole('button', { name: /Compare Properties/i });
    fireEvent.click(compareBtn);

    // Compare matrix opens
    expect(screen.getByText(/Side-by-Side Property Comparison Matrix/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Done Comparing/i })).toBeInTheDocument();
  });
});
