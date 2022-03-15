import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Basic/Header';
import Main from '../components/Basic/Main';
import Footer from '../components/Footer';
import { RouteTypes } from './types';

const AppRouter = ({ routes }: { routes: RouteTypes[] }) => (
  <Main>
    <Router>
      <Header />
      <Routes>
        {routes.map(({ name, path, guard: Guard, component: Component }: RouteTypes) => (
          <Route key={name} path={path} element={Guard(Component)} />
        ))}
      </Routes>
      <Footer />
    </Router>
  </Main>
);

export default AppRouter;
