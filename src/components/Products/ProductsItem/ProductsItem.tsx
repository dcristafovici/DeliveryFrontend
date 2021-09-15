import React from 'react';
import { ProductsItemStyled } from './ProductsItemStyled';

const ProductsItem:React.FC = () => (
  <ProductsItemStyled>
    <div className="products-item__photo">
      <img src="/images/product.jpg" alt="Product" />
    </div>
    <div className="products-item__content">
      <div className="products-item__name">Wasabi shrimp with daikon, carrot and almond petals</div>
      <div className="products-item__price">30 $</div>
      <div className="products-item__description">Shrimps, Daikon, Sesame (white and black), Mint, Tobiko Caviar, Almonds, Lemon, Sichima Seasoning, Batter ...</div>
    </div>
  </ProductsItemStyled>
);

export default ProductsItem;
