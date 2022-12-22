import { useState, useEffect } from 'react';

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

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votes_interesting: 24,
    votes_mindblowing: 9,
    votes_false: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votes_interesting: 11,
    votes_mindblowing: 2,
    votes_false: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votes_interesting: 8,
    votes_mindblowing: 3,
    votes_false: 1,
    createdIn: 2015,
  },
];

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setFacts(initialFacts);
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
