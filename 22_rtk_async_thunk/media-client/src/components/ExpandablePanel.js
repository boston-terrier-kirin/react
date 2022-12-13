import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="p-2 flex justify-between items-center bg-gray-50">
        <div className="flex items-center justify-between">{header}</div>
        <div
          className="flex-1 flex justify-end cursor-pointer"
          onClick={handleToggle}
        >
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="pt-2 px-4 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
