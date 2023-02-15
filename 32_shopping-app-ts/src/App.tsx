import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ShoppingItemForm from './components/ShoppingItemForm';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
// React.FCは、使わないらしい。

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, qty: number) => {
    const item: Item = {
      id: uuid(),
      product,
      qty,
    };

    setItems((prev) => [...prev, item]);
  };

  return (
    <div>
      <ShoppingItemForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
