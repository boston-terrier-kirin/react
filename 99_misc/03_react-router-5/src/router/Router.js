import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {
        // ここにexactがあると、/page1/detailA の時にexactじゃなくなるので、何も表示されなくなる。
        // <Route exact path="/page1">
      }
      <Route
        path="/page1"
        render={(props) => {
          console.log(props.match.url);
          const url = props.match.url;

          return (
            <Switch>
              {page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}/${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          );
        }}
      />
      <Route
        path="/page2"
        render={(props) => {
          console.log(props.match.url);
          const url = props.match.url;

          return (
            <Switch>
              {page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}/${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          );
        }}
      />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
