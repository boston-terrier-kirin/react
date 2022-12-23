const FactListItem = ({ fact, categories, onVoteClick }) => {
  const backgroundColor = categories.find(
    (cat) => cat.value === fact.category
  ).color;

  const handleClick = (column, votes) => {
    onVoteClick(column, fact.id, votes);
  };

  return (
    <li className="fact">
      <p className="fact-text">
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span className="tag" style={{ backgroundColor }}>
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() =>
            handleClick('votes_interesting', fact.votes_interesting + 1)
          }
        >
          👍 {fact.votes_interesting}
        </button>
        <button
          onClick={() =>
            handleClick('votes_mindblowing', fact.votes_mindblowing + 1)
          }
        >
          🤯 {fact.votes_mindblowing}
        </button>
        <button
          onClick={() => handleClick('votes_false', fact.votes_false + 1)}
        >
          ⛔️ {fact.votes_false}
        </button>
      </div>
    </li>
  );
};

export default FactListItem;
