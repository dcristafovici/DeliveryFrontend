import React from 'react';
import CheckoutForm from './CheckoutForm';
import { CheckoutStyled } from './CheckoutStyled';
import CheckoutTitle from './CheckoutTitle';

const Checkout:React.FC = () => (
  <CheckoutStyled>
    <CheckoutTitle />
    <CheckoutForm />
  </CheckoutStyled>
);

export default Checkout;
