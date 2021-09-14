import { lazy } from 'react';
import { RoutesDetailsTypes, RouteTypes } from './types';

export const RoutesDetailes: RoutesDetailsTypes = {
  HOME_PAGE: {
    name: 'Home',
    path: '/',
    exact: true,
  },
  RESTAURANT: {
    name: 'Restaurant',
    path: '/restaurant/:slug',
  },
};

const routes: RouteTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
    exact: RoutesDetailes.HOME_PAGE.exact,
    component: lazy(() => import('../components/Home')),
  },
  {
    name: RoutesDetailes.RESTAURANT.name,
    path: RoutesDetailes.RESTAURANT.path,
    component: lazy(() => import('../components/Restaurant')),
  },
];

export default routes;
