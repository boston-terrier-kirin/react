import { render, screen } from '@testing-library/react';
import AccessibleName2 from './AccessibleName2';

test('make sure two inputs are rendered', () => {
  render(<AccessibleName2 />);

  // idで紐づいていれば、label名で見つけられる。
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const searchInput = screen.getByRole('textbox', { name: /search/i });

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
