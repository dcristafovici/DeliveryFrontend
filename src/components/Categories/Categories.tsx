import React from 'react';
import { CategoryWrapperInterface, ProductsComponentInterface } from '../Products/ProductsPoint/ProductsPointInterface';
import { CategoriesStyled } from './CategoriesStyled';

export const Categories:React.FC<ProductsComponentInterface> = (
  { categories = [] } : ProductsComponentInterface,
) => (
  <CategoriesStyled>
    <ul>
      {categories.map(({ category }: CategoryWrapperInterface) => (
        <li key={category.id}>{category.name}</li>))}
    </ul>
  </CategoriesStyled>
);

export default Categories;
