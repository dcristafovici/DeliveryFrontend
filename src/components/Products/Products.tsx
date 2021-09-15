import React from 'react';
import ProductsPoint from './ProductsPoint/ProductsPoint';
import { ProductsStyled } from './ProductsStyled';

const Products:React.FC = () => (
  <ProductsStyled>
    <ProductsPoint />
    <ProductsPoint />
    <ProductsPoint />
  </ProductsStyled>
);

export default Products;
