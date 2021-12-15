import React from 'react';
import { OverlayStyled } from '../../Checkout/CheckoutStyled';
import { OverlayInterface } from './OverlayInterface';

const Overlay:React.FC<OverlayInterface> = ({ onClickEvent }: OverlayInterface) => (
  <OverlayStyled onClick={onClickEvent} />
);

export default Overlay;
