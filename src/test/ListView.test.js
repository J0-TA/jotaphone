import React from 'react';
import { render } from '@testing-library/react';
import ListView from '../components/ListView';

const mockItems = [
  { brand: "Apple", model: "iPhone 13", price: 999, imgUrl: "some-url" },
  { brand: "Samsung", model: "Galaxy S22", price: 899, imgUrl: "some-url" },
];

describe('ListView', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<ListView items={mockItems} />);
    expect(getByTestId('list-view')).toBeInTheDocument();
  });

  it('renders the correct number of items', () => {
    const { getAllByTestId } = render(<ListView items={mockItems} />);
    const items = getAllByTestId(/^list-item-/);
    expect(items.length).toBe(mockItems.length);
  });
});
