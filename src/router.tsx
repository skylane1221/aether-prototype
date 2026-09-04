import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { WhatIsAetherPage } from './pages/WhatIsAetherPage';
import { IndustriesIndexPage } from './pages/IndustriesIndexPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { DemosPage } from './pages/DemosPage';
import { ImpactPage } from './pages/ImpactPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'what-is-aether',
        element: <WhatIsAetherPage />,
      },
      {
        path: 'industries',
        element: <IndustriesIndexPage />,
      },
      {
        path: 'industries/:slug',
        element: <IndustryDetailPage />,
      },
      {
        path: 'solutions',
        element: <SolutionsPage />,
      },
      {
        path: 'demos',
        element: <DemosPage />,
      },
      {
        path: 'impact',
        element: <ImpactPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <HomePage />,
      },
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
