# Aether Prototype

A modern web application prototype showcasing Aether's solutions, industry applications, interactive demos, and impact.

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or newer recommended).

### Installation

```bash
# Clone repository
git clone <YOUR_REPOSITORY_URL>

# Navigate into directory
cd "Aether Prototype"

# Install dependencies
npm install
```

### Development Scripts

| Command                 | Action                                                          |
| :---------------------- | :-------------------------------------------------------------- |
| `npm run dev`           | Starts the Vite local development server with HMR               |
| `npm run lint`          | Runs ESLint on project source files                             |
| `npm run typecheck`     | Validates TypeScript types across the codebase (`tsc --noEmit`) |
| `npm run test`          | Runs unit and integration tests using Vitest                    |
| `npm run test:coverage` | Generates a Vitest code coverage report with V8                 |
| `npm run build`         | Compiles TypeScript and builds production assets                |
| `npm run preview`       | Locally serves the production build                             |
| `npm run format`        | Automatically formats files using Prettier                      |
| `npm run format:check`  | Checks formatting without writing changes                       |

## 📁 Project Structure

```
├── src/
│   ├── components/   # UI components & layout
│   ├── data/         # Mock data and content
│   ├── pages/        # Route pages
│   ├── styles/       # Global CSS & Tailwind setup
│   ├── types/        # TypeScript interfaces & types
│   ├── utils/        # Utility helpers
│   ├── App.tsx       # Root app
│   ├── main.tsx      # Application entry
│   └── router.tsx    # Route configuration
├── public/           # Static assets
└── index.html        # HTML template
```
