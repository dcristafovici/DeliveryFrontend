import React from 'react';
import { OverlayInterface } from './OverlayInterface';
import { OverlayStyled } from './OverlayStyled';

const Overlay:React.FC<OverlayInterface> = ({ onClickEvent }: OverlayInterface) => (
  <OverlayStyled onClick={onClickEvent} />
);

export default Overlay;
