import Link from './Link';

const Sidebar = () => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
  ];

  const linksToRender = links.map((link) => {
    return (
      <Link
        key={link.path}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-2 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {linksToRender}
    </div>
  );
};

export default Sidebar;
