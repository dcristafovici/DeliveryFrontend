import React from 'react';
import { RestaurantCardInterface } from '../RestaurantsInterface';
import { RestaurantCardStyled } from './RestaurantCardStyled';

const RestaurantCard:React.FC<RestaurantCardInterface> = (
  { id, name, description, minPrice, deliveryTime, discount, rating }: RestaurantCardInterface,
) => (
  <RestaurantCardStyled>
    <div className="restaurant-card__top">
      <div className="card-top__photo">
        <img src="/images/restaurant.jpg" alt="Restaurant" />
      </div>
      <div className="card-top__info">
        <div className="card-top__sale card-top__item">{discount}</div>
        <div className="card-top__time card-top__item">{rating}</div>
      </div>
    </div>
    <div className="restaurant-card__bottom">
      <div className="card-bottom__name">
        {name}
      </div>
      <div className="card-bottom__row">
        <div className="card-bottom__rating">{deliveryTime}</div>
        <div className="card-bottom__price">{minPrice}</div>
      </div>
    </div>
  </RestaurantCardStyled>
);

export default RestaurantCard;
