import { useState, useEffect } from 'react';

function fakeFetchColors() {
  return Promise.resolve(['red', 'green', 'blue']);
}

const LoadableColorList = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const data = await fakeFetchColors();
      setColors(data);
    };

    fetchColors();
  }, []);

  const colorsToRender = colors.map((color) => <li key={color}>{color}</li>);

  return <ul>{colorsToRender}</ul>;
};

export default LoadableColorList;
