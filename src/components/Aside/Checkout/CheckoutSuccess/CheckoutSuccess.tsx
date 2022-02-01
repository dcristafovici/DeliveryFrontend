import { useQuery } from '@apollo/client';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { COLORS } from '../../../../constants';
import { FIND_ONE_ORDER } from '../../../../GraphQL/Order/OrderQueries';
import { RoutesDetailes } from '../../../../routes/routes';
import { CheckoutIcon } from '../../../Basic/Icons';
import Overlay from '../../../Popup/Overlay';
import { CheckoutTitleStyled } from '../CheckoutTitle/CheckoutTitleStyled';
import { CheckoutSuccessInterface } from './CheckoutSuccessInterface';
import { CheckoutSuccessStyled } from './CheckoutSuccessStyled';

const CheckoutSuccess:React.FC<CheckoutSuccessInterface> = (
  { orderID }: CheckoutSuccessInterface,
) => {
  const { loading, data = {} } = useQuery(FIND_ONE_ORDER, { variables: { id: orderID } });
  const { findOneOrder: order = [] } = data;
  const history = useHistory();
  return (
    <CheckoutSuccessStyled>
      <Overlay onClickEvent={() => history.push(RoutesDetailes.ACCOUNT.path)} />
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
            <span>{!loading && order.orderCustomer.name}</span>
          </li>
          <li>
            Thank you for your order from
            <span>Delivery Portal</span>
          </li>
          <li>
            Your order number is
            <span>
              №
              {!loading && order.orderNumber}
            </span>
          </li>
        </ul>

        <ul>
          <li>
            Additional information about your order you can see at the
            <span>
              <Link to={RoutesDetailes.ACCOUNT.path}>
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
      </div>
    </CheckoutSuccessStyled>
  );
};

export default CheckoutSuccess;
