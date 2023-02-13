# getByRole で指定するロール名

| HTML           | getByRole   |
| -------------- | ----------- |
| a              | link        |
| button         | button      |
| footer         | contentinfo |
| h1             | heading     |
| header         | banner      |
| img            | img         |
| input checkbox | checkbox    |
| input number   | spinbutton  |
| input radio    | radio       |
| input text     | textbox     |
| ul             | list        |
| li             | listitem    |

#### [RoleExample.js](https://github.com/boston-terrier-kirin/react/blob/main/26_rtl_basics/02_find-elements/src/getByRole/RoleExample.js)

```javascript
import React from 'react';

const RoleExample = () => {
  return (
    <div>
      <a href="">Link</a>
      <button>button</button>
      <footer>contentinfo</footer>
      <h1>heading</h1>
      <header>banner</header>
      <img src="" alt="image" /> img
      <input type="checkbox" /> checkbox
      <input type="number" /> spinbutton
      <input type="radio" /> radio
      <input type="text" /> textbox
      <ul>Listgroup</ul> list
      <li>Listitem</li> listitem
    </div>
  );
};

export default RoleExample;
```

#### [RoleExample.test.js](https://github.com/boston-terrier-kirin/react/blob/main/26_rtl_basics/02_find-elements/src/getByRole/RoleExample.test.js)

```javascript
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
```
