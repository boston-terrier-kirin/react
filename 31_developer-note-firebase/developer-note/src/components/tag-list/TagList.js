import style from './style.module.css';

const TagList = ({
  tagColorMap,
  activeTag,
  allCnt,
  favoritesCnt,
  onClickTag,
}) => {
  const tagsToRender = [];
  for (const tag in tagColorMap) {
    const attr = tagColorMap[tag];

    const color = {
      color: attr.color,
      backgroundColor: attr.backgroundColor,
      border: attr.border,
    };

    tagsToRender.push(
      <li
        key={tag}
        className={`tag ${style.tagListItem} ${
          tag === activeTag && style.active
        }`}
        onClick={() => onClickTag(tag)}
        style={color}
      >
        {tag}
        <span className={style.tagListItemCnt}>{attr.cnt}</span>
      </li>
    );
  }

  return (
    <ul className={style.tagList}>
      <li
        className={`tag ${style.tagListItem} ${style.tagListItemAll}`}
        onClick={() => onClickTag('')}
      >
        ALL
        <span className={`${style.tagListItemCnt} ${style.all}`}>{allCnt}</span>
      </li>

      <li
        className={`tag ${style.tagListItem} ${style.tagListItemFavorite} ${
          activeTag === 'FAVORITE' && style.active
        }`}
        onClick={() => onClickTag('FAVORITE')}
      >
        Favorite
        <span className={`${style.tagListItemCnt} ${style.favorite}`}>
          {favoritesCnt}
        </span>
      </li>
      {tagsToRender}
    </ul>
  );
};

export default TagList;
