import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const Desc = ({ title, children }: Props) => {
  return (
    <>
      <h1 className="display-6">{title}</h1>
      <div className="p-3 mb-3 bg-success text-white rounded">
        <ul className="mb-0">{children}</ul>
      </div>
    </>
  );
};

export default Desc;
