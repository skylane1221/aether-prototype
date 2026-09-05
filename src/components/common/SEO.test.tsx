import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { SEO } from './SEO';

describe('SEO Component & usePageMetadata', () => {
  beforeEach(() => {
    document.title = '';
    const metas = document.querySelectorAll('meta');
    metas.forEach((m) => m.remove());
  });

  it('updates document.title and standard meta description', () => {
    render(
      <SEO
        title="Test Page Title | Aether"
        description="This is a test description for the page."
        canonicalPath="/test-page"
      />
    );

    expect(document.title).toBe('Test Page Title | Aether');

    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta).not.toBeNull();
    expect(descMeta?.getAttribute('content')).toBe('This is a test description for the page.');
  });

  it('updates Open Graph and Twitter meta tags', () => {
    render(<SEO title="OG Test Title" description="OG Test Description" ogType="article" />);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute('content')).toBe('OG Test Title');

    const ogDesc = document.querySelector('meta[property="og:description"]');
    expect(ogDesc?.getAttribute('content')).toBe('OG Test Description');

    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute('content')).toBe('article');

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    expect(twitterTitle?.getAttribute('content')).toBe('OG Test Title');
  });

  it('sets robots noindex when specified', () => {
    render(<SEO title="404 Not Found" description="Page not found" noindex={true} />);

    const robotsMeta = document.querySelector('meta[name="robots"]');
    expect(robotsMeta?.getAttribute('content')).toBe('noindex, nofollow');
  });
});
