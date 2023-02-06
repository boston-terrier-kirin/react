import { useDispatch } from 'react-redux';
import { moviesActions } from '../store/moviesSlice';

const NewMovie = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(moviesActions.addMovie({ id: 3, title: 'Batman' }))
        }
      >
        Add New Movie
      </button>
    </div>
  );
};

export default NewMovie;
