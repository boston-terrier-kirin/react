import { FC, memo, ReactNode } from 'react';
import Header from '../orgnisms/layout/Header';

type HeaderLayoutProps = {
  children: ReactNode;
};

const HeaderLayout: FC<HeaderLayoutProps> = memo((props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
});

export default HeaderLayout;
