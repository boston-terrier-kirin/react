import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getBy, queryBy, findBy, finding 0 elements', async () => {
  render(<ColorList />);

  // getBy：elementが存在しない場合、エラーになる。
  // getByはElementが存在することを確かめるのに使う。
  expect(() => {
    screen.getByRole('textbox');
  }).toThrow();

  // queryBy：elementが存在しなくてもエラーにならない。
  // getByはElementが存在しないことを確かめるのに使う。
  expect(screen.queryByRole('textbox')).toEqual(null);

  // findBy：elementが存在しない場合、エラーになる。
  // findByはpromiseを返す。
  let error;
  try {
    await screen.findByRole('textbox');
  } catch (err) {
    error = true;
  }
  expect(error).toEqual(true);
});

test('getBy, queryBy, findBy, finding 1 elements', async () => {
  render(<ColorList />);

  expect(screen.getByRole('list')).toBeInTheDocument();

  // elementが存在するかをチェックする場合は、getByを使えと言われている。
  expect(screen.queryByRole('list')).toBeInTheDocument();

  expect(await screen.findByRole('list')).toBeInTheDocument();
});

test('getBy, queryBy, findBy, finding > 1 elements', async () => {
  render(<ColorList />);

  expect(() => {
    screen.getByRole('listitem');
  }).toThrow();

  expect(() => {
    screen.queryByRole('listitem');
  }).toThrow();

  let error;
  try {
    await screen.findByRole('listitem');
  } catch (err) {
    error = true;
  }
  expect(error).toEqual(true);
});

test('getAllBy, queryAllBy, findAllBy, finding > 1 elements', async () => {
  render(<ColorList />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);

  expect(screen.queryAllByRole('listitem')).toHaveLength(3);

  expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});
