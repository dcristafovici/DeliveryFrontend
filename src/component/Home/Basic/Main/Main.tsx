import React from 'react';
import { HasChildrenInterface } from '../../../../types/HasChildrenInterface';

const Main:React.FC<HasChildrenInterface> = ({ children } : HasChildrenInterface) => (
  <main>
    {children}
  </main>
);

export default Main;
