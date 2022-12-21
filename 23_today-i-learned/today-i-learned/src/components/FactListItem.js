const FactListItem = ({ fact }) => {
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
      <span className="tag" style={{ backgroundColor: '#3b82f6' }}>
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>👍 {fact.votes_interesting}</button>
        <button>🤯 {fact.votes_mindblowing}</button>
        <button>⛔️ {fact.votes_false}</button>
      </div>
    </li>
  );
};

export default FactListItem;
