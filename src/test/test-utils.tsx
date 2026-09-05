import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';

interface RenderWithRouterOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[];
  contextValue?: {
    openSolutionModal?: () => void;
  };
}

// Wrapper component to simulate Layout Outlet Context
const ContextWrapper: React.FC<{
  children: React.ReactNode;
  contextValue?: { openSolutionModal?: () => void };
}> = ({ children, contextValue }) => {
  const defaultContext = {
    openSolutionModal: () => {},
    ...contextValue,
  };

  return (
    <Routes>
      <Route element={<Outlet context={defaultContext} />}>
        <Route index element={<>{children}</>} />
        <Route path="*" element={<>{children}</>} />
      </Route>
    </Routes>
  );
};

export function renderWithRouter(ui: React.ReactElement, options: RenderWithRouterOptions = {}) {
  const { initialEntries = ['/'], contextValue, ...renderOptions } = options;

  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <ContextWrapper contextValue={contextValue}>{ui}</ContextWrapper>
    </MemoryRouter>,
    renderOptions
  );
}

export * from '@testing-library/react';
