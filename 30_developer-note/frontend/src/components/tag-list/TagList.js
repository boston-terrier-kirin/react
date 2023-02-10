import style from './style.module.css';

const TagList = ({ noteList, onClickTag }) => {
  const map = new Map();

  for (const note of noteList) {
    note.tags.split(',').forEach((tag) => {
      const cnt = map.get(tag) || 0;
      map.set(tag, cnt + 1);
    });
  }

  const tagRank = [];
  for (const m of map) {
    tagRank.push(m);
  }

  tagRank.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    return 1;
  });

  const tagsToRender = [];
  tagRank.forEach(([tag, cnt]) => {
    tagsToRender.push(
      <li
        key={tag}
        className={`tag ${style.tagListItem}`}
        onClick={() => onClickTag(tag)}
      >
        {tag}
        <span className={style.tagListItemCnt}>{cnt}</span>
      </li>
    );
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
