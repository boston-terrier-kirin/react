const CategoryFilter = ({ categories }) => {
  const categoryFilterToRender = categories.map((category) => (
    <li key={category.value}>
      <button
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
        <button className="btn btn-all-categories">All</button>
      </li>
      {categoryFilterToRender}
    </ul>
  );
};

export default CategoryFilter;
