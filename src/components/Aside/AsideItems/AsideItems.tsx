import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTotal } from '../../../redux/actions/asideAction';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import AsideItem from './AsideItem';

const AsideItems:React.FC = () => {
  const { cart = [] } = useTypeSelector((state) => state.asideReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item:any) => {
      totalPrice += item.quantity * parseFloat(item.price);
      dispatch(setTotal(totalPrice));
    });
  }, [cart]);

  return (
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
  );
};

export default AsideItems;
