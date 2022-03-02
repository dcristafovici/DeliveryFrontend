import React from 'react';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import CheckoutForm from './CheckoutForm';
import { CheckoutStyled } from './CheckoutStyled';
import CheckoutTitle from './CheckoutTitle';

const Checkout:React.FC = () => {
  const { date = {} } = useTypeSelector((state) => state.showReducer);
  const user = useTypeSelector((state) => state.userReducer);
  const { cart = [], total } = useTypeSelector((state) => state.asideReducer);
  const { address } = useTypeSelector((state) => state.userReducer);
  const { restaurantID } = date;
  return (
    <CheckoutStyled>
      <CheckoutTitle />
      <CheckoutForm
        restaurantID={restaurantID}
        user={user}
        cart={cart}
        address={address}
        total={total}
      />
    </CheckoutStyled>
  );
};

export default Checkout;
