import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PageFallback } from './components/common/PageFallback';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const WhatIsAetherPage = lazy(() =>
  import('./pages/WhatIsAetherPage').then((m) => ({ default: m.WhatIsAetherPage }))
);
const IndustriesIndexPage = lazy(() =>
  import('./pages/IndustriesIndexPage').then((m) => ({ default: m.IndustriesIndexPage }))
);
const IndustryDetailPage = lazy(() =>
  import('./pages/IndustryDetailPage').then((m) => ({ default: m.IndustryDetailPage }))
);
const SolutionsPage = lazy(() =>
  import('./pages/SolutionsPage').then((m) => ({ default: m.SolutionsPage }))
);
const DemosPage = lazy(() => import('./pages/DemosPage').then((m) => ({ default: m.DemosPage })));
const ImpactPage = lazy(() =>
  import('./pages/ImpactPage').then((m) => ({ default: m.ImpactPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback message="Loading Aether Home..." />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'what-is-aether',
        element: (
          <Suspense fallback={<PageFallback message="Loading Aether Overview..." />}>
            <WhatIsAetherPage />
          </Suspense>
        ),
      },
      {
        path: 'industries',
        element: (
          <Suspense fallback={<PageFallback message="Loading Industries..." />}>
            <IndustriesIndexPage />
          </Suspense>
        ),
      },
      {
        path: 'industries/:slug',
        element: (
          <Suspense fallback={<PageFallback message="Loading Industry Experience..." />}>
            <IndustryDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'solutions',
        element: (
          <Suspense fallback={<PageFallback message="Loading Solutions..." />}>
            <SolutionsPage />
          </Suspense>
        ),
      },
      {
        path: 'demos',
        element: (
          <Suspense fallback={<PageFallback message="Loading Interactive Demos..." />}>
            <DemosPage />
          </Suspense>
        ),
      },
      {
        path: 'impact',
        element: (
          <Suspense fallback={<PageFallback message="Loading Impact Analysis..." />}>
            <ImpactPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageFallback message="Loading Solution Builder..." />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageFallback message="Loading Page..." />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
