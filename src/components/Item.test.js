import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Item brand="Apple" model="iPhone" price={999} imgUrl="image_url" />);
    
    expect(getByTestId('item-card')).toBeInTheDocument();
    expect(getByTestId('price-tag').textContent).toBe('999 €');
    expect(getByTestId('image-container')).toBeInTheDocument();
    expect(getByTestId('brand').textContent).toBe('Apple');
    expect(getByTestId('model').textContent).toBe('iPhone');
  });

  it('shows PREORDER NOW when price is missing', () => {
    const { getByTestId } = render(<Item brand="Apple" model="iPhone" imgUrl="image_url" />);
    
    expect(getByTestId('preorder').textContent).toBe('PREORDER NOW');
  });
});
