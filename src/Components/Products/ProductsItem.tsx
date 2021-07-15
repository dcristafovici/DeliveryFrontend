import React from 'react';

const ProductsItem:React.FC = () => (
  <div className="products-item">
    <div className="products-item__photo">
      <img src="/images/restaurants/r2.jpg" alt="Products" />
    </div>
    <div className="products-item__content">
      <div className="products-item__name">Креветки васаби с дайконом, морковью и ...</div>
      <div className="products-item__price">590 ₽</div>
      <div className="products-item__info">
        <p>Креветки, Дайкон, Кунжут (белый и черный), Мята,</p>
      </div>
    </div>
  </div>
);

export default ProductsItem;
