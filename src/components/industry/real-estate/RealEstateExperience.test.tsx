import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { RealEstateExperience } from './RealEstateExperience';
import { realEstateIndustry } from '../../../data/industries/realEstate';
import { renderWithRouter } from '../../../test/test-utils';

describe('RealEstateExperience & Sub-Components', { timeout: 30000 }, () => {
  it('renders the complete Real Estate experience overview, stats, challenges, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RealEstateExperience industry={realEstateIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Overview & Hero
    expect(screen.getByText(/Aether for Real Estate/i)).toBeInTheDocument();
    expect(screen.getByText(realEstateIndustry.heroHeadline)).toBeInTheDocument();
    expect(screen.getByText(/Lead Response Time/i)).toBeInTheDocument();
    expect(screen.getByText(/< 15s/i)).toBeInTheDocument();

    // 01.5 Architecture Paradigm
    expect(screen.getByText(/The Core Problem/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Aether Understands/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Aether Recommends/i).length).toBeGreaterThan(0);

    // 02 Challenges
    expect(screen.getByText(/8 Core Challenges in Real Estate Brokerage/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Lead Fragmentation/i).length).toBeGreaterThan(0);

    // 03 Opportunities
    expect(
      screen.getByText(/Transforming Brokerage Drag Into Velocity Multipliers/i)
    ).toBeInTheDocument();

    // 04 Solutions Grid (12 solutions)
    expect(screen.getByText(/12 Intelligent Solutions for Real Estate/i)).toBeInTheDocument();
    expect(screen.getAllByText(/AI Lead Intelligence/i).length).toBeGreaterThan(0);

    // 08 Business Impact
    expect(
      screen.getByText(/Qualitative & Quantitative Impact in Real Estate/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Time Saved/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Viewing Conversion/i).length).toBeGreaterThan(0);

    // 09 Accordion
    expect(
      screen.getByText(/Additional Capabilities for Real Estate Brokerages/i)
    ).toBeInTheDocument();

    // 10 Bottom CTA
    expect(screen.getByText(/Real Estate Executive Briefing/i)).toBeInTheDocument();
    const ctaBtn = screen.getByRole('button', { name: /Request Custom Real Estate Architecture/i });
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows interacting with RealEstateJourneyPipeline stages', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RealEstateExperience industry={realEstateIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Default stage 01 Lead Ingestion is active
    expect(screen.getAllByText(/Omni-channel signal capture/i).length).toBeGreaterThan(0);

    // Click Stage 04: Property Match
    const matchStageBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('04') && b.textContent?.includes('Property Match'))!;
    expect(matchStageBtn).toBeInTheDocument();
    fireEvent.click(matchStageBtn);

    // Verify detail updates
    expect(screen.getByText(/Stage 04 of 07/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Semantic multi-factor ranking/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/4\.6x Higher Match Rate/i).length).toBeGreaterThan(0);

    // Click Stage 07: Conversion & Token
    const convStageBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('07') && b.textContent?.includes('Conversion'))!;
    expect(convStageBtn).toBeInTheDocument();
    fireEvent.click(convStageBtn);

    expect(screen.getByText(/Stage 07 of 07/i)).toBeInTheDocument();
    expect(screen.getAllByText(/\+38% Close Velocity/i).length).toBeGreaterThan(0);
  });

  it('allows interacting with RealEstateReverseMatchDemo to select properties and dispatch buyer dossiers', async () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RealEstateExperience industry={realEstateIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Verify Reverse Discovery Engine header
    expect(screen.getByText(/Reverse Discovery Engine/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Lodha Bellagio 3BHK Penthouse/i).length).toBeGreaterThan(0);

    // Click second property Godrej Urban Park 2BHK
    const godrejBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Godrej Urban Park 2BHK'))!;
    expect(godrejBtn).toBeInTheDocument();
    fireEvent.click(godrejBtn);

    // Verify matching buyers update
    expect(screen.getByText(/Aditya & Neha Sharma/i)).toBeInTheDocument();
    expect(screen.getByText(/98% Match/i)).toBeInTheDocument();

    // Dispatch dossier to lead
    const dispatchBtns = screen.getAllByRole('button', { name: /Dispatch Tailored Dossier/i });
    expect(dispatchBtns.length).toBeGreaterThan(0);
    fireEvent.click(dispatchBtns[0]);

    // Dispatch all dossiers
    const dispatchAllBtn = screen.getByRole('button', { name: /Dispatch Dossiers to All/i });
    expect(dispatchAllBtn).toBeInTheDocument();
    fireEvent.click(dispatchAllBtn);
  });

  it('allows switching tabs and executing follow-ups in RealEstateBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RealEstateExperience industry={realEstateIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Switch to Lead Intent tab
    const intentTab = screen.getByRole('button', { name: /Lead Intent/i });
    fireEvent.click(intentTab);
    expect(screen.getByText(/Tier 01/i)).toBeInTheDocument();
    expect(screen.getByText(/Immediate Buyer/i)).toBeInTheDocument();

    // Switch to Location Demand tab
    const demandTab = screen.getByRole('button', { name: /Location Demand/i });
    fireEvent.click(demandTab);
    expect(screen.getByText(/Powai \(Central & Hiranandani\)/i)).toBeInTheDocument();
    expect(screen.getByText(/₹1\.85 Cr/i)).toBeInTheDocument();

    // Switch to Inventory Status tab
    const invTab = screen.getByRole('button', { name: /Inventory Status/i });
    fireEvent.click(invTab);
    expect(screen.getByText(/Total Tracked Units/i)).toBeInTheDocument();
    expect(screen.getByText(/40\.4% Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText('480')).toBeInTheDocument();

    // Switch to Follow-up Opportunities tab
    const followupsTab = screen.getByRole('button', { name: /Follow-up Opportunities/i });
    fireEvent.click(followupsTab);
    expect(screen.getByText(/High-Urgency Follow-up Opportunities/i)).toBeInTheDocument();
    expect(screen.getByText(/Sanjay & Meenakshi Kulkarni/i)).toBeInTheDocument();

    // Execute single trigger
    const triggerBtns = screen.getAllByRole('button', { name: /Trigger Action/i });
    expect(triggerBtns.length).toBeGreaterThan(0);
    fireEvent.click(triggerBtns[0]);

    // Execute all triggers
    const executeAllBtn = screen.getByRole('button', { name: /Execute All 4 Actions/i });
    fireEvent.click(executeAllBtn);
  });

  it('toggles accordion items in additional capabilities section', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<RealEstateExperience industry={realEstateIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Default item 0 is open
    expect(screen.getByText(/MLS & Property Data Integration/i)).toBeInTheDocument();
    expect(screen.getByText(/Automated listing attribute sync/i)).toBeInTheDocument();

    // Toggle item 1
    const item1Btn = screen.getByRole('button', { name: /Autonomous Document & Compliance Mesh/i });
    fireEvent.click(item1Btn);

    // Item 1 content opens
    expect(
      screen.getByText(/Cognitive contract parsing and escrow milestone verification/i)
    ).toBeInTheDocument();
  });
});
