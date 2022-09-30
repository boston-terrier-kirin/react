import EntryLine from './EntryLine';

const EntryLines = ({ entries, onEditEntry, onDeleteEntry }) => {
  const entresToRender = entries.map((entry) => (
    <EntryLine
      key={entry.id}
      entry={entry}
      onEditEntry={onEditEntry}
      onDeleteEntry={onDeleteEntry}
    />
  ));

  return <>{entresToRender}</>;
};

export default EntryLines;
