import React from 'react';
import { PopupInterface } from './PopupInterface';
import { PopupStyled } from './PopupStyled';

const Popup:React.FC<PopupInterface> = ({ children }: PopupInterface) => (
  <PopupStyled>
    {children}
  </PopupStyled>
);

export default Popup;
