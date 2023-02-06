import { useSelector } from 'react-redux';

const Movies = () => {
  const movies = useSelector((state) => state.movies.list);

  const moviesToRender = movies.map((movie) => (
    <li key={movie.id}>{movie.title}</li>
  ));

  return <ul>{moviesToRender}</ul>;
};

export default Movies;
