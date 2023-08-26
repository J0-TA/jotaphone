import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Header bgColor="#0066cc" />);

    expect(getByTestId('header-title').textContent).toBe('Jotaphone');

    expect(getByTestId('shopping-cart-icon')).toBeInTheDocument();
  });

  it('applies the background color passed as a prop', () => {
    const { getByTestId } = render(<Header bgColor="#0066cc" />);
    const appBar = getByTestId('app-bar');

    expect(appBar).toHaveStyle({ backgroundColor: '#0066cc' });
  });
});
