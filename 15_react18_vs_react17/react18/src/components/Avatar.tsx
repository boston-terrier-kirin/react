import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: (assignee: string) => void;
  selected: string;
};

const Avatar = ({ children, onClick, selected }: Props) => {
  const selectedStyles =
    children === selected
      ? {
          backgroundColor: 'royalblue',
          color: '#fff',
          border: '0',
        }
      : {};

  return (
    <div
      onClick={() => onClick(`${children}`)}
      style={{
        width: '30px',
        height: '30px',
        border: '1px solid gray',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '30px',
        userSelect: 'none',
        marginLeft: '2px',
        marginRight: '2px',
        ...selectedStyles,
      }}
    >
      {children}
    </div>
  );
};

export default Avatar;
