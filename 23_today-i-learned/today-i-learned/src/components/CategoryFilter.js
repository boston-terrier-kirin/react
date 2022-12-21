const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const CategoryFilter = () => {
  const categoryFilterToRender = CATEGORIES.map((category) => (
    <li key={category.name}>
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
