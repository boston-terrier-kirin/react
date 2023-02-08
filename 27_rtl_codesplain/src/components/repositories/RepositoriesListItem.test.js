import { screen, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

// Warning: An update to FileIcon inside a test was not wrapped in act(...).
// When testing, code that causes React state updates should be wrapped into act(...):
// act(() => {
//   /* fire events that update state */
// });
//   /* assert on the output */

// ★回避策１
// FileIconでPromiseを待っているため、RTLがact()しろと警告をだす。
// FileIconをmockすることで回避する。
// jest.mock('../tree/FileIcon', () => {
//   return () => {
//     return 'File Icon Component';
//   };
// });

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'Javascript',
    description: 'A js library',
    owner: { login: 'facebook' },
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
}

test('shows a link to the github homepage for this repository', async () => {
  const { repository } = renderComponent();

  // ★回避策２
  // findByRoleは、Promiseをまってくれるので、imgが表示されるまでまってくれる。
  await screen.findByRole('img', { name: 'Javascript' });

  // ★回避策３
  // await act(async () => {
  //   await pause();
  // });

  const link = screen.getByRole('link', {
    name: /github repository/i,
  });

  expect(link).toHaveAttribute('href', repository.html_url);
});

// ★回避策３
// const pause = () => new Promise((resolve) => setTimeout(resolve, 100));

test('shows a fileicon with the appropriate icon', async () => {
  const { repository } = renderComponent();

  const icon = await screen.findByRole('img', { name: 'Javascript' });

  expect(icon).toHaveClass('js-icon');
});

test('shows a link to the code editor page', async () => {
  const { repository } = renderComponent();

  await screen.findByRole('img', { name: 'Javascript' });

  const link = await screen.findByRole('link', {
    name: new RegExp(repository.owner.login),
  });

  expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`);
});
