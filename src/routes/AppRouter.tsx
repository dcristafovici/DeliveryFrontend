import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Basic/Header';
import Main from '../components/Basic/Main';
import { RouteTypes } from './types';

const AppRouter = ({ routes }: { routes: RouteTypes[] }) => (
  <Main>
    <Router>
      <Header />
      <Switch>
        <Suspense fallback={<h1>Loading</h1>}>
          {routes.map(({ name, path, exact, component }: RouteTypes) => (
            <Route key={name} path={path} component={component} exact={exact} />
          ))}
        </Suspense>
      </Switch>
    </Router>
  </Main>
);

export default AppRouter;