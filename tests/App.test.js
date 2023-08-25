import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0066cc',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
  },
});

describe('App Component', () => {

  it('should render App component without crashing', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
  });

  it('should render Header component', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
    const headerElement = screen.getByRole('banner');  // Asume que el Header tiene role="banner"
    expect(headerElement).toBeInTheDocument();
  });

  it('should render PLP on root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MemoryRouter>
    );
    const plpElement = screen.getByTestId('plp');  // Asume que el componente PLP tiene data-testid="plp"
    expect(plpElement).toBeInTheDocument();
  });

});

