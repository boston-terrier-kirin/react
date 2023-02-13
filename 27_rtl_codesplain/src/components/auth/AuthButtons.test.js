import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

function renderComponent() {
  render(
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );
}

describe('when user is not signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => ({
        user: null,
      }),
    },
  ]);

  test('sigin and signup are visible', async () => {
    renderComponent();

    // Act warning がでるので、linkが表示されるのを、findAllByRole で待つようにする。
    // Warning: An update to AuthButtons inside a test was not wrapped in act(...).
    // When testing, code that causes React state updates should be wrapped into act(...):
    await screen.findAllByRole('link');
  });

  test('sigout is not visible', async () => {
    renderComponent();
    await screen.findAllByRole('link');
  });
});

describe('when user is signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => ({
        user: { id: 3, email: 'test@test.com' },
      }),
    },
  ]);

  test('sigin and signup are not visible', async () => {
    renderComponent();
    await screen.findAllByRole('link');
  });

  test('sigout is visible', async () => {
    renderComponent();
    await screen.findAllByRole('link');
  });
});
