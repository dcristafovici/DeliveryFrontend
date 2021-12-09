import React from 'react';
import { Route } from 'react-router-dom';
import { DefaultGuardProps } from './types';

export const DefaultGuard:React.FC<DefaultGuardProps> = (
  { component: Component, path, exact }: DefaultGuardProps,
) => (
  <Route path={path} exact={exact} component={Component} />
);
