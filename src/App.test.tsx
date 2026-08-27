import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('introduces the site', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Example' })).toBeInTheDocument();
    expect(screen.getByText('A fast, accessible React website.')).toBeInTheDocument();
  });
});
