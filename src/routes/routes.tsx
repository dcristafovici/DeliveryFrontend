import Account from '../pages/Account';
import Home from '../pages/Home';
import Restaurant from '../pages/Restaurant';
import { DefaultGuard, TokenGuard } from './Guards';
import { RoutesDetailsTypes, RoutesNavigationTypes, RouteTypes } from './types';

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
    path: '/account/',
  },
  FOR_RESTAURANTS: {
    name: 'For restaurants',
    path: '/information/restaurants',
  },
  FOR_COMPANIES: {
    name: 'For companies',
    path: '/informations/companies',
  },
  PROMOTIONS: {
    name: 'Promotions',
    path: '/informations/promotions',
  },
};

const routes: RouteTypes[] = [
  {
    name: RoutesDetailes.HOME_PAGE.name,
    path: RoutesDetailes.HOME_PAGE.path,
    exact: RoutesDetailes.HOME_PAGE.exact,
    guard: DefaultGuard,
    component: Home,
  },
  {
    name: RoutesDetailes.RESTAURANT.name,
    path: RoutesDetailes.RESTAURANT.path,
    guard: DefaultGuard,
    component: Restaurant,
  },
  {
    name: RoutesDetailes.ACCOUNT.name,
    path: RoutesDetailes.ACCOUNT.path,
    guard: TokenGuard,
    component: Account,
  },
];

export const HeaderNavigationItems: RoutesNavigationTypes[] = [
  {
    name: RoutesDetailes.FOR_RESTAURANTS.name,
    path: RoutesDetailes.FOR_RESTAURANTS.path,
  },
  {
    name: RoutesDetailes.FOR_COMPANIES.name,
    path: RoutesDetailes.FOR_COMPANIES.path,
  },
  {
    name: RoutesDetailes.PROMOTIONS.name,
    path: RoutesDetailes.PROMOTIONS.path,
  },
];

export default routes;
