import React from 'react';
import { serverPath } from '../../../utils/envMode';
import { OrderPositionInterface } from './OrderPositionInterface';
import { OrderPositionStyled } from './OrderPositionStyled';

const OrdersPosition:React.FC<OrderPositionInterface> = (
  { quantity, product }: OrderPositionInterface,
) => (
  <OrderPositionStyled className="orders-position">
    <div className="orders-position__image">
      <>
        {product.media && product.media.small && (
          <img src={`${serverPath}/${product.media.small}`} alt={product.name} />
        )}
      </>
    </div>
    <div className="orders-position__name">
      <span>
        {product.name}
      </span>
      <span>{product.weight}</span>
    </div>
    <div className="orders-position__quantity">{`${quantity} u.`}</div>
    <div className="orders-position__price">{product.price * quantity}</div>
  </OrderPositionStyled>
);

export default OrdersPosition;
