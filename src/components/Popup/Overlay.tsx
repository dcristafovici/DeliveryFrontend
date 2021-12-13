import React from 'react';
import { HasChildrenInterface } from '../../types/HasChildrenInterface';
import { OverlayStyled } from '../Checkout/CheckoutStyled';

const Overlay:React.FC<HasChildrenInterface> = ({ children }: HasChildrenInterface) => (
  <OverlayStyled>
    {children}
  </OverlayStyled>
);

export default Overlay;
