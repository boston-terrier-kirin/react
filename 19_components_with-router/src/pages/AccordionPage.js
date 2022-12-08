import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 'kjoier',
      label: 'Can I use React on a Project?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta maiores quam tempora dolor iste, necessitatibus reprehenderit in, repellendus perspiciatis et molestias, ad incidunt placeat nostrum quas explicabo fugiat mollitia! Debitis?',
    },
    {
      id: 'rerekou',
      label: 'Can I use Javascript on a Project?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla ipsa distinctio, officiis ipsum laborum asperiores omnis impedit, molestiae exercitationem laboriosam facere deleniti perspiciatis minus et debitis quaerat. Sequi, architecto quam assumenda tempora suscipit exercitationem necessitatibus. Fuga suscipit veniam aliquid enim distinctio, rem at cumque! Quae, sapiente atque temporibus vitae odio recusandae aspernatur autem maiores nulla ab cumque mollitia ipsum itaque, ut tempore! Quisquam ipsum sunt voluptatum impedit unde animi sint accusamus natus omnis doloremque?',
    },
    {
      id: 'ereredu',
      label: 'Can I use CSS on a Project?',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias vel maxime adipisci molestiae! Suscipit aut quas aliquid libero. Vitae, fugit hic repudiandae alias esse obcaecati mollitia, consequuntur atque cum porro quasi! Minima sunt eveniet harum incidunt quis libero, nisi facere velit praesentium dolores consequatur quod iste, modi unde nihil hic!',
    },
  ];
  return (
    <div className="p-5 w-1/4">
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
