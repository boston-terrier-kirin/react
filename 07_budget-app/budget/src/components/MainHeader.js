import { Header } from 'semantic-ui-react';

const MainHeader = ({ type = 'h1', title }) => {
  return <Header as={type}>{title}</Header>;
};

export default MainHeader;
