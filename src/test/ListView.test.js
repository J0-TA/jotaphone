import React from 'react';
import { render, screen } from '@testing-library/react';
import ListView from '../components/ListView';

jest.mock('../components/Item', () => () => <div data-testid="mock-item"></div>);

describe('ListView Component', () => {
  const mockItems = [
    { id: '1', brand: 'Apple', model: 'iPhone 15', price: '999', imgUrl: 'https://example.com/iphone.jpg' },
    { id: '2', brand: 'Samsung', model: 'Galaxy S23', price: '899', imgUrl: 'https://example.com/galaxy.jpg' },
  ];

  it('renders correctly', () => {
    render(<ListView items={mockItems} />);
    
    const listView = screen.getByTestId('list-view');
    expect(listView).toBeInTheDocument();
    
    const listItems = screen.getAllByTestId(/list-item-/);
    expect(listItems).toHaveLength(2);

    const mockItemComponents = screen.getAllByTestId('mock-item');
    expect(mockItemComponents).toHaveLength(2);
  });
});
