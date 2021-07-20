import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantInterface } from '../../Interfaces/RestaurantInterface';

const RestaurantsItem:React.FC<RestaurantInterface> = (props:RestaurantInterface) => {
  const {
    id,
    name,
    description,
    minPrice,
    saleValue,
    deliveryTime,
    image,
  } = props;
  return (
    <Link to={`/restaurant/${id}`} className="restaurants-item">
      <div className="restaurants-item__photo">
        <img src={image} alt="Restaurant" />
        <div className="restaurants-item__details">
          <span>
            -
            {saleValue}
            %
          </span>
          <span>
            {deliveryTime}
            мин.
          </span>
        </div>
      </div>
      <div className="restaurants-item__content">
        <div className="restaurants-item__name">{name}</div>
        <div className="restaurants-item__info">
          <div className="restaurants-info__left">
            <div className="restaurants-item__star">4.6</div>
            <div data-budget="2" className="restaurants-item__budget">
              <span>₽</span>
              <span>₽</span>
              <span>₽</span>
            </div>
          </div>
          <div className="restaurants-info__right">
            <div className="restaurants-item__price">
              <span>
                Заказ от
                {minPrice}
                ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantsItem;
