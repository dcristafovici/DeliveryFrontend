import React from 'react';
import ProductsItems from '../ProductsItems';
import { ProductsPointInterface } from './ProductsPointInterface';
import { ProductsPointStyled } from './ProductsPointStyled';

const ProductsPoint:React.FC<ProductsPointInterface> = ({ category }: ProductsPointInterface) => (
  <ProductsPointStyled>
    <div className="products-point__title">
      {category.name}
    </div>
    <ProductsItems categoryID={category.id} />
  </ProductsPointStyled>
);

export default ProductsPoint;
