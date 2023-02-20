import { ChangeEvent, FormEvent, useState } from 'react';

type ShoppingItemFormProps = {
  onAddItem: (product: string, qty: number) => void;
};

const ShoppingItemForm = ({
  onAddItem,
}: ShoppingItemFormProps): JSX.Element => {
  const [product, setProduct] = useState<string>('');
  const [qty, setQty] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (qty) {
      onAddItem(product, +qty);
    }
  };

  const handleProductInput = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };

  const handleQtyInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQty(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product}
        onChange={handleProductInput}
      />
      <input
        type="number"
        placeholder="Qty"
        value={qty}
        onChange={handleQtyInput}
      />
      <button>Add Item</button>
    </form>
  );
};

export default ShoppingItemForm;
