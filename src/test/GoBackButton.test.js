import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GoBackButton from '../components/GoBackButton';

describe('GoBackButton', () => {
  it('renders the button correctly', () => {
    render(<GoBackButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls goBack function when clicked', () => {
    const mockGoBack = jest.fn();
    render(<GoBackButton goBack={mockGoBack} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disableButton is true', () => {
    render(<GoBackButton disableButton={true} />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
