import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../component/Home/Basic/Header';
import Main from '../component/Home/Basic/Main/Main';
import { RouteTypes } from './types';

const AppRouter = ({ routes }: { routes: RouteTypes[] }) => (
  <Main>
    <Header />
    <Switch>
      <Suspense fallback={<h1>Loading</h1>}>
        {routes.map(({ name, path, exact, component }: RouteTypes) => (
          <Route key={name} path={path} component={component} exact={exact} />
        ))}
      </Suspense>
    </Switch>
  </Main>
);

export default AppRouter;
