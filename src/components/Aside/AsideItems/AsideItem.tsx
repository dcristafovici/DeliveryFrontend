import React from 'react';
import { AsideItemInterface } from './AsideItemInterface';
import { AsideItemStyled } from './AsideItemStyled';

const AsideItem:React.FC<AsideItemInterface> = (
  { id, name, weight, quantity, price }: AsideItemInterface,
) => (
  <AsideItemStyled>
    <div className="aside-item__name">
      <span>{name}</span>
      <span>{weight}</span>
    </div>
    <div className="aside-item__controll">
      <div className="aside-controll__element">+</div>
      <div className="aside-controll__input">
        <input type="text" defaultValue={quantity} />
      </div>
      <div className="aside-controll__element">-</div>
    </div>
    <div className="aside-item__price">
      <span>{price}</span>
    </div>
  </AsideItemStyled>
);

export default AsideItem;
