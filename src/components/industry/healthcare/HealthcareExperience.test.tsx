import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { HealthcareExperience } from './HealthcareExperience';
import { healthcareIndustry } from '../../../data/industries/healthcare';
import { renderWithRouter } from '../../../test/test-utils';

describe('HealthcareExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HealthcareExperience industry={healthcareIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Healthcare & Clinics/i).length).toBeGreaterThan(0);
    expect(screen.getByText(healthcareIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/Eliminate administrative bottlenecks and clinic no-shows/i)
    ).toBeInTheDocument();

    // Challenges (6 Problems)
    expect(
      screen.getByText(/Core Challenges in Outpatient & Clinic Operations/i)
    ).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Clinic Bottlenecks Into Administrative Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (8 Solutions)
    expect(
      screen.getByText(/8 Intelligent Solutions for Healthcare & Clinics/i)
    ).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Schedule Custom Clinic Demo/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows selecting patient appointments in HealthcareAppointmentDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HealthcareExperience industry={healthcareIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Signature Journey:/i)).toBeInTheDocument();

    // Select second patient appointment Sarah Chen
    const sarahBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Sarah Chen'))!;
    expect(sarahBtn).toBeInTheDocument();
    fireEvent.click(sarahBtn);

    expect(screen.getAllByText(/Dr. Rajiv Nair/i).length).toBeGreaterThan(0);
  });

  it('allows switching tabs in HealthcareBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HealthcareExperience industry={healthcareIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Specialty Department Throughput tab
    const deptTab = screen.getByRole('button', { name: /Specialty Department Throughput/i });
    fireEvent.click(deptTab);
    expect(screen.getAllByText(/Cardiology Outpatient/i).length).toBeGreaterThan(0);

    // No-Show Interception Telemetry tab
    const noShowTab = screen.getByRole('button', { name: /No-Show Interception Telemetry/i });
    fireEvent.click(noShowTab);
    expect(screen.getByText(/No-Show Risk Interception Architecture/i)).toBeInTheDocument();
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<HealthcareExperience industry={healthcareIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Complete Clinical Practice Capability Grid/i)).toBeInTheDocument();
    expect(screen.getByText(/EHR & Practice Management Connectors/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Clinical Protocol & Triage Mesh/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/Symptom severity scoring/i)).toBeInTheDocument();
  });
});
