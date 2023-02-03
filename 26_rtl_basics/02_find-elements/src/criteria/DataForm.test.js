import { render, screen } from '@testing-library/react';
import DataForm from './DataForm';

test('selecting different elements', () => {
  render(<DataForm />);

  const elements = [
    screen.getByText(/enter/i),

    screen.getByTestId('image wrapper'),
    screen.getByAltText('data'),

    screen.getByLabelText(/email/i),
    screen.getByDisplayValue('asdf@asdf.com'),

    screen.getByPlaceholderText('Red'),

    screen.getByRole('button'),
    screen.getByTitle(/ready to submit/i),
  ];

  for (const element of elements) {
    expect(element).toBeInTheDocument();
  }
});
