import { screen, render, within } from '@testing-library/react';
import FormData from './FormData';
import '../custome-matcher/custome-matcher';

// https://jestjs.io/docs/mock-function-api
// https://github.com/testing-library/jest-dom

test('the form displays two buttons', () => {
  render(<FormData />);

  // formにはデフォルトのロールがない。
  const form = screen.getByRole('form');

  // withinは探す範囲を絞る場合に使う。
  const buttons = within(form).getAllByRole('button');

  expect(buttons).toHaveLength(2);
});

test('the form displays two buttons (with custome matcher)', () => {
  render(<FormData />);

  const form = screen.getByRole('form');

  // カスタム
  expect(form).toContainRole('button', 2);
});
