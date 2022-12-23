const CategoryFilter = ({ categories, onClickCategory }) => {
  const handleFilter = (category) => {
    onClickCategory(category);
  };

  const categoryFilterToRender = categories.map((category) => (
    <li key={category.value}>
      <button
        onClick={() => handleFilter(category.value)}
        className="btn btn-category"
        style={{ backgroundColor: category.color }}
      >
        {category.name}
      </button>
    </li>
  ));

  return (
    <ul className="category">
      <li>
        <button
          onClick={() => handleFilter('all')}
          className="btn btn-all-categories"
        >
          All
        </button>
      </li>
      {categoryFilterToRender}
    </ul>
  );
};

export default CategoryFilter;
