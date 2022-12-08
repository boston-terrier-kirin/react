import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const optionsToRender = options.map((option) => (
    <div
      className="hover:bg-gray-100 cursor-pointer px-2 py-1"
      onClick={() => handleOptionClick(option)}
      key={option.value}
    >
      {option.label}
    </div>
  ));

  const header = value?.label || 'Select...';

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-2 bg-white w-full"
        onClick={handleClick}
      >
        {header} <BsChevronDown />
      </div>
      {isOpen && (
        <div className="absolute top-full border-r border-l border-b rounded-b bg-white w-full">
          {optionsToRender}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
