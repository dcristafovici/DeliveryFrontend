import React from 'react';
import { AsideLineStyled } from './AsideLineStyled';

const AsideLine:React.FC = () => (
  <AsideLineStyled>
    <div className="aside-line__summs">
      <span>0 $</span>
      <span>3 000 $</span>
    </div>
    <div className="aside-line__line">
      <i />
    </div>
    <div className="aside-line__last">
      <span>For free delivery you need to purchase additional 1 100$</span>
    </div>
  </AsideLineStyled>
);

export default AsideLine;
