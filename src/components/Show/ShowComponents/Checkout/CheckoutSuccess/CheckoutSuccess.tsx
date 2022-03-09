import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { COLORS } from '../../../../../constants';
import { UPDATE_PAYMENT_STATUS } from '../../../../../GraphQL/Order/OrderMutations';
import { FIND_ONE_ORDER } from '../../../../../GraphQL/Order/OrderQueries';
import { useTypeSelector } from '../../../../../redux/reduxHooks';
import { CheckoutIcon } from '../../../../Basic/Icons';
import { CheckoutTitleStyled } from '../CheckoutTitle/CheckoutTitleStyled';
import { PaymentStatusEnum } from './CheckoutSuccessInterface';
import { CheckoutSuccessStyled } from './CheckoutSuccessStyled';

const CheckoutSuccess:React.FC = () => {
  const { date = {} } = useTypeSelector((state) => state.showReducer);
  const { orderID } = date;

  const { loading, data = {} } = useQuery(FIND_ONE_ORDER, { variables: { id: orderID } });
  const { findOneOrder = [] } = data;
  const { orderCustomer, orderNumber, orderPayment } = findOneOrder;

  const [updateStatus] = useMutation(UPDATE_PAYMENT_STATUS);
  useEffect(() => {
    if (orderPayment) {
      const { id } = orderPayment;
      updateStatus({ variables: { data: { id, status: PaymentStatusEnum.COMPLETED } } });
    }
  }, [orderPayment]);

  return (
    <CheckoutSuccessStyled>
      <div className="checkout-success__wrapper">
        <CheckoutTitleStyled>
          Your order has been received
        </CheckoutTitleStyled>
        <div className="icon">
          <CheckoutIcon fill={COLORS.PRIMARY_BLUE} />
        </div>
        <ul>
          <li>
            Hello
            <span>{!loading && orderCustomer.name}</span>
          </li>
          <li>
            Thank you for your order from
            <span>Delivery Portal</span>
          </li>
          <li>
            Your order number is
            <span>
              №
              {!loading && orderNumber}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            If you require any further information, feel free to contact us
            <span>+373 6711 0854</span>
          </li>
        </ul>
      </div>
    </CheckoutSuccessStyled>
  );
};

export default CheckoutSuccess;
