import { useState, useEffect } from 'react';
import { supabase } from './api/supabase';

import Header from './components/Header';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';

const CATEGORIES = [
  { name: 'Technology', value: 'technology', color: '#3b82f6' },
  { name: 'Science', value: 'science', color: '#16a34a' },
  { name: 'Finance', value: 'finance', color: '#ef4444' },
  { name: 'Society', value: 'society', color: '#eab308' },
  { name: 'Entertainment', value: 'entertainment', color: '#db2777' },
  { name: 'Health', value: 'health', color: '#14b8a6' },
  { name: 'History', value: 'history', color: '#f97316' },
  { name: 'News', value: 'news', color: '#8b5cf6' },
];

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const getFacts = async () => {
      const { data } = await supabase.from('facts').select('*');
      setFacts(data);
    };

    getFacts();
  }, []);

  const handleToggle = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = (fact) => {
    setFacts((prev) => [fact, ...prev]);
    handleToggle();
  };

  return (
    <div className="container">
      <Header showForm={showForm} onToggle={handleToggle} />
      {showForm && (
        <NewFactForm categories={CATEGORIES} onSubmit={handleSubmit} />
      )}
      <main className="main">
        <aside>
          <CategoryFilter categories={CATEGORIES} />
        </aside>
        <section>
          <FactList facts={facts} categories={CATEGORIES} />
        </section>
      </main>
    </div>
  );
};

export default App;
