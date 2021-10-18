import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTotal } from '../../../redux/actions/asideAction';
import { AsideItemInterface } from '../../../redux/types/reduxTypes';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import AsideItem from './AsideItem';
import { AsideItemsStyled } from './AsideItemStyled';

const AsideItems:React.FC = () => {
  const { cart = [] } = useTypeSelector((state) => state.asideReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalPrice = 0;
    if (cart.length) {
      cart.forEach((item: AsideItemInterface) => {
        totalPrice += item.quantity * item.price;
        dispatch(setTotal(totalPrice));
      });
    } else {
      dispatch(setTotal(0));
    }
  }, [cart]);

  return (
    <AsideItemsStyled>
      <div className="aside-items">
        {cart.map((item:any) => (
          <AsideItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            weight={item.weight}
            quantity={item.quantity}
          />
        ))}
      </div>
    </AsideItemsStyled>
  );
};

export default AsideItems;
