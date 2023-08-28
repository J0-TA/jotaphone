import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../AppContext'; 
import Header from '../components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <Header bgColor="#0066cc" />
        </AppProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Jotaphone')).toBeInTheDocument();
    expect(screen.getByTestId('ShoppingCartIcon')).toBeInTheDocument();
  });

  it('applies the background color passed as a prop', () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <Header bgColor="#0066cc" />
        </AppProvider>
      </MemoryRouter>
    );

    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle({ backgroundColor: '#0066cc' });
  });
});
