import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const itemsToRedner = items.map((item, index) => {
    const heaherClassName =
      index === expandedIndex ? 'bg-blue-100 text-blue-600 border-b' : '';
    const headerBorder = index === 0 ? '' : 'border-gray-300 border-t';
    const HeaderIcon = index === expandedIndex ? BsChevronUp : BsChevronDown;
    const itemClassName = index === expandedIndex ? 'block' : 'hidden';

    return (
      <div key={item.id}>
        <div
          className={`cursor-pointer px-3 py-2 flex items-center justify-between ${heaherClassName} ${headerBorder}`}
          onClick={() => handleClick(index)}
        >
          {item.label} <HeaderIcon />
        </div>
        <div className={`px-5 py-2 show-accordion-item ${itemClassName}`}>
          {item.content}
        </div>
      </div>
    );
  });

  return (
    <div className="border border-gray-300 rounded-md">{itemsToRedner}</div>
  );
};

export default Accordion;
