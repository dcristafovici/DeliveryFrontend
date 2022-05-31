import React from 'react';
import { DefaultGuardProps } from './types';

export const DefaultGuard:React.FC<DefaultGuardProps> = (Component: any) => (<Component />);

export const TokenGuard:React.FC<DefaultGuardProps> = (Component: any) => {
  const token = localStorage.getItem('user_token');
  return token ? <Component /> : null;
};
