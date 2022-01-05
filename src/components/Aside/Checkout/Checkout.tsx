import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { onCreateInterface } from './CheckoutForm/CheckoutFormInterface';
import { CheckoutStyled } from './CheckoutStyled';
import CheckoutSuccess from './CheckoutSuccess';
import CheckoutTitle from './CheckoutTitle';

const Checkout:React.FC = () => {
  const [orderCreated, setOrderCreated] = useState({
    orderCustomer: '',
    orderNumber: 0,
    status: false,
  });
  const onCreateHandler = (orderResult: onCreateInterface) => {
    const { orderCustomer, orderNumber } = orderResult;
    setOrderCreated({
      orderCustomer,
      orderNumber,
      status: true,
    });
  };
  return (
    <CheckoutStyled>
      {!orderCreated.status ? (
        <>
          <CheckoutTitle />
          <CheckoutForm onCreateHandler={onCreateHandler} />
        </>
      ) : (
        <CheckoutSuccess
          orderCustomer={orderCreated.orderCustomer}
          orderNumber={orderCreated.orderNumber}
        />
      )}
    </CheckoutStyled>
  );
};

export default Checkout;
