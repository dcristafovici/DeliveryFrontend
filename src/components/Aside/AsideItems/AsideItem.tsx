import React from 'react';
import { useDispatch } from 'react-redux';
import { addQuantity, removeProduct, subQuantity, updateQuantity } from '../../../redux/actions/asideAction';
import { AsideItemInterface } from './AsideItemInterface';
import { AsideItemStyled } from './AsideItemStyled';

const AsideItem:React.FC<AsideItemInterface> = (
  { id, name, weight, quantity, price }: AsideItemInterface,
) => {
  const dispatch = useDispatch();

  const onChangeHandler = (event:any) => {
    const newQuantity = parseFloat(event.target.value);
    console.log(newQuantity < 1);
    dispatch(updateQuantity(id, (newQuantity < 1) ? 1 : newQuantity));
  };
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

        <div key={quantity} className="aside-controll__input">
          <input type="number" min={0} onBlur={(e) => onChangeHandler(e)} defaultValue={quantity} />
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
        <span>{`${quantity * parseFloat(price)} $`}</span>
      </div>
    </AsideItemStyled>
  );
};

export default AsideItem;
