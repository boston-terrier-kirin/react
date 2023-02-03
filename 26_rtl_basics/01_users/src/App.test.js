import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('kirin');
  user.click(emailInput);
  user.keyboard('kirin@test.com');
  user.click(button);

  // これで今のDOMがどうなっているか分かる。
  // screen.debug();

  const name = screen.getByRole('cell', { name: 'kirin' });
  const email = screen.getByRole('cell', { name: 'kirin@test.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
