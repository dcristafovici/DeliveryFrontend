import React from 'react';
import ProductsItem from './ProductsItem';

const ProductsPoint:React.FC = () => (
  <div className="products-point">
    <div className="products-title">
      <h2>Популярные блюда</h2>
    </div>
    <div className="products-items">
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
    </div>
  </div>
);
export default ProductsPoint;
