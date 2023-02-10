const Tag = ({ tags }) => {
  const tagsToRender = tags.split(',').map((tag, index) => (
    <span key={index} className="me-1 tag">
      {tag.trim()}
    </span>
  ));

  return <>{tagsToRender}</>;
};

export default Tag;
