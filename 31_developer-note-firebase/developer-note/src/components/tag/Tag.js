const Tag = ({ tags, tagColorMap }) => {
  const tagsToRender = tags.split(',').map((tag, index) => {
    const attr = tagColorMap[tag];

    const color = {
      color: attr?.color,
      backgroundColor: attr?.backgroundColor,
      border: attr.border,
    };

    return (
      <span key={index} className="me-1 tag" style={color}>
        {tag.trim()}
      </span>
    );
  });

  return <>{tagsToRender}</>;
};

export default Tag;
