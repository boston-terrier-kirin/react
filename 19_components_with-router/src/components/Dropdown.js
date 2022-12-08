import { useState, useEffect, useRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      // Dropdownが非表示になっているかもしれないのでチェックする。
      if (!rootElement.current) {
        return;
      }

      // Captureフェースでイベントを捕まえて、Dropdown以外のクリックの場合は閉じるようにする。
      if (!rootElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Capture -> Traget -> Bubbling の Captureで捕えれるように、第三引数をtrueにする。
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
    <div ref={rootElement} className="relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {header}{' '}
        <span>
          <BsChevronDown />
        </span>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full border-0 border-r border-l border-b rounded-none rounded-b p-0">
          {optionsToRender}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
