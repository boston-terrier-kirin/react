import FactListItem from './FactListItem';

const FactList = ({ facts, categories, onVoteClick }) => {
  if (facts.length === 0) {
    return <p className="message">No facts for this category yet.</p>;
  }

  const factListToRender = facts.map((fact) => (
    <FactListItem
      key={fact.id}
      fact={fact}
      categories={categories}
      onVoteClick={onVoteClick}
    />
  ));

  return <ul>{factListToRender}</ul>;
};

export default FactList;
