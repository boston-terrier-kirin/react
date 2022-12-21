import { useState } from 'react';

import Header from './components/Header';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';

const App = () => {
  const [openFactForm, setOpenFactForm] = useState(false);

  const handleToggle = () => {
    setOpenFactForm((prev) => !prev);
  };

  return (
    <div className="container">
      <Header open={openFactForm} onToggle={handleToggle} />
      {openFactForm && <NewFactForm />}
      <main className="main">
        <aside>
          <CategoryFilter />
        </aside>
        <section>
          <FactList />
        </section>
      </main>
    </div>
  );
};

export default App;
