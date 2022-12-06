import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const Desc = ({ title, children }: Props) => {
  return (
    <>
      <h1 className="display-6">{title}</h1>
      <div className="p-3 mb-3 rounded" style={{ backgroundColor: '#f3f4f6' }}>
        {React.Children.toArray(children)?.map((child) => (
          <div>
            <i className="bi bi-check-circle"></i> {child}
          </div>
        ))}
      </div>
    </>
  );
};

export default Desc;
