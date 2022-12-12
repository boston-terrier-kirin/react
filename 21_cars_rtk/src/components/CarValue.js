import { useSelector } from 'react-redux';

const CarValue = () => {
  const totalCost = useSelector((state) => {
    const { data, searchTerm } = state.cars;

    // ステートの値をfilterする場合、selectorでやればOK。
    // 合計金額をわざわざreduxで管理する必要はない。
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCars.reduce((acc, car) => (acc += car.cost), 0);
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
