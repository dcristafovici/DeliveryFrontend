import { lazy } from 'react';
import { DefaultGuard, TokenGuard, UserGuard } from './Guards';
import { RoutesDetailsTypes, RouteTypes } from './types';

export const RoutesDetailes: RoutesDetailsTypes = {
  HOME_PAGE: {
    name: 'Home',
    path: '/',
    exact: true,
  },
  RESTAURANT: {
    name: 'Restaurant',
    path: '/restaurant/:id',
  },
  ACCOUNT: {
    name: 'Account',
    path: '/account/:id',
  },
};

const routes: RouteTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
    guard: DefaultGuard,
    exact: RoutesDetailes.HOME_PAGE.exact,
    component: lazy(() => import('../pages/Home')),
  },
  {
    name: RoutesDetailes.RESTAURANT.name,
    path: RoutesDetailes.RESTAURANT.path,
    guard: DefaultGuard,
    component: lazy(() => import('../pages/Restaurant')),
  },
  {
    name: RoutesDetailes.ACCOUNT.name,
    path: RoutesDetailes.ACCOUNT.path,
    guard: UserGuard,
    component: lazy(() => import('../pages/Account')),
  },
];

export default routes;
