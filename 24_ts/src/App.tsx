import './App.css';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import HeadingSub from './components/HeadingSub';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first: 'John',
    last: 'Doe',
  };

  const nameList = [
    {
      first: 'John',
      last: 'Doe',
    },
    {
      first: 'Jane',
      last: 'Doe',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div>
      <Heading>
        <HeadingSub>Hello World</HeadingSub>
      </Heading>
      <Greet name="Kohei" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />

      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
      <Button handleClick={(event) => console.log('Clicked', event)} />
    </div>
  );
}

export default App;
