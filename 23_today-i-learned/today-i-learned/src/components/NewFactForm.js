import { useState } from 'react';

const NewFactForm = ({ categories, onSubmit }) => {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  const categoryOptionsToRender = categories.map((category) => (
    <option key={category.value} value={category.value}>
      {category.name}
    </option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!category) {
      return;
    }

    const fact = {
      text,
      source,
      category,
      votes_interesting: 0,
      votes_mindblowing: 0,
      votes_false: 0,
    };

    onSubmit(fact);

    setText('');
    setSource('');
    setCategory('');
  };

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        type="text"
        placeholder="Share a fact with the world..."
      />
      <span>{text.length} / 200</span>
      <input
        value={source}
        onChange={(event) => setSource(event.target.value)}
        type="text"
        placeholder="Truthworthy source..."
      />
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Choose Category:</option>
        {categoryOptionsToRender}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
};

export default NewFactForm;
