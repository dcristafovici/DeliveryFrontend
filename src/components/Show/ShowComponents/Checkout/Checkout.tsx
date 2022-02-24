import React from 'react';
import { useParams } from 'react-router';
import { useTypeSelector } from '../../../../redux/reduxHooks';
import CheckoutForm from './CheckoutForm';
import { CheckoutStyled } from './CheckoutStyled';
import CheckoutTitle from './CheckoutTitle';

const Checkout:React.FC = () => {
  const { id: restaurantID } = useParams<{ id: string }>();
  const user = useTypeSelector((state) => state.userReducer);
  const { cart = [], total } = useTypeSelector((state) => state.asideReducer);
  const { address } = useTypeSelector((state) => state.userReducer);
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
