import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

test('shows a link to the github homepage for this repository', () => {
  renderComponent();

  // screen.debug();
});

function renderComponent() {
  const repository = {
    full_name: 'kirin/react-testing',
    language: 'Javascript',
    description: 'react-testing library for dogs',
    owner: 'kirin',
    name: 'react-testing',
    html_url: 'https://github.com/boston-terrier-kirin/react',
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}
