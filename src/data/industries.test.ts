import { describe, it, expect } from 'vitest';
import { INDUSTRIES } from './industries';

describe('Industry Data Integrity', () => {
  it('loads all 10 core industries', () => {
    expect(INDUSTRIES).toBeDefined();
    expect(INDUSTRIES.length).toBe(10);
  });

  it('retrieves industry by slug accurately', () => {
    const healthcare = INDUSTRIES.find((ind) => ind.slug === 'healthcare');
    expect(healthcare).toBeDefined();
    expect(healthcare?.name).toContain('Healthcare');
    expect(healthcare?.slug).toBe('healthcare');
  });

  it('verifies all industries have required sections and metrics', () => {
    INDUSTRIES.forEach((industry) => {
      expect(industry.id).toBeTruthy();
      expect(industry.slug).toBeTruthy();
      expect(industry.challenges.length).toBeGreaterThan(0);
      expect(industry.opportunities.length).toBeGreaterThan(0);
      expect(industry.solutionMappings.length).toBeGreaterThan(0);
      expect(industry.workflowPipeline).toBeDefined();
      expect(industry.interactiveDemo).toBeDefined();
      expect(industry.businessIntelligence).toBeDefined();
      expect(industry.businessImpact).toBeDefined();
    });
  });
});
