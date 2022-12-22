const Header = ({ showForm, onToggle }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="logo" />
        <h1>Today I Learned</h1>
      </div>
      <button onClick={onToggle} className="btn btn-large">
        {showForm ? 'Close' : 'Share a fact'}
      </button>
    </header>
  );
};

export default Header;
