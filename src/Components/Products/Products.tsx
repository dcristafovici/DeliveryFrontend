import React from 'react';
import './Products.sass';
import ProductsPoint from './ProductsPoint';

const Products:React.FC = () => (
  <section className="products">
    <div className="products-wrapper">
      <ProductsPoint />
    </div>
  </section>
);

export default Products;
