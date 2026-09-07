import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { EducationExperience } from './EducationExperience';
import { educationIndustry } from '../../../data/industries/education';
import { renderWithRouter } from '../../../test/test-utils';

describe('EducationExperience', () => {
  it('renders overview, metrics, problems, opportunities, and solutions', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<EducationExperience industry={educationIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getAllByText(/Aether for Education & Training Centers/i).length).toBeGreaterThan(
      0
    );
    expect(screen.getByText(educationIndustry.heroHeadline)).toBeInTheDocument();

    // Operational Paradigm
    expect(
      screen.getByText(/Match prospective students to the right course pathways/i)
    ).toBeInTheDocument();

    // Challenges (3 Problems)
    expect(
      screen.getByText(/Core Challenges in Education & Training Operations/i)
    ).toBeInTheDocument();

    // Opportunities
    expect(
      screen.getByText(/Transforming Academic Admissions Drag Into Enrollment Multipliers/i)
    ).toBeInTheDocument();

    // Solutions (10 Solutions)
    expect(
      screen.getByText(/10 Intelligent Solutions for Education & Training/i)
    ).toBeInTheDocument();

    // Bottom CTA
    const ctaBtn = screen.getByRole('button', { name: /Schedule Custom Academic Demo/i });
    expect(ctaBtn).toBeInTheDocument();
    fireEvent.click(ctaBtn);
    expect(openSolutionModal).toHaveBeenCalledTimes(1);
  });

  it('allows selecting prospective student inquiries in EducationInquiryDemo', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<EducationExperience industry={educationIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Signature Journey:/i)).toBeInTheDocument();

    // Select second student inquiry Arjun Mehta
    const studentBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent?.includes('Arjun Mehta'))!;
    expect(studentBtn).toBeInTheDocument();
    fireEvent.click(studentBtn);

    expect(screen.getAllByText(/Arjun Mehta/i).length).toBeGreaterThan(0);
  });

  it('allows switching tabs in EducationBiDashboard', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<EducationExperience industry={educationIndustry} />, {
      contextValue: { openSolutionModal },
    });

    // Admissions Advisor Performance tab
    const advisorTab = screen.getByRole('button', { name: /Admissions Advisor Performance/i });
    fireEvent.click(advisorTab);
    expect(screen.getByText(/Dr\. Sarah Lin/i)).toBeInTheDocument();

    // Retention Watchdog tab
    const watchdogTab = screen.getByRole('button', {
      name: /Retention Watchdog & Academic Success/i,
    });
    fireEvent.click(watchdogTab);
    expect(screen.getAllByText(/Cohort Completion Rate/i).length).toBeGreaterThan(0);
  });

  it('toggles accordion items in additional capabilities', () => {
    const openSolutionModal = vi.fn();
    renderWithRouter(<EducationExperience industry={educationIndustry} />, {
      contextValue: { openSolutionModal },
    });

    expect(screen.getByText(/Complete Academic & Academy Capability Grid/i)).toBeInTheDocument();
    expect(screen.getByText(/LMS & Student Information System Connectors/i)).toBeInTheDocument();

    // Toggle second accordion item
    const item1Btn = screen.getByRole('button', { name: /Financial Aid & Tuition Workflow Mesh/i });
    fireEvent.click(item1Btn);
    expect(screen.getByText(/FAFSA document tracking/i)).toBeInTheDocument();
  });
});
