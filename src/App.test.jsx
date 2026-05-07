import React from 'react';
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App.jsx';

it('renders without crashing', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /hello world/i })).toBeInTheDocument();
});
