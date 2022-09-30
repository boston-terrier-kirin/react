import Page2 from '../components/Page2';
import Page2Detail from '../components/Page2Detail';

export const page2Routes = [
  {
    path: '',
    exact: true,
    children: <Page2 />,
  },
  {
    path: ':id',
    exact: false,
    children: <Page2Detail />,
  },
];
