import Item from '../models/item';

type ShoppingListProps = {
  items: Item[];
};

const ShoppingList = ({ items }: ShoppingListProps): JSX.Element => {
  const itemsToRender = items.map((item) => (
    <li key={item.id}>
      {item.product} - {item.qty}
    </li>
  ));

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>{itemsToRender}</ul>
    </div>
  );
};

export default ShoppingList;
