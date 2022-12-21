import FactListItem from './FactListItem';

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votes_interesting: 24,
    votes_mindblowing: 9,
    votes_false: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votes_interesting: 11,
    votes_mindblowing: 2,
    votes_false: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votes_interesting: 8,
    votes_mindblowing: 3,
    votes_false: 1,
    createdIn: 2015,
  },
];

const FactList = () => {
  const factListToRender = initialFacts.map((fact) => (
    <FactListItem key={fact.id} fact={fact} />
  ));

  return <ul>{factListToRender}</ul>;
};

export default FactList;
