import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_CART } from '../../../GraphQL/Queries';
import Button from '../../Basic/Button';
import { OrdersItemsStyled } from '../OrdersItems/OrdersItemStyled';
import OrdersPosition from '../OrdersPosition';
import { OrdersItemInterface } from './OrdersItemInterface';

const OrdersItem:React.FC<OrdersItemInterface> = (
  { id, totalPrice, restaurant, status }: OrdersItemInterface,
) => {
  const { loading, data = {} } = useQuery(GET_CART, { variables: { orderID: id } });
  const { GetCart: Cart = [] } = data;
  return (
    <OrdersItemsStyled>
      <div className="orders-item__top">
        <div className="orders-top__left">
          <div className="orders-top__number">
            {`Order: ${id}`}
          </div>
          <div className="orders-top__status">
            <span>Status: </span>
            <span>{status}</span>
          </div>
        </div>
        <div className="orders-top__right">
          <div className="orders-top__toggle">
            <span>Details</span>
          </div>
        </div>
      </div>

      <div className="orders-item__bottom">
        <div className="orders-general">
          <div className="orders-general__restaurant">{restaurant.name}</div>
          <div className="orders-general__rating">{restaurant.rating}</div>
        </div>
        <div className="orders-positions">
          {Cart.map((position: any) => (
            <OrdersPosition
              quantity={position.quantity}
              product={position.productID}
              key={position.id}
            />
          ))}

        </div>
        <div className="orders-actions">
          <div className="orders-repeat">
            <Button name="Repeat" disabled className="transparent" />
          </div>
          <div className="orders-total">
            <span>Total:</span>
            <span>{totalPrice}</span>
          </div>
        </div>
      </div>
    </OrdersItemsStyled>
  );
};

export default OrdersItem;
