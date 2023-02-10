import style from './style.module.css';

const TagList = ({ noteList, onClickTag }) => {
  const allTagSet = new Set();
  noteList.forEach((note) => {
    note.tags.split(',').forEach((tag) => allTagSet.add(tag));
  });

  const tagsToRender = [];
  allTagSet.forEach((tag) => {
    if (tag) {
      tagsToRender.push(
        <li
          key={tag}
          className={`tag ${style.tagListItem}`}
          onClick={() => onClickTag(tag)}
        >
          {tag}
        </li>
      );
    }
  });

  return (
    <ul className={style.tagList}>
      <li className={`tag ${style.tagListItem}`} onClick={() => onClickTag('')}>
        ALL
      </li>
      {tagsToRender}
    </ul>
  );
};

export default TagList;
