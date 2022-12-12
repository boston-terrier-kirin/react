import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    const { data, searchTerm } = state.cars;

    // POINT：Derived state
    // ステートの値をfilterする場合、selectorでやればOK。
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const { name } = useSelector((state) => state.form);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const carsToRender = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{carsToRender}</div>;
};

export default CarList;
