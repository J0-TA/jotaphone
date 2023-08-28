import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import BreadcrumbsComponent from '../components/BreadcrumbsComponent';

describe('<BreadcrumbsComponent />', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <BreadcrumbsComponent />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('breadcrumb')).toBeInTheDocument();
  });

  it('displays the brand and model when provided', () => {
    render(
      <MemoryRouter>
        <BreadcrumbsComponent brand="Apple" model="iPhone" />
      </MemoryRouter>
    );
    expect(screen.getByText('Apple iPhone')).toBeInTheDocument();
  });
});
