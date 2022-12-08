import Route from './components/Route';
import Link from './components/Link';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';

const App = () => {
  return (
    <div className="p-5">
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to Dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
