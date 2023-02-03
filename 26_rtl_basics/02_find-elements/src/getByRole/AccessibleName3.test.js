import { render, screen } from '@testing-library/react';
import AccessibleName3 from './AccessibleName3';

test('find elements based on label', () => {
  render(<AccessibleName3 />);

  // どうしようもない場合は、aria-label。
  const signinButton = screen.getByRole('button', { name: /sign in/i });
  const signoutButton = screen.getByRole('button', { name: /sign out/i });

  expect(signinButton).toBeInTheDocument();
  expect(signoutButton).toBeInTheDocument();
});
