import React from 'react';

type ProductItemType = {
  name: string;
  description: string;
  price: string;
}
const ProductsItem:React.FC<ProductItemType> = (props:ProductItemType) => {
  const { name, description, price } = props;
  return (
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
};

export default ProductsItem;
