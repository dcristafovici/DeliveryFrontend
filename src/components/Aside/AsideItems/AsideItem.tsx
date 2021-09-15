import React from 'react';
import { AsideItemStyled } from './AsideItemStyled';

const AsideItem:React.FC = () => (
  <AsideItemStyled>
    <div className="aside-item__name">
      <span>Wasabi shrimp with daikon, carrot and almond petals</span>
      <span>150 г</span>
    </div>
    <div className="aside-item__controll">
      <div className="aside-controll__element">+</div>
      <div className="aside-controll__input">
        <input type="text" defaultValue="3" />
      </div>
      <div className="aside-controll__element">-</div>
    </div>
    <div className="aside-item__price">
      <span>1 590 $</span>
    </div>
  </AsideItemStyled>
);

export default AsideItem;
