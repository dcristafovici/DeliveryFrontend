import React, { useState } from 'react';
import { ArrowIcon } from '../../Basic/Icons';
import { OrdersItemsStyled } from '../OrdersItems/OrdersItemStyled';
import OrdersPosition from '../OrdersPosition';
import { OrdersItemInterface } from './OrdersItemInterface';

const OrdersItem:React.FC<OrdersItemInterface> = (
  { date, total, restaurant, orderPayment, orderCart, orderNumber }: OrdersItemInterface,
) => {
  const [showPosition, setShowPosition] = useState<boolean>(false);
  const convertedTimeWithTimezone = new Date(date).toLocaleString('en-GB', {
    timeZone: 'Europe/Moscow',
  });
  return (
    <OrdersItemsStyled>
      <div
        className="orders-item__top"
        onClick={() => setShowPosition((prev) => !prev)}
        role="button"
        tabIndex={0}
      >
        <div className="orders-top__left">
          <div className="orders-top__number">
            {`Order: №${orderNumber}`}
          </div>
          <div className="orders-top__status">
            <span>Status: </span>
            <span>{orderPayment.status}</span>
          </div>
        </div>
        <div className="orders-top__right">
          <div className={`orders-top__toggle ${showPosition ? 'isOpen' : ''}`}>
            <span>Details</span>
            <ArrowIcon />
          </div>
        </div>
      </div>
      {showPosition && (
        <div className="orders-item__bottom">
          <div className="orders-general">
            <div className="orders-general__restaurant">{restaurant.name}</div>
            <div className="orders-general__rating">{restaurant.rating}</div>
          </div>
          <div className="orders-positions">
            {orderCart.map((position: any, index: number) => (
              <OrdersPosition
                quantity={position.quantity}
                product={position.product}
                key={index}
              />
            ))}
          </div>
          <div className="orders-actions">
            <div className="orders-date">
              {convertedTimeWithTimezone}
            </div>
            <div className="orders-total">
              <span>Total:</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      )}
    </OrdersItemsStyled>
  );
};

export default OrdersItem;
