import React from 'react';
import { ProductsPointInterface } from '../../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesPointStyled } from './CategoriesPointStyled';

const CategoriesPoint:React.FC<ProductsPointInterface> = ({ category }: ProductsPointInterface) => (
  <CategoriesPointStyled href={`#${category.id}`} className="categories-point" data-id={category.id}>
    <span>{category.name}</span>
  </CategoriesPointStyled>
);

export default CategoriesPoint;
