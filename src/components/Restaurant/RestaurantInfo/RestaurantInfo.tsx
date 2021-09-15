import React from 'react';
import { RestaurantInfoStyled } from './RestaurantInfoStyled';

const RestaurantInfo:React.FC = () => (
  <RestaurantInfoStyled>
    <div className="restaurant-info__photo">
      <img src="/images/info.jpg" alt="Info" />
    </div>
    <div className="restaurant-info__content">
      <div className="restaurant-content__name">
        Restaurant name #1
      </div>
      <div className="restaurant-content__bottom">
        <div className="restaurant-content__price">From 150$</div>
        <div className="restaurant-content__time">Delivery Time 30-45 minutes</div>
        <div className="restaurant-content__link">Information about restaurant</div>
      </div>
    </div>
  </RestaurantInfoStyled>
);

export default RestaurantInfo;
