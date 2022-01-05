import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../../constants';
import { CheckoutIcon } from '../../../Basic/Icons';
import { CheckoutTitleStyled } from '../CheckoutTitle/CheckoutTitleStyled';
import { CheckoutSuccessInterface } from './CheckoutSuccessInterface';
import { CheckoutSuccessStyled } from './CheckoutSuccessStyled';

const CheckoutSuccess:React.FC<CheckoutSuccessInterface> = (
  { orderNumber, orderCustomer }: CheckoutSuccessInterface,
) => (
  <CheckoutSuccessStyled>
    <CheckoutTitleStyled>
      Your order has been received
    </CheckoutTitleStyled>
    <div className="icon">
      <CheckoutIcon fill={COLORS.PRIMARY_BLUE} />
    </div>
    <ul>
      <li>
        Hello
        <span>{orderCustomer}</span>
      </li>
      <li>
        Thank you for your order from
        <span>Delivery Portal</span>
      </li>
      <li>
        Your order number is
        <span>
          №
          {orderNumber}
        </span>
      </li>
    </ul>

    <ul>
      <li>
        Additional information about your order you can see at the
        <span>
          <Link to="/account">
            account page
          </Link>
        </span>
      </li>
    </ul>

    <ul>
      <li>
        If you require any further information, feel free to contact us
        <span>+373 6711 0854</span>
      </li>
    </ul>
  </CheckoutSuccessStyled>
);

export default CheckoutSuccess;
