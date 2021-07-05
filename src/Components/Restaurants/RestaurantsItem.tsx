import React from 'react';

const RestaurantsItem:React.FC = () => (
  <div className="restaurants-item">
    <div className="restaurants-item__photo">
      <img src="./images/restaurants/r2.jpg" alt="Restaurant" />
      <div className="restaurants-item__details">
        <span>-20%</span>
        <span>30-45 мин</span>
      </div>
    </div>
    <div className="restaurants-item__content">
      <div className="restaurants-item__name">Ресторан Bamboo Bar</div>
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
            <span>Заказ от 1500 ₽</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantsItem;
