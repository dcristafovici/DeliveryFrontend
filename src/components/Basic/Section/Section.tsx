import React from 'react';
import { HasChildrenInterface } from '../../../types/HasChildrenInterface';

const Section:React.FC<HasChildrenInterface> = ({ children } : HasChildrenInterface) => (
  <section>
    {children}
  </section>
);

export default Section;
