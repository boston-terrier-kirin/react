import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'kirin', email: 'kirin@test.com' },
    { name: 'kuroro', email: 'kuroro@test.com' },
  ];

  const { container } = render(<UserList users={users} />);

  return {
    container,
    users,
  };
}

test('render on row per user', () => {
  const { container } = renderComponent();

  // これで出てきたログのURLに行けば、いろいろ試せる。
  // screen.logTestingPlaygroundURL();

  // tbody -> tr を見つける方法
  {
    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);
  }

  // tbody -> tr を見つける方法
  {
    // eslint-disable-next-line
    const rows = container.querySelectorAll('table tbody tr');
    expect(rows).toHaveLength(2);
  }
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
