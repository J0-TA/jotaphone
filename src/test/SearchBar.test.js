import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  it('renders without crashing', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByTestId('searchbar-container')).toBeInTheDocument();
  });

  it('updates the search term state when typing', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'New Value' } });

    expect(mockOnSearch).toHaveBeenCalledWith('New Value', 'brand');
  });

  it('resets the search term when the clear button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByRole('textbox');
    const clearButton = screen.getByTestId('searchbar-clear');

    fireEvent.input(input, { target: { value: 'New Value' } });
    fireEvent.click(clearButton);

    expect(mockOnSearch).toHaveBeenCalledWith('', 'brand');
  });
});
