import { BsSuitHeartFill } from 'react-icons/bs';
import style from './style.module.css';

const TagList = ({ tagColorMap, onClickTag }) => {
  const tagsToRender = [];
  for (const tag in tagColorMap) {
    const attr = tagColorMap[tag];

    const color = {
      color: attr.color,
      backgroundColor: attr.backgroundColor,
    };

    tagsToRender.push(
      <li
        key={tag}
        className={`tag ${style.tagListItem}`}
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
        className={`tag ${style.tagListItem} ${style.tagListItemFavorite}`}
        onClick={() => onClickTag('FAVORITE')}
      >
        Favorite <BsSuitHeartFill size={18} className={style.favorite} />
      </li>
      {tagsToRender}
    </ul>
  );
};

export default TagList;
