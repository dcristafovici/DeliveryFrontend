import React from 'react';
import { useDispatch } from 'react-redux';
import { addQuantity, removeProduct, subQuantity } from '../../../redux/actions/asideAction';
import { AsideItemInterface } from './AsideItemInterface';
import { AsideItemStyled } from './AsideItemStyled';

const AsideItem:React.FC<AsideItemInterface> = (
  { id, name, weight, quantity, price }: AsideItemInterface,
) => {
  const dispatch = useDispatch();

  return (
    <AsideItemStyled>
      <div className="aside-item__name">
        <span>{name}</span>
        <span>{weight}</span>
      </div>
      <div className="aside-item__controll">
        <div
          className="aside-controll__element"
          role="button"
          tabIndex={0}
          onClick={() => dispatch(addQuantity(id))}
        >
          +
        </div>

        <div className="aside-controll__input">
          <input type="text" value={quantity} />
        </div>

        <div
          className={`aside-controll__element ${quantity === 1 ? 'aside-controll__remove' : ''}`}
          role="button"
          tabIndex={0}
          onClick={quantity === 1
            ? () => dispatch(removeProduct(id))
            : () => dispatch(subQuantity(id))}
        >
          -
        </div>

      </div>
      <div className="aside-item__price">
        <span>{price}</span>
      </div>
    </AsideItemStyled>
  );
};

export default AsideItem;
