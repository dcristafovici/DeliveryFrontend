import React from 'react';
import { HasChildrenInterface } from '../../../../types/HasChildrenInterface';

export const Form:React.FC<HasChildrenInterface> = ({ children }: HasChildrenInterface) => (
  <form>
    {children}
  </form>
);

export default Form;
