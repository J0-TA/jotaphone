import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<SearchBar onSearch={() => {}} />);
    expect(getByTestId('searchbar-container')).toBeInTheDocument();
  });

  it('updates the search term state when typing', () => {
    const mockOnSearch = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={mockOnSearch} />);
    const input = getByTestId('searchbar-input').querySelector('input');

    fireEvent.input(input, { target: { value: 'New Value' } });

    expect(mockOnSearch).toHaveBeenCalledWith('New Value', 'brand');
  });

  it('resets the search term when the clear button is clicked', () => {
    const mockOnSearch = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={mockOnSearch} />);
    const input = getByTestId('searchbar-input').querySelector('input');
    const clearButton = getByTestId('searchbar-clear');

    fireEvent.input(input, { target: { value: 'New Value' } });
    fireEvent.click(clearButton);

    expect(mockOnSearch).toHaveBeenCalledWith('', 'brand');
  });
});
