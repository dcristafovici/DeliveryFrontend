import React from 'react';
import { RestaurantCardStyled } from './RestaurantCardStyled';

const RestaurantCard:React.FC = () => (
  <RestaurantCardStyled>
    <div className="restaurant-card__top">
      <div className="card-top__photo">
        <img src="/images/restaurant.jpg" alt="Restaurant" />
      </div>
      <div className="card-top__info">
        <div className="card-top__sale card-top__item">-20%</div>
        <div className="card-top__time card-top__item">30-45 minutes</div>
      </div>
    </div>
    <div className="restaurant-card__bottom">
      <div className="card-bottom__name">
        Restaurant name #1
      </div>
      <div className="card-bottom__row">
        <div className="card-bottom__rating">4.9</div>
        <div className="card-bottom__price">From 150$</div>
      </div>
    </div>
  </RestaurantCardStyled>
);

export default RestaurantCard;
