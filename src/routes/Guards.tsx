import React from 'react';
import { Route } from 'react-router-dom';
import checkTokenValidate from '../utils';
import { DefaultGuardProps, TokenGuardProps } from './types';

export const DefaultGuard:React.FC<DefaultGuardProps> = (
  { component: Component, path, exact }: DefaultGuardProps,
) => (
  <Route path={path} exact={exact} component={Component} />
);

export const TokenGuard = ({ component: Component, path, exact }: TokenGuardProps) => {
  const checkToken = checkTokenValidate();
  return checkToken && <Route component={Component} path={path} exact={exact} />;
};
