import React from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductsPointStyled, ProductsItemsStyled } from './ProductsPointStyled';

const ProductsPoint:React.FC = () => (
  <ProductsPointStyled>

    <div className="products-point__category">
      Popular products
    </div>

    <ProductsItemsStyled>
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
    </ProductsItemsStyled>

  </ProductsPointStyled>
);

export default ProductsPoint;
