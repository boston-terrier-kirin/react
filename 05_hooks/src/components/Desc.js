const Desc = ({ title, children }) => {
  return (
    <>
      <h1 className="display-6">{title}</h1>
      <div className="p-3 mb-3 rounded" style={{ backgroundColor: '#f3f4f6' }}>
        {children}
      </div>
    </>
  );
};

export default Desc;
