import React from 'react';

export interface RoutesPathTypes {
  name: string;
  path: string;
  exact?: boolean;
}

export interface RouteTypes extends RoutesPathTypes {
  component: React.ComponentType;
}

export type RoutesDetailsTypes = {
  HOME_PAGE: RoutesPathTypes,
  RESTAURANT: RoutesPathTypes,
}
