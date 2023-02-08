import { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import style from './style.module.css';

const TextCard = ({ title, subtitle, content, onClick, onClickTrash }) => {
  const [isCardHovered, setCardHovered] = useState(false);
  const [isTrashHovered, setTrashHovered] = useState(false);

  const handleClickTrash = (event) => {
    onClickTrash();
    event.stopPropagation();
  };

  return (
    <div
      className={`card ${style.container}`}
      onClick={onClick}
      style={{ borderColor: isCardHovered ? '#0d6efd' : 'transparent' }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="card-body">
        <div className={style.title_row}>
          <h5 className="card-title">{title}</h5>
          <Trash
            size={20}
            onClick={handleClickTrash}
            style={{ color: isTrashHovered ? '#ff7373' : '#b8b8b8' }}
            onMouseEnter={() => setTrashHovered(true)}
            onMouseLeave={() => setTrashHovered(false)}
          />
        </div>
        <h5 className={`card-subtitle mb-2 text-muted ${style.subtitle}`}>
          {subtitle}
        </h5>
        <pre className={`card-text ${style.text_content}`}>{content}</pre>
      </div>
    </div>
  );
};

export default TextCard;
