import { render, screen } from '@testing-library/react';
import RoleExample from './RoleExample';

test('can find element by role', () => {
  render(<RoleExample />);

  const roles = [
    'link',
    'button',
    'contentinfo', // footer
    'heading', // h1
    'banner', // header
    'img',
    'checkbox',
    'spinbutton', // input type="number"
    'radio',
    'textbox', // input type="text"
    'listitem', // li
    'list', // ul
  ];

  for (const role of roles) {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  }
});
