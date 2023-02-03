import { render, screen } from '@testing-library/react';
import AccessibleName from './AccessibleName';

test('can select by accesible name', () => {
  render(<AccessibleName />);

  // button名で見つけられる。
  const submitButton = screen.getByRole('button', { name: /submit/i });
  const cancelButton = screen.getByRole('button', { name: /cancel/i });

  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});
