import SearchBar from './components/SearchBar';
import searhImages from './api';

const App = () => {
  const handleSubmit = async (term) => {
    const images = await searhImages(term);
    console.log(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
