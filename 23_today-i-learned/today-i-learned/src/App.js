import { useState, useEffect } from 'react';
import { supabase } from './api/supabase';

import Header from './components/Header';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';
import Loader from './components/Loader';

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
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    const getFacts = async () => {
      setLoading(true);

      let query = supabase
        .from('facts')
        .select('*')
        .order('created_at', { ascending: false });
      if (currentCategory !== 'all') {
        query.eq('category', currentCategory);
      }

      const { data } = await query;
      setFacts(data);

      setLoading(false);
    };

    getFacts();
  }, [currentCategory]);

  const handleToggle = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = async (fact) => {
    const { data } = await supabase.from('facts').insert([fact]).select('*');
    setFacts((prev) => [...data, ...prev]);

    handleToggle();
  };

  const handleFilter = (category) => {
    setCurrentCategory(category);
  };

  const handleUpdate = async (column, id, votes) => {
    const { data } = await supabase
      .from('facts')
      .update({ [column]: votes })
      .eq('id', id)
      .select('*');

    const updatedFact = data[0];
    const updatedFacts = facts.map((fact) => {
      if (fact.id === updatedFact.id) {
        return updatedFact;
      }
      return fact;
    });

    setFacts(updatedFacts);
  };

  return (
    <div className="container">
      <Header showForm={showForm} onToggle={handleToggle} />
      {showForm && (
        <NewFactForm categories={CATEGORIES} onSubmit={handleSubmit} />
      )}
      <main className="main">
        <aside>
          <CategoryFilter
            categories={CATEGORIES}
            onClickCategory={handleFilter}
          />
        </aside>
        <section>
          {loading ? (
            <Loader />
          ) : (
            <FactList
              facts={facts}
              categories={CATEGORIES}
              onVoteClick={handleUpdate}
            />
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
