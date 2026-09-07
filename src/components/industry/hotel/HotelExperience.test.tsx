import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { HotelExperience } from './HotelExperience';
import { hotelIndustry } from '../../../data/industries/hotel';
import { renderWithRouter } from '../../../test/test-utils';

describe('HotelExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HotelExperience industry={hotelIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Hotels & Hospitality/i).length).toBeGreaterThan(0);
    expect(screen.getByText(hotelIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/Turn booking and guest signals into smarter operational decisions/i)
    ).toBeInTheDocument();

    // Challenges (8 Problems)
    expect(screen.getByText(/8 Core Challenges in Hotel & Resort Operations/i)).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Hospitality Friction Into Yield Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (9 Solutions)
    expect(screen.getByText(/9 Intelligent Solutions for Hotel Operations/i)).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Request Custom Hospitality Architecture/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows switching date scenarios in HotelOperationsDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HotelExperience industry={hotelIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(
      screen.getByText(/Simulate Daily Hotel Operations & Shift Intelligence/i)
    ).toBeInTheDocument();

    // Select Saturday Gala scenario
    const satBtn = screen.getAllByRole('button').find((b) => b.textContent?.includes('Saturday'))!;
    expect(satBtn).toBeInTheDocument();
    fireEvent.click(satBtn);

    expect(screen.getAllByText(/Full House \/ Luxury Banquet/i).length).toBeGreaterThan(0);
  });

  it('allows switching tabs in HotelBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HotelExperience industry={hotelIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Cancellation Risk tab
    const cancelTab = screen.getByRole('button', { name: /Cancellation Risk/i });
    fireEvent.click(cancelTab);
    expect(screen.getByText(/Predictive Cancellation Risk Distribution/i)).toBeInTheDocument();

    // Revenue Opportunities tab
    const oppTab = screen.getByRole('button', { name: /Revenue Opportunities/i });
    fireEvent.click(oppTab);
    expect(
      screen.getByText(/Cognitive Ancillary Revenue & Direct Rebooking Opportunities/i)
    ).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HotelExperience industry={hotelIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Additional Capabilities for Hotels & Resorts/i)).toBeInTheDocument();
    expect(screen.getByText(/Property Management System \(PMS\) Mesh/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Multilingual AI Guest Concierge/i });
    fireEvent.click(item1Btn);
    expect(
      screen.getByText(/24\/7 conversational support in 30\+ languages over WhatsApp/i)
    ).toBeInTheDocument();
  });
});
