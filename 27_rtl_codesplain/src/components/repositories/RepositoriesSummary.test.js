import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays information about the repository', () => {
  const repository = {
    stargazers_count: 10,
    open_issues: 20,
    forks: 30,
    language: 'Javascript',
  };

  render(<RepositoriesSummary repository={repository} />);

  for (const key in repository) {
    const value = repository[key];

    // 複数行になっている場合もあるので、new RegExp(value) にする。
    const elem = screen.getByText(new RegExp(value));
    expect(elem).toBeInTheDocument();
  }
});
