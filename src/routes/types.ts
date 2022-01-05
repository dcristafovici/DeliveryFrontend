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
}

export interface TokenGuardProps {
  component: any;
  path: string;
  exact: boolean;
}

export interface DefaultGuardProps {
  component: any;
  path: string;
  exact: boolean;
}