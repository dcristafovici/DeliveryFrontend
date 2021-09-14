import { lazy } from 'react';
import { RoutesDetailsTypes, RouteTypes } from './types';

export const RoutesDetailes: RoutesDetailsTypes = {
  HOME_PAGE: {
    name: 'Home',
    path: '/',
    exact: true,
  },
};

const routes: RouteTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
    component: lazy(() => import('../component/Home/')),
  },
];

export default routes;
