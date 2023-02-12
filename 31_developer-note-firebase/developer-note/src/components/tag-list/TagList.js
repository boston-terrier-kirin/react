import { BsSuitHeartFill } from 'react-icons/bs';
import style from './style.module.css';

const TagList = ({ tagColorMap, activeTag, onClickTag }) => {
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
      </li>
      <li
        className={`tag ${style.tagListItem} ${style.tagListItemFavorite} ${
          activeTag === 'FAVORITE' && style.active
        }`}
        onClick={() => onClickTag('FAVORITE')}
      >
        Favorite <BsSuitHeartFill size={18} className={style.favorite} />
      </li>
      {tagsToRender}
    </ul>
  );
};

export default TagList;
