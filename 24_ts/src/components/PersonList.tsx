type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.names.map((name) => (
        <li key={name.first}>
          {name.first} {name.last}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
