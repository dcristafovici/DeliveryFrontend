import React from 'react';
import './Aside.sass';

const Aside = () => (
  <aside className="aside">
    <div className="aside-top">
      <div className="aside-top__name">Мой заказ</div>
      <a href="#d">Удалить все</a>
    </div>
    <div className="aside-items">
      <div className="aside-item">
        <div className="aside-item__name">
          <span>Креветки васаби с дайконом, морковью и лепестками миндаля</span>
          <span>150 г</span>
        </div>
        <div className="aside-item__count">
          <div className="aside-plus">+</div>
          <input type="number" value="1" />
          <div className="aside-minus">-</div>
        </div>
        <div className="aside-item__price">
          <span>1 590 ₽</span>
        </div>
      </div>
      <div className="aside-item">
        <div className="aside-item__name">
          <span>Пицца Четыре сыра</span>
          <span>5500 г</span>
        </div>
        <div className="aside-item__count">
          <div className="aside-plus">+</div>
          <input type="number" value="1" />
          <div className="aside-minus">-</div>
        </div>
        <div className="aside-item__price">
          <span>590 ₽</span>
        </div>
      </div>
      <div className="aside-item">
        <div className="aside-item__name">
          <span>Салат с курицей терияки</span>
          <span>170 г</span>
        </div>
        <div className="aside-item__count">
          <div className="aside-plus">+</div>
          <input type="number" value="1" />
          <div className="aside-minus">-</div>
        </div>
        <div className="aside-item__price">
          <span>590 ₽</span>
        </div>
      </div>
      <div className="aside-item">
        <div className="aside-item__name">
          <span>Свежие спринг-роллы с креветкой и курицей</span>
          <span>170 г</span>
        </div>
        <div className="aside-item__count">
          <div className="aside-plus">+</div>
          <input type="number" value="1" />
          <div className="aside-minus">-</div>
        </div>
        <div className="aside-item__price">
          <span>590 ₽</span>
        </div>
      </div>
      <div className="aside-item">
        <div className="aside-item__name">
          <span>Доставка</span>
          <span> </span>
        </div>
        <div className="aside-item__price">
          <span>300 ₽</span>
        </div>
      </div>
    </div>
    <div className="aside-item__info">
      <div className="aside-info__prices">
        <span>0 ₽</span>
        <span>3 000 ₽</span>
      </div>
      <div className="aside-info__line">
        <div className="aside-info__fill" />
      </div>
      <div className="aside-info__text">
        <span>Закажите ещё на 1110 ₽ для бесплатной доставки</span>
      </div>
    </div>
    <div className="aside-item__delivery">
      <div className="aside-delivery__point">
        <span>Время доставки</span>
        <span>30 – 45 мин</span>
      </div>
      <div className="aside-delivery__point">
        <span>Итого</span>
        <span>2 590 ₽</span>
      </div>
    </div>
    <div className="aside-item__button">
      <a href="##" data-text="Оформить заказ" className="button">
        <span>Оформить заказ </span>
      </a>
    </div>
  </aside>
);

export default Aside;
