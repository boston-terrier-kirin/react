import Accordion from './components/Accordion';

const App = () => {
  const items = [
    {
      id: 'kjoier',
      label: 'Can I use React on a Project?',
      content: 'You can use React on any project you want.',
    },
    {
      id: 'rerekou',
      label: 'Can I use Javascript on a Project?',
      content: 'You can use Javascript on any project you want.',
    },
    {
      id: 'ereredu',
      label: 'Can I use CSS on a Project?',
      content: 'You can use CSS on any project you want.',
    },
  ];
  return (
    <div className="p-5 w-1/4">
      <Accordion items={items} />
    </div>
  );
};

export default App;
