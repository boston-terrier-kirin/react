import EntryLine from './EntryLine';

const EntryLines = ({ entries }) => {
  const entresToRender = entries.map((entry) => (
    <EntryLine key={entry.id} entry={entry} />
  ));

  return <>{entresToRender}</>;
};

export default EntryLines;
