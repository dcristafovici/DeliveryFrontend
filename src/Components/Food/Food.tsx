import React from 'react';
import './Food.sass';

const Food:React.FC = () => (
  <section className="food">
    <div className="food-image">
      <img src="/images/food/food.jpg" alt="" />
    </div>
    <div className="food-content">
      <div className="food-title">
        <h1>Bamboo Bar</h1>
      </div>
      <div className="food-items">
        <div className="food-item">
          <span>Заказ от 1 500 ₽</span>
        </div>
        <div className="food-item">
          <span>Время доставки: 30 – 45 ми</span>
        </div>
        <div className="food-item food-item__info">
          <span>Информация о ресторане</span>
        </div>
      </div>
    </div>
  </section>
);

export default Food;
