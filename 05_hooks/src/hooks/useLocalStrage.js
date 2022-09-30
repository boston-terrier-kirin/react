import { useState } from 'react';

function useLocalStrage(key, initialValue) {
  const [localStrageValue, setLocalStrageValue] = useState(() => {
    return getLocalStrageValue(key, initialValue);
  });

  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(localStrageValue) : value;

    setLocalStrageValue(value);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStrageValue, setValue];
}

function getLocalStrageValue(key, initialValue) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
}

export default useLocalStrage;
