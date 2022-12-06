import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const DescItem = ({ children }: Props) => {
  return (
    <>
      <div>
        <i className="bi bi-check-circle"></i> {children}
      </div>
    </>
  );
};

export default DescItem;
