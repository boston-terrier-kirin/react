import { render, screen } from '@testing-library/react';
import LoadableColorList from './LoadableColorList';

test('findBy, finding 0 elements', async () => {
  render(<LoadableColorList />);

  // getByはawaitできないので、liを見つけられない。
  expect(() => {
    screen.getAllByRole('listitem');
  }).toThrow();

  // findByなら見つけられる。
  expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});
