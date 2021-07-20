import React from 'react';
import './Products.sass';
import ProductsPoint from './ProductsPoint';
import Section from '../Basic/Section/Section';

const Products:React.FC = () => (
  <Section name="products">
    <div className="products-wrapper">
      <ProductsPoint />
    </div>
  </Section>
);

export default Products;
