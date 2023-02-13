import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

async function renderComponent() {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    </SWRConfig>
  );

  // Act warning がでるので、linkが表示されるのを、findAllByRole で待つようにする。
  // Warning: An update to AuthButtons inside a test was not wrapped in act(...).
  // When testing, code that causes React state updates should be wrapped into act(...):
  await screen.findAllByRole('link');
}

describe('when user is not signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        console.log('NOT loggein request');
        return { user: null };
      },
    },
  ]);

  test('sigin and signup are visible', async () => {
    console.log('STRAT TEST 1');
    await renderComponent();

    const signIn = screen.getByRole('link', {
      name: /sign in/i,
    });

    const signUp = screen.getByRole('link', {
      name: /sign up/i,
    });

    expect(signIn).toBeInTheDocument();
    expect(signIn).toHaveAttribute('href', '/signin');

    expect(signUp).toBeInTheDocument();
    expect(signUp).toHaveAttribute('href', '/signup');
  });

  test('sigout is not visible', async () => {
    await renderComponent();

    const signOut = screen.queryByRole('link', {
      name: /sign out/i,
    });

    expect(signOut).not.toBeInTheDocument();
  });
});

describe('when user is signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        console.log('★loggein request');
        return { user: { id: 3, email: 'test@test.com' } };
      },
    },
  ]);

  test('sigin and signup are not visible', async () => {
    console.log('STRAT TEST 2');
    await renderComponent();

    const signIn = screen.queryByRole('link', {
      name: /sign in/i,
    });

    const signUp = screen.queryByRole('link', {
      name: /sign up/i,
    });

    expect(signIn).not.toBeInTheDocument();
    expect(signUp).not.toBeInTheDocument();
  });

  test('sigout is visible', async () => {
    await renderComponent();

    const signOut = screen.getByRole('link', {
      name: /sign out/i,
    });

    expect(signOut).toBeInTheDocument();
    expect(signOut).toHaveAttribute('href', '/signout');
  });
});
