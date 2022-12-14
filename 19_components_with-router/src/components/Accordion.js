import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // 初回レンダリングじにアニメーションが走ってしまうので、1回でもアコーディオンを開いた後にアニメーションが走るようにする。
  const [expandedEvenOnce, setExpandedEvenOnce] = useState(false);

  const handleClick = (index) => {
    setExpandedEvenOnce(true);
    setExpandedIndex((prev) => {
      if (prev === index) {
        return -1;
      }
      return index;
    });
    // ↑より正確にステート更新するためには、こうする。
    // if (expandedIndex === index {
    //   setExpandedIndex(-1);
    // } else {
    //   setExpandedIndex(index);
    // }
  };

  const itemsToRedner = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const firstItem = index === 0;

    const heaherClassName = isExpanded
      ? 'bg-blue-100 text-blue-600 border-b'
      : '';
    const headerIcon = isExpanded ? (
      <BsChevronUp className={expandedEvenOnce && 'rotate-icon-open'} />
    ) : (
      <BsChevronDown className={expandedEvenOnce && 'rotate-icon-close'} />
    );
    const headerBorder = firstItem ? '' : 'border-gray-300 border-t';

    return (
      <div key={item.id}>
        <div
          className={`cursor-pointer px-3 py-2 flex items-center justify-between ${heaherClassName} ${headerBorder}`}
          onClick={() => handleClick(index)}
        >
          <span>{item.label}</span>
          <span>{headerIcon}</span>
        </div>
        {isExpanded && (
          <div className="px-5 py-2 bg-neutral-50 show-accordion-item block">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="border border-gray-300 overflow-hidden rounded-md">
      {itemsToRedner}
    </div>
  );
};

export default Accordion;
