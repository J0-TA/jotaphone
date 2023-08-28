import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Item Component', () => {
  const navigate = jest.fn();
  const mockData = {
    id: '1',
    brand: 'Apple',
    model: 'iPhone 15',
    price: '999',
    imgUrl: 'https://example.com/iphone.jpg',
  };

  beforeEach(() => {
    useNavigate.mockReturnValue(navigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Item {...mockData} />);
    
    expect(screen.getByTestId('brand').textContent).toBe('Apple');
    expect(screen.getByTestId('model').textContent).toBe('iPhone 15');
    expect(screen.getByTestId('price-tag').textContent).toBe('999 €');
  });

  it('navigates to PDP on click', () => {
    render(<Item {...mockData} />);
    
    fireEvent.click(screen.getByTestId("item-card"));
    expect(navigate).toHaveBeenCalledWith('/pdp/1');
  });
});
