import React, { useEffect } from 'react';
import { useTypeSelector } from '../../../redux/useTypeSelector';
import AsideItem from './AsideItem';

const AsideItems:React.FC = () => {
  const { cart = [] } = useTypeSelector((state) => state.asideReducer);
  useEffect(() => {
    console.log(cart);
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
