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
  ACCOUNT: {
    name: 'Account',
    path: '/account',
  },
};

const routes: RouteTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
    exact: RoutesDetailes.HOME_PAGE.exact,
    component: lazy(() => import('../pages/Home')),
  },
  {
    name: RoutesDetailes.RESTAURANT.name,
    path: RoutesDetailes.RESTAURANT.path,
    component: lazy(() => import('../pages/Restaurant')),
  },
  {
    name: RoutesDetailes.ACCOUNT.name,
    path: RoutesDetailes.ACCOUNT.path,
    component: lazy(() => import('../pages/Account')),
  },
];

export default routes;
