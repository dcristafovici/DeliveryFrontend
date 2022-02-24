import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../components/Basic/Header';
import Main from '../components/Basic/Main';
import Footer from '../components/Footer';
import { RouteTypes } from './types';

const AppRouter = ({ routes }: { routes: RouteTypes[] }) => (
  <Main>
    <Router>
      <Header />
      <Switch>
        <Suspense fallback={<h1>Loading</h1>}>
          {routes.map(({ name, path, exact, guard: Guard, component }: RouteTypes) => (
            <Guard key={name} path={path} component={component} exact={exact} />
          ))}
        </Suspense>
      </Switch>
      <Footer />
    </Router>
  </Main>
);

export default AppRouter;
