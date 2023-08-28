import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductImage from '../components/ProductImage';

describe('<ProductImage />', () => {
  it('renders without crashing', () => {
    render(<ProductImage />);
  });

  it('displays brand and model', () => {
    render(<ProductImage brand="Apple" model="iPhone 15" />);
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('iPhone 15')).toBeInTheDocument();
  });

  it('displays price when available', () => {
    render(<ProductImage price={999} />);
    expect(screen.getByText('999€')).toBeInTheDocument();
  });

  it('displays "PREORDER NOW" when price is not available', () => {
    render(<ProductImage />);
    expect(screen.getByText('PREORDER NOW')).toBeInTheDocument();
  });
});
