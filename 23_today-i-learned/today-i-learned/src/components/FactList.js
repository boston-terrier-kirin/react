import FactListItem from './FactListItem';

const FactList = ({ facts, categories }) => {
  const factListToRender = facts.map((fact) => (
    <FactListItem key={fact.id} fact={fact} categories={categories} />
  ));

  return <ul>{factListToRender}</ul>;
};

export default FactList;
