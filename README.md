# Aether Prototype

A modern web application prototype showcasing Aether's intelligent business transformation platform, industry-specific operational models, real-time workflow simulations, and modeled business impact.

---

## What Aether Is

Aether is an AI-powered business transformation platform designed to eliminate operational friction across enterprise and mid-market organizations. Traditional operations often rely on fragmented point solutions, manual triage, and disconnected data silos, resulting in delayed responses and lost revenue opportunities.

Aether introduces an autonomous cognitive engine that ingests multi-channel operational signals in real time, diagnoses bottlenecks with predictive models, and orchestrates actions across existing business systems without requiring rip-and-replace infrastructure changes.

---

## Industries

The prototype models dedicated operational transformations across 10 industry verticals:

1. **Real Estate** – Autonomous buyer qualification, reverse inventory matching, and automated viewing dispatch.
2. **Healthcare** – Clinical schedule optimization, patient pre-triage, and autonomous no-show recovery.
3. **Hotel & Hospitality** – Forward-looking occupancy pace, automated housekeeping orchestration, and revenue optimization.
4. **Automotive** – Telemetry service trigger triage, workshop bay scheduling, and post-service follow-ups.
5. **Restaurant** – Dynamic table turn prediction, ingredient prep demand forecasting, and VIP guest recognition.
6. **Cafe** – Rush-hour queue load balancing, automated prep scheduling, and loyalty re-engagement.
7. **Retail** – Forward-looking stockout risk detection, dynamic markdown triggers, and omnichannel synchronization.
8. **Salon & Spa** – Stylist chair utilization leveling, automated churn re-booking, and add-on recommendation.
9. **Education** – Multi-channel enrollment inquiry triage, counselor routing, and student retention radar.
10. **Gym & Fitness** – Attendance lapse churn prevention, class capacity rebalancing, and membership renewals.

---

## Features

- **Industry Experiences**: Deep-dive vertical dashboards displaying sector-specific challenges, opportunities, capability matrices, and business intelligence.
- **Interactive Demos**: Live 4-stage and 6-stage cognitive simulation sandboxes illustrating raw signal ingestion, telemetry diagnosis, prescriptive recommendations, and autonomous action execution.
- **Solutions Suite**: Exploration of 6 platform solution disciplines: AI Intelligence, Customer Intelligence, Operational Intelligence, Workflow Automation, Business Intelligence, and Communication Intelligence.
- **Business Impact**: Quantified dimension-based operational modeling demonstrating gains in response time, efficiency, customer experience, and visibility.
- **Request Solution Flow**: Modal drawer allowing stakeholders to request tailored transformation blueprints and simulation audits.

---

## Tech Stack

- **Core Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Testing:** [Vitest](https://vitest.dev/) with V8 coverage
- **Code Quality:** [ESLint](https://eslint.org/) (Flat Config) + [Prettier](https://prettier.io/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or v20+ recommended)
- npm (v9+ recommended)

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/skylane1221/aether-prototype.git
cd "Aether Prototype"

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Development

Execute standard quality checks and build pipelines:

```bash
# Run code linting
npm run lint

# Validate TypeScript types under strict mode
npm run typecheck

# Run unit tests
npm run test

# Run tests with code coverage
npm run test:coverage

# Create production build
npm run build

# Preview production build locally
npm run preview

# Format code with Prettier
npm run format

# Check formatting
npm run format:check
```

---

## Docker Deployment

The prototype includes a multi-stage `Dockerfile` and `nginx.conf` configured for single-page application (SPA) routing, gzip compression, and static asset caching.

### Build Image

```bash
docker build -t aether-prototype .
```

### Run Container

```bash
docker run -d -p 8080:80 --name aether-app aether-prototype
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

To stop and remove the container:

```bash
docker stop aether-app
docker rm aether-app
```

---

## Environment Variables

The application runs fully in-memory with local simulated datasets and zero required external services.

For optional production URL configuration (used for canonical links and Open Graph URL generation), refer to [.env.example](.env.example):

- `VITE_APP_URL` – Base domain URL for canonical metadata (e.g., `https://aether.example.com`).

---

## Architecture

```
src/
├── components/          # Reusable UI elements & layout
│   ├── common/          # Shared cards, hero, journey navigator, and demo container
│   ├── industry/        # Vertical BI dashboards, pipelines, and demo sandboxes
│   ├── layout/          # Navbar, Footer, and App Layout
│   └── ui/              # Atom components (Button, Card, Badge, Modal, Tabs)
├── data/                # Mock datasets, simulation scenarios, and industry schemas
├── pages/               # Route-level views (Home, Industries, Solutions, Demos, Impact, Contact)
├── styles/              # Global Tailwind CSS layers and custom utilities
├── types/               # TypeScript interfaces, theme palettes, and data contracts
├── utils/               # Class merge helpers (cn) and utility functions
├── router.tsx           # React Router route tree configuration
├── App.tsx              # Root application provider
└── main.tsx             # Application DOM mount entry point
```

---

## Demo

Local development and production builds are fully self-contained. Deployed environment links will be updated here upon deployment.

---

## License

This project is licensed under the [MIT License](LICENSE).
