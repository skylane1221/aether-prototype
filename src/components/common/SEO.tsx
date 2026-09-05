import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export const usePageMetadata = ({
  title,
  description,
  ogType = 'website',
  canonicalPath,
  noindex = false,
}: SEOProps) => {
  useEffect(() => {
    // 1. Page Title
    document.title = title;

    // Helper to get or create meta tag
    const setMetaTag = (attribute: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Description
    setMetaTag('name', 'description', description);

    // 3. Robots
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow');
    }

    // 4. Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);

    // 5. Twitter / X
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 6. Canonical link if environment base URL is provided
    const siteUrl = import.meta.env.VITE_APP_URL;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (siteUrl) {
      const fullUrl = `${siteUrl.replace(/\/$/, '')}${canonicalPath || window.location.pathname}`;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', fullUrl);
      setMetaTag('property', 'og:url', fullUrl);
    } else if (canonicalLink) {
      canonicalLink.remove();
    }
  }, [title, description, ogType, canonicalPath, noindex]);
};

export const SEO: React.FC<SEOProps> = (props) => {
  usePageMetadata(props);
  return null;
};
