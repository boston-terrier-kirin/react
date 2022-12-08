import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
  const [selection, setSelection] = useState('');

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Greeeeeeeeeeeeeeeeeeeen', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div className="p-5 w-1/4">
      <div>
        Selected: {selection.label} / {selection.value}
      </div>
      <div>
        <Dropdown
          options={options}
          value={selection}
          onChange={(value) => setSelection(value)}
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          possimus excepturi iste harum quae tempora fuga blanditiis expedita
          dolorem soluta corrupti reprehenderit dignissimos! Vero, quas commodi
          explicabo voluptate similique omnis.
        </p>
      </div>
    </div>
  );
};

export default DropdownPage;
