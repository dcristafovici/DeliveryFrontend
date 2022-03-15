import React from 'react';

export interface RoutesPathTypes {
  name: string;
  path: string;
  exact?: boolean;
}

export interface RouteTypes extends RoutesPathTypes {
  guard: any;
  component: React.ComponentType;
}

export type RoutesDetailsTypes = {
  HOME_PAGE: RoutesPathTypes,
  RESTAURANT: RoutesPathTypes,
  ACCOUNT: RoutesPathTypes,
  FOR_RESTAURANTS: RoutesPathTypes,
  FOR_COMPANIES: RoutesPathTypes,
  PROMOTIONS: RoutesPathTypes,
}

export interface TokenGuardProps {
  component: any;
  path: string;
  exact: boolean;
}

export interface DefaultGuardProps {
  component: any;
}

export type RoutesNavigationTypes = {
  name: string;
  path: string;
};
