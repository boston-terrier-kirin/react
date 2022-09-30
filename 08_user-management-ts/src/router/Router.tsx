import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderLayout from '../components/tempalate/HeaderLyout';
import Login from '../components/pages/Login';
import Page404 from '../components/pages/Page404';
import { homeRoutes } from './HomeRoutes';

const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={(props) => {
          const url = props.match.url;
          return (
            <Switch>
              {homeRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    <HeaderLayout>{route.children}</HeaderLayout>
                  </Route>
                );
              })}
            </Switch>
          );
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

export default Router;
