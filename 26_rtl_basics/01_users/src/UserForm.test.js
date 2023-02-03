import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('shows two input and button', async () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('calls onUserAdd when the form is submitted', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  user.click(nameInput);
  user.keyboard('kirin');

  user.click(emailInput);
  user.keyboard('kirin@test.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: 'kirin',
    email: 'kirin@test.com',
  });
});

test('empties the two inputs when is submitted', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('kirin');
  user.click(emailInput);
  user.keyboard('kirin@test.com');
  user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
