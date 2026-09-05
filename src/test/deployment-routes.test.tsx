import React, { Suspense } from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { WhatIsAetherPage } from '../pages/WhatIsAetherPage';
import { IndustriesIndexPage } from '../pages/IndustriesIndexPage';
import { IndustryDetailPage } from '../pages/IndustryDetailPage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { DemosPage } from '../pages/DemosPage';
import { ImpactPage } from '../pages/ImpactPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const createTestRouter = (initialEntries: string[]) => {
  return createMemoryRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'what-is-aether', element: <WhatIsAetherPage /> },
          { path: 'industries', element: <IndustriesIndexPage /> },
          { path: 'industries/:slug', element: <IndustryDetailPage /> },
          { path: 'solutions', element: <SolutionsPage /> },
          { path: 'demos', element: <DemosPage /> },
          { path: 'impact', element: <ImpactPage /> },
          { path: 'contact', element: <ContactPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
    { initialEntries }
  );
};

describe('Deployment & Direct Route Navigation', () => {
  it('direct navigation to /industries/real-estate loads Real Estate experience and metadata', async () => {
    const router = createTestRouter(['/industries/real-estate']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Real Estate/i).length).toBeGreaterThanOrEqual(1);
    });

    expect(document.title).toContain('Real Estate');
  });

  it('direct navigation to /industries/retail loads Retail experience', async () => {
    const router = createTestRouter(['/industries/retail']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Retail/i).length).toBeGreaterThanOrEqual(1);
    });

    expect(document.title).toContain('Retail');
  });

  it('direct navigation to /industries/hotels loads Hotel experience', async () => {
    const router = createTestRouter(['/industries/hotels']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Hotel/i).length).toBeGreaterThanOrEqual(1);
    });

    expect(document.title).toContain('Hotels');
  });

  it('direct navigation to /industries/healthcare loads Healthcare experience', async () => {
    const router = createTestRouter(['/industries/healthcare']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Healthcare/i).length).toBeGreaterThanOrEqual(1);
    });

    expect(document.title).toContain('Healthcare');
  });

  it('direct navigation to /demos loads Interactive Demos sandbox', async () => {
    const router = createTestRouter(['/demos']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Interactive Demos/i).length).toBeGreaterThanOrEqual(1);
    });

    expect(document.title).toContain('Interactive Demos');
  });

  it('direct navigation to /industries/restaurants loads Restaurant experience', async () => {
    const router = createTestRouter(['/industries/restaurants']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Restaurant/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(document.title).toContain('Restaurant');
  });

  it('direct navigation to /industries/cafes loads Cafe experience', async () => {
    const router = createTestRouter(['/industries/cafes']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Cafe/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(document.title).toContain('Cafe');
  });

  it('direct navigation to /industries/gyms loads Gym experience', async () => {
    const router = createTestRouter(['/industries/gyms']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Gym/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(document.title).toContain('Gym');
  });

  it('direct navigation to /industries/salons loads Salon experience', async () => {
    const router = createTestRouter(['/industries/salons']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Salon/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(document.title).toContain('Salon');
  });

  it('direct navigation to /industries/automotive loads Automotive experience', async () => {
    const router = createTestRouter(['/industries/automotive']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Automotive/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(document.title).toContain('Automotive');
  });

  it('direct navigation to /industries/education loads Education experience', async () => {
    const router = createTestRouter(['/industries/education']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getAllByText(/Education/i).length).toBeGreaterThanOrEqual(1);
    });
    expect(document.title).toContain('Education');
  });

  it('direct navigation to all core pitch flow routes works seamlessly', async () => {
    // 1. Home
    const homeRouter = createTestRouter(['/']);
    const { unmount: unmountHome } = render(<RouterProvider router={homeRouter} />);
    expect(screen.getByText(/AI-Powered Business Transformation/i)).toBeInTheDocument();
    unmountHome();

    // 2. What is Aether
    const whatRouter = createTestRouter(['/what-is-aether']);
    const { unmount: unmountWhat } = render(<RouterProvider router={whatRouter} />);
    expect(screen.getAllByText(/What is Aether/i).length).toBeGreaterThanOrEqual(1);
    unmountWhat();

    // 3. Solutions
    const solRouter = createTestRouter(['/solutions']);
    const { unmount: unmountSol } = render(<RouterProvider router={solRouter} />);
    expect(screen.getAllByText(/Solution/i).length).toBeGreaterThanOrEqual(1);
    unmountSol();

    // 4. Impact
    const impactRouter = createTestRouter(['/impact']);
    const { unmount: unmountImpact } = render(<RouterProvider router={impactRouter} />);
    expect(screen.getAllByText(/Impact/i).length).toBeGreaterThanOrEqual(1);
    unmountImpact();

    // 5. Contact
    const contactRouter = createTestRouter(['/contact']);
    const { unmount: unmountContact } = render(<RouterProvider router={contactRouter} />);
    expect(screen.getAllByText(/Tell Aether Your Problem/i).length).toBeGreaterThanOrEqual(1);
    unmountContact();
  });

  it('direct navigation to unknown route renders NotFoundPage with recovery actions', async () => {
    const router = createTestRouter(['/non-existent-subpath']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Route Signal Not Found/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Return to Platform Home/i })).toBeInTheDocument();
  });

  it('direct navigation to unknown industry slug renders NotFoundPage', async () => {
    const router = createTestRouter(['/industries/unknown-vertical-slug']);
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    });
  });
});
